import { makeAutoObservable } from 'mobx';

class PostsStore {
  constructor() {
    makeAutoObservable(this);
  }
  _bannersList = [];
  _isLoaded = false;

  get bannersList() {
    return this._bannersList;
  }

  set bannersList(list) {
    this._bannersList = list;
  }

  get isLoaded() {
    return this._isLoaded;
  }

  set isLoaded(isLoaded) {
    this._isLoaded = isLoaded;
  }
}

export default new PostsStore();
