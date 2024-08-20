import { runInAction, makeAutoObservable } from 'mobx';
import { BannersStore, FiltersStore, PostsStore, VPNsStore } from '../';

class JSONStore {
  constructor() {
    makeAutoObservable(this);
  }

  _JSONData = {};
  _isJSONLoaded = false;
  _apiURL = window.location.href.includes('localhost')
    ? 'https://vpnlove.org/vpnlove/database.json'
    : '/vpnlove/database.json';
  get JSONData() {
    return this._JSONData;
  }

  get isJSONLoaded() {
    return this._isJSONLoaded;
  }

  getJSONData = async () => {
    try {
      const response = await fetch(this._apiURL);
      const JSONdata = await response.json();
      runInAction(() => {
        this._JSONData = JSONdata;
        BannersStore.bannersList = JSONdata.banners;
        BannersStore.isLoaded = true;
        FiltersStore.platformsList = JSONdata.platforms;
        FiltersStore.paymentMethodsList = JSONdata.paymentMethods;
        FiltersStore.countriesList = JSONdata.countries;
        FiltersStore.isLoaded = true;
        PostsStore.isLoadedTop = true;
        PostsStore.isLoadedPosts = true;
        PostsStore.isLoadedPost = true;
        PostsStore.topRatedData = JSONdata.topRated;
        PostsStore.categoriesData = JSONdata.categories;
        PostsStore.postsData = JSONdata.posts;
        VPNsStore.vpnsData = JSONdata.vpns;
        VPNsStore.isLoadedVPNs = true;
        this._isJSONLoaded = true;
      });
    } catch (error) {
      runInAction(() => {
        BannersStore.isLoaded = false;
        FiltersStore.isLoaded = false;
        PostsStore.isLoadedTop = false;
        PostsStore.isLoadedPosts = false;
        PostsStore.isLoadedPost = false;
        VPNsStore.isLoadedVPNs = false;
        this._isJSONLoaded = false;
      });
    }
  };
}

export default new JSONStore();
