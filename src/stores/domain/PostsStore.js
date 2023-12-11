import { makeAutoObservable, toJS } from 'mobx';

class PostsStore {
  constructor() {
    makeAutoObservable(this);
  }
  _postsData = {};
  _topRatedData = [];
  _categoriesData = [];
  _allPost = [];
  _isLoadedPosts = false;
  _isLoadedTop = false;
  _isLoadedPost = false;

  get postsData() {
    return Object.values(this._postsData).sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  }

  get fullPostsData() {
    return this._postsData;
  }

  set postsData(list) {
    this._postsData = list;
  }

  get categoriesData() {
    return this._categoriesData;
  }

  set categoriesData(list) {
    list.forEach((element) => {
      let el = element;
      el.posts = element.posts.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
      return el;
    });
    this._categoriesData = list;
  }

  get topRatedData() {
    return this._topRatedData;
  }

  set topRatedData(list) {
    this._topRatedData = list.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  }

  get isLoadedPosts() {
    return this._isLoadedPosts;
  }

  set isLoadedPosts(isLoadedPosts) {
    this._isLoadedPosts = isLoadedPosts;
  }

  get isLoadedTop() {
    return this._isLoadedTop;
  }

  set isLoadedTop(isLoadedTop) {
    this._isLoadedTop = isLoadedTop;
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
}

export default new PostsStore();
