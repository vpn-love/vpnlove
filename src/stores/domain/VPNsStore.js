import { runInAction, makeAutoObservable, toJS } from 'mobx';
import VPNService from '../VPNService';

// ------ VPN MODEL ------
// absoluteUrl:"http://dev.vpnlove.me/api/vpns/i-vpn/"
// acceptsCryptocurrency:true
// cards:[{name: "Логгинг", type: "logging", logging: false,…}, {name: "Платформы и ОС", type: "platforms",…},…]
// 0:{name: "Логгинг", type: "logging", logging: false,…}
// 1:{name: "Платформы и ОС", type: "platforms",…}
// 2:{name: "Торренты", type: "torrents", torrents: true,…}
// 3:{name: "Обфускация", type: "obfuscation", obfuscation: true,…}
// 4:{name: "Аудит Инфобезопасности", type: "infosec_audit", infosecAudit: false, infosecAuditInfo: ""}
// 5:{name: "Принимает карты российских банков", type: "accepts_russian_creditcards",…}
// 6:{name: "Страны", type: "countries",…}
// 7:{name: "Методы оплаты", type: "payment_methods",…}
// 8:{name: "Connection Speed", type: "connection_speed", connectionQuality: "GOOD",…}
// createdAt:"2023-01-10T13:48:18.482940Z"
// currencySymbol:"$"
// dataCollection:"NO"
// description:"Сервис зарегистрированный в Гибралтаре, 2009 год. \r\nАктивно развивается и помогает пользователям из стран с жесткой цензурой обходить блокировки."
// discount:0
// extendedDescription:"Сервис зарегистрированный в Гибралтаре, 2009 год. \r\nАктивно развивается и помогает пользователям из стран с жесткой цензурой обходить блокировки.\r\n\r\nВ своем распоряжении имеет 2 тарифных плана - Standard (Доступ ко всем протоколам, одновременно 2 устройства, система Анти-Трекинга); Pro (Доступ ко всем протоколам, одновременно 7 устройств, Multi-hop, система Анти-Трекинга). \r\n\r\nПоддерживает от 2 до 7 устройств (в зависимости от тарифа). \r\n\r\nОсобенностями сервиса является наличие таких функций как - <b>Защита от IPv6 утечек</b> (не дает IPv6 запросам идти мимо VPN); <b>Защита от DNS утечек</b> (сервис использует анонимные DNS для защиты ваших запросов); <b>Multi-hop VPN</b> (подключение через несколько серверов в разных юрисдикциях для повышения конфиденциальности); <b>Port forwarding</b> (для WireGuard и OpenVPN, зарезервировано на всех серверах (за исключением США)); <b>AntiTracker</b> (блокирует рекламу, рекламное ПО, вредоносные веб-сайты и трекеры для сбора данных), <b>Pause VPN</b> (для случаев, когда необходимо временно отключить VPN, после чего соединение автоматически восстанавливается (кроме iOS)).\r\n\r\nПоддерживаемые протоколы - <b>WireGuard, OpenVPN и протоколы семейства IPSec.</b>"
// iconUrl:"http://dev.vpnlove.me/uploads/icons/ivpn-logo.png"
// id:199
// killSwitch:true
// multihop:true
// name:"IVPN"
// paymentInfo:"Сервис не принимает к оплате Российские карты, но проводит акцию - он раздает бесплатные аккаунты для пользователей из РФ, Украины и Беларуси."
// platformsInfo:""
// price:"6.00"
// promocode:null
// published:false
// rank:1
// rating:9.8
// recommended:true
// screenshots:[{name: "IVPN", imageUrl: "http://dev.vpnlove.me/uploads/screenshots/ivpn-app2.png",…},…]
// slug:"i-vpn"
// updatedAt:"2023-01-17T11:38:10.017222Z"
// website:"https://www.ivpn.net"
// ------ END VPN MODEL ------

class VPNsStore {
  constructor() {
    makeAutoObservable(this);
    this.vpnService = new VPNService();
  }
  _vpnsData = [];
  _vpnsDataFiltered = [];
  _vpnDescr = null;
  _isLoadedVPNs = false;
  _isLoadedVPNData = false;
  _selectedPaymentMethods = [];
  _selectedPlatforms = [];
  _selectedCountries = [];
  get vpnsData() {
    return this._vpnsData;
  }

  get vpnsDataFiltered() {
    return this._vpnsDataFiltered;
  }
  get vpnDescr() {
    return this._vpnDescr;
  }
  get isLoadedVPNs() {
    return this._isLoadedVPNs;
  }

  get isLoadedVPNData() {
    return this._isLoadedVPNData;
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
  set vpnDescr(value) {
    this._vpnDescr = value;
  }
  set isLoadedVPNData(value) {
    this._isLoadedVPNData = value;
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

    if (
      this._selectedPaymentMethods.length !== 0 ||
      this._selectedCountries.length !== 0 ||
      this._selectedPlatforms.length !== 0
    ) {
      this._vpnsDataFiltered = listFiltered.sort(function (a, b) {
        return a.index - b.index;
      });
    }
  };

  getVPNsAsync = async () => {
    try {
      const data = await this.vpnService.get('vpns');
      runInAction(() => {
        this._vpnsData = data.map((el, ind) => {
          return { ...el, index: ind + 1 };
        });
        this._vpnsDataFiltered = this._vpnsData;
        this._isLoadedVPNs = true;
      });
    } catch (error) {
      runInAction(() => {
        this._status = 'error';
        this._isLoadedVPNs = false;
      });
    }
  };
  getVPNAsync = async (params) => {
    try {
      const target = 'vpns/' + params;
      const data = await this.vpnService.get(target);
      runInAction(() => {
        this._vpnDescr = data;
        this._isLoadedVPNData = true;
      });
    } catch (error) {
      runInAction(() => {
        this._status = 'error';
        this._isLoadedVPNData = false;
      });
    }
  };
}

export default new VPNsStore();
