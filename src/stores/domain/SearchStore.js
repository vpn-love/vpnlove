import { runInAction, makeAutoObservable, action } from 'mobx';
import VPNService from './../VPNService';
import { toJS } from 'mobx';

class SearchStore {
  constructor() {
    makeAutoObservable(this);
    this.vpnService = new VPNService();
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
    let param = 'query=' + this._queryData;
    this._status = 'load';
    this._answerData = [];
    try {
      const data = await this.vpnService.get('search', param);
      runInAction(() => {
        this._answerData = data;
        this._status = 'loaded';
      });
    } catch (error) {
      runInAction(() => {
        this._status = 'error';
      });
    }
  };

  getPostsAsync = async () => {
    try {
      const data = await this.vpnService.get('posts');
      runInAction(() => {
        this._postsData = data;
      });
    } catch (error) {
      runInAction(() => {
        this._status = 'error';
      });
    }
  };

  getTopRatedAsync = async () => {
    try {
      const data = await this.vpnService.get('top-rated');
      runInAction(() => {
        this._topRatedData = data;
      });
    } catch (error) {
      runInAction(() => {
        this._status = 'error';
      });
    }
  };

  getPostAsync = async (params) => {
    try {
      const target = 'posts/' + params;
      const data = await this.vpnService.get(target);
      runInAction(() => {
        this._post = data;
      });
    } catch (error) {
      runInAction(() => {
        this._status = 'error';
      });
    }
  };
}

export default new SearchStore();
