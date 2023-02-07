import { Component } from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <div className="footer__wrapper">
        <div className="footer__inner">
          <div className="footer__elements">
            <div className="footer__element contact">
              <span className="vpn_icon"></span>
              <span className="address">
                <a href="mailto:contact@vpnlove.me">contact@vpnlove.me</a>
              </span>
            </div>
            <a href="https://roskomsvoboda.org/" className="link_rks" target="_blank">
              <span className="footer__element rks"></span>
            </a>
            <div className="footer__element language">Русский</div>
          </div>
          <div className="footer-data">© VPNLOVE, 2022</div>
        </div>
      </div>
    );
  }
}

export default Footer;
