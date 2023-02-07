import { runInAction, makeAutoObservable } from 'mobx';
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
  _vpnDescr = null;
  _isLoadedVPNs = false;
  _isLoadedVPNData = false;

  get vpnsData() {
    return this._vpnsData;
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

  set vpnDescr(value) {
    this._vpnDescr = value;
  }
  set isLoadedVPNData(value) {
    this._isLoadedVPNData = value;
  }

  getVPNsAsync = async () => {
    try {
      const data = await this.vpnService.get('vpns');
      runInAction(() => {
        this._vpnsData = data;
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
