import { runInAction, makeAutoObservable } from 'mobx';
import VPNService from './../VPNService';
import { toJS } from 'mobx';

class FilterStore {
  constructor() {
    makeAutoObservable(this);
    this.vpnService = new VPNService();
  }
  _platformsList = [];
  _paymentMethodsList = [];
  _countriesList = [];
  _isLoaded = false;

  get platformsList() {
    return this._platformsList;
  }
  get paymentMethodsList() {
    return this._paymentMethodsList;
  }
  get countriesList() {
    return this._countriesList;
  }
  get isLoaded() {
    return this._isLoaded;
  }

  getFilters = () => {
    this.getFilterPlatformsAsync();
    this.getFilterPaymentAsync();
    this.getFilterCountriesAsync();
  };

  getFilterPlatformsAsync = async () => {
    try {
      const data = await this.vpnService.get('platforms');
      runInAction(() => {
        this._platformsList = data;
        this._isLoaded = true;
      });
    } catch (error) {
      runInAction(() => {
        this._status = 'error';
        this._isLoaded = false;
      });
    }
  };
  getFilterCountriesAsync = async () => {
    try {
      const data = await this.vpnService.get('countries');
      runInAction(() => {
        this._countriesList = data;
        this._isLoaded = true;
      });
    } catch (error) {
      runInAction(() => {
        this._status = 'error';
        this._isLoaded = false;
      });
    }
  };
  getFilterPaymentAsync = async () => {
    try {
      const data = await this.vpnService.get('payment-methods');
      runInAction(() => {
        this._paymentMethodsList = data;
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

export default new FilterStore();
