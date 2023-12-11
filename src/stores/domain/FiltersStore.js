import { makeAutoObservable } from 'mobx';

class FilterStore {
  constructor() {
    makeAutoObservable(this);
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

  set platformsList(list) {
    this._platformsList = list;
  }
  set paymentMethodsList(list) {
    this._paymentMethodsList = list;
  }
  set countriesList(list) {
    this._countriesList = list;
  }
  set isLoaded(isLoaded) {
    this._isLoaded = isLoaded;
  }
}

export default new FilterStore();
