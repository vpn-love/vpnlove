import { runInAction, makeAutoObservable, action } from 'mobx';
import VPNService from './../VPNService';
import { toJS } from 'mobx';

// ------ POST MODEL ------
// absoluteUrl: "http://dev.vpnlove.me/api/posts/surfshark-block/"
// categories: {name: 'Новости', slug: 'news'}
// content: ""
// createdAt: "2022-12-26T15:44:15.297105Z"
// id: 2
// shortDescription: ""
// slug: "surfshark-block"
// title: ""
// updatedAt: "2022-12-27T20:08:00.769500Z"
// image : ''
// published: true
// ------ END POST MODEL -------

class PostsStore {
  constructor() {
    makeAutoObservable(this);
    this.vpnService = new VPNService();
  }
  _postsData = [];
  _topRatedData = [];
  _categoriesData = [];
  _allPost = [];
  _post = null;
  _isLoadedPosts = false;
  _isLoadedCategories = false;
  _isLoadedTop = false;
  _isLoadedPost = false;

  get postsData() {
    return this._postsData;
  }
  get categoriesData() {
    return this._categoriesData;
  }

  get topRatedData() {
    return this._topRatedData;
  }

  get post() {
    return this._post;
  }

  get isLoadedPosts() {
    return this._isLoadedPosts;
  }

  get isLoadedCategories() {
    return this._isLoadedCategories;
  }

  get isLoadedTop() {
    return this._isLoadedTop;
  }

  get isLoadedPost() {
    return this._isLoadedPost;
  }
  set isLoadedPost(value) {
    this._isLoadedPost = value;
  }
  set post(value) {
    this._post = value;
  }

  getCategoriesAsync = async () => {
    try {
      const data = await this.vpnService.get('categories');
      runInAction(() => {
        this._categoriesData = data;
        this._isLoadedCategories = true;
      });
    } catch (error) {
      runInAction(() => {
        this._status = 'error';
        this._isLoadedCategories = false;
      });
    }
  };

  getPostsAsync = async () => {
    try {
      const data = await this.vpnService.get('posts');
      runInAction(() => {
        this._postsData = data;
        this._isLoadedPosts = true;
      });
    } catch (error) {
      runInAction(() => {
        this._status = 'error';
        this._isLoadedPosts = false;
      });
    }
  };

  getTopRatedAsync = async () => {
    try {
      const data = await this.vpnService.get('top-rated');
      runInAction(() => {
        this._topRatedData = data;
        this._isLoadedTop = true;
      });
    } catch (error) {
      runInAction(() => {
        this._status = 'error';
        this._isLoadedTop = false;
      });
    }
  };

  getPostAsync = async (params) => {
    try {
      const target = 'posts/' + params;
      const data = await this.vpnService.get(target);
      runInAction(() => {
        this._post = data;
        this._isLoadedPost = true;
      });
    } catch (error) {
      runInAction(() => {
        this._status = 'error';
        this._isLoadedPost = false;
      });
    }
  };
}

export default new PostsStore();
