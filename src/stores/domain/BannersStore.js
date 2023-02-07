import { runInAction, makeAutoObservable } from 'mobx';
import VPNService from './../VPNService';
import { toJS } from 'mobx';

// ------ POST MODEL ------
// backgroundColor : "#cedae1"
// description : ""
// image : "http://dev.vpnlove.me/uploads/images/vpn-love-met.jpg"
// linkText : "Подробнее о нашей методологии"
// showOnHomepage : true
// title : "Методология оценки VPN-сервисов от VPN Love"
// url : "https://annachervatyuk.github.io/vpn_love/#/top/assessment-methodology"
// ------ END POST MODEL -------

class PostsStore {
  constructor() {
    makeAutoObservable(this);
    this.vpnService = new VPNService();
  }
  _bannersList = [];
  _isLoaded = false;

  get bannersList() {
    return this._bannersList;
  }

  get isLoaded() {
    return this._isLoaded;
  }

  getBannersListAsync = async () => {
    try {
      const data = await this.vpnService.get('banners');
      runInAction(() => {
        this._bannersList = data;
        this._isLoaded = true;
      });
    } catch (error) {
      runInAction(() => {
        this._status = 'error';
        this._isLoaded = false;
      });
    }
  };
}

export default new PostsStore();
