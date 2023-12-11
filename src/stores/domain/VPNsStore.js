import { makeAutoObservable } from 'mobx';

class VPNsStore {
  constructor() {
    makeAutoObservable(this);
  }
  _vpnsData = [];
  _vpnsDataFiltered = [];
  _fullVpnsData = {};
  _isLoadedVPNs = false;
  _selectedPaymentMethods = [];
  _selectedPlatforms = [];
  _selectedCountries = [];
  _RFAvailable = false;

  get vpnsDataFiltered() {
    return this._vpnsDataFiltered;
  }

  get isLoadedVPNs() {
    return this._isLoadedVPNs;
  }

  get selectedPaymentMethods() {
    return this._selectedPaymentMethods;
  }
  get selectedPlatforms() {
    return this._selectedPlatforms;
  }
  get selectedCountries() {
    return this._selectedCountries;
  }

  get RFAvailable() {
    return this._RFAvailable;
  }

  set selectedPaymentMethods(value) {
    this._selectedPaymentMethods = value;
  }
  set selectedPlatforms(value) {
    this._selectedPlatforms = value;
  }
  set selectedCountries(value) {
    this._selectedCountries = value;
  }

  set RFAvailable(value) {
    this._RFAvailable = value;
  }

  set isLoadedVPNs(isLoadedVPNs) {
    this._isLoadedVPNs = isLoadedVPNs;
  }

  get vpnsData() {
    return this._vpnsData;
  }

  get fullVpnsData() {
    return this._fullVpnsData;
  }

  set vpnsData(list) {
    this._fullVpnsData = list;
    this._vpnsData = Object.values(list)
      .sort((a, b) => (a.rating < b.rating ? 1 : -1))
      .map((el, ind) => {
        return { ...el, index: ind + 1 };
      });
    this._vpnsDataFiltered = this._vpnsData;
  }

  filterVPN = () => {
    this._vpnsDataFiltered = this._vpnsData;
    let listFiltered = [];

    if (this._selectedPaymentMethods.length > 0) {
      this._selectedPaymentMethods.forEach((nodeFilter) => {
        this._vpnsDataFiltered.forEach((vpn) => {
          let listMethods = vpn.cards.filter(function (val) {
            return val.type === 'payment_methods';
          })[0].methods;
          const getCard = listMethods.filter((n) => n.slug.toLowerCase() === nodeFilter.slug.toLowerCase());
          if (getCard.length > 0) {
            if (listFiltered.filter((n) => n.id === vpn.id).length === 0) {
              listFiltered.push(vpn);
            }
          }
        });
      });
      this._vpnsDataFiltered = listFiltered;
    }

    if (this._selectedPlatforms.length > 0) {
      listFiltered = [];
      this._selectedPlatforms.forEach((nodeFilter) => {
        this._vpnsDataFiltered.forEach((vpn) => {
          let listPlatforms = vpn.cards.filter(function (val) {
            return val.type === 'platforms';
          })[0].platforms;
          const getCard = listPlatforms.filter((n) => n.slug.toLowerCase() === nodeFilter.slug.toLowerCase());
          if (getCard.length > 0) {
            if (listFiltered.filter((n) => n.id === vpn.id).length === 0) {
              listFiltered.push(vpn);
            }
          }
        });
      });
      this._vpnsDataFiltered = listFiltered;
    }

    if (this._selectedCountries.length > 0) {
      listFiltered = [];
      this._selectedCountries.forEach((nodeFilter) => {
        this._vpnsDataFiltered.forEach((vpn) => {
          let listCountries = vpn.cards.filter(function (val) {
            return val.type === 'countries';
          })[0].countries;
          const getCard = listCountries.filter((n) => n.code.toLowerCase() === nodeFilter.code.toLowerCase());
          if (getCard.length > 0) {
            if (listFiltered.filter((n) => n.id === vpn.id).length === 0) {
              listFiltered.push(vpn);
            }
          }
        });
      });
    }

    if (this._RFAvailable) {
      listFiltered = [];
      this._vpnsDataFiltered.forEach((vpn) => {
        let isRFAvailable = vpn.cards.filter(function (val) {
          return val.type === 'available_from_russia';
        })[0].state;
        if (isRFAvailable) {
          listFiltered.push(vpn);
        }
      });
    }

    if (
      this._selectedPaymentMethods.length !== 0 ||
      this._selectedCountries.length !== 0 ||
      this._selectedPlatforms.length !== 0 ||
      this._RFAvailable
    ) {
      this._vpnsDataFiltered = listFiltered.sort(function (a, b) {
        return a.index - b.index;
      });
    }
  };
}

export default new VPNsStore();
