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
                <a href="mailto:contact@vpnlove.me">contact@vpnlove.org</a>
              </span>
            </div>
            <div className="footer__element footer-data">VPNLOVE, 2023</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
