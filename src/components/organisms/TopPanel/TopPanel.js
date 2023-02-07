import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigator, Search } from './../';

import './TopPanel.scss';

const TopPanel = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="top_panel__wrapper">
      <div className="top_panel__inner">
        <div className="mobile_menu__wrapper">
          {!isMenuOpen ? (
            <>
              <div
                className="mobile_menu mobile_menu-close"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 7H21M3 12H21M3 17H21" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <Navigator closeMenu={handleMenuOpen} isMenuOpen={false} />
            </>
          ) : (
            <>
              <Navigator closeMenu={handleMenuOpen} isMenuOpen={true} />
            </>
          )}
        </div>
        <Link to="/" className="logo logo-vpn" />
        <Search />
      </div>
    </div>
  );
};

export default TopPanel;
