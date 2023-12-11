import { makeAutoObservable } from 'mobx';
import { JSONStore } from '../';

class SearchStore {
  constructor() {
    makeAutoObservable(this);
  }
  _queryData = '';
  _answerData = [];
  _status = 'loaded';

  set queryData(value) {
    this._queryData = value;
  }

  get answerData() {
    return this._answerData;
  }

  get queryData() {
    return this._queryData;
  }

  get status() {
    return this._status;
  }

  getSearch = async () => {
    this._status = 'load';
    this._answerData = [];
    Object.values(JSONStore.JSONData.posts)
      .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
      .forEach((post) => {
        if (
          post.title.toLowerCase().includes(this._queryData.toLowerCase()) ||
          post.shortDescription.toLowerCase().includes(this._queryData.toLowerCase())
        ) {
          this._answerData.push(post);
        }
      });
    this._status = 'loaded';
  };
}

export default new SearchStore();
