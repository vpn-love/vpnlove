import { Link } from 'react-router-dom';

import './Navigator.scss';

const Navigator = (props) => {
  const { closeMenu } = props;
  const isMenuOpen = props.isMenuOpen || false;
  const navigatorList = [
    { link: 'rating', name: 'Рейтинг VPN' },
    { link: 'alternatives', name: 'Альтернативы VPN' },
    { link: 'about', name: 'О нас' }
  ];

  return (
    <div className="navigator__wrapper ">
      {isMenuOpen && (
        <div className="navigator__list navigator__list-mobile">
          <div className="navigator__list-mobile__inner">
            <div className="mobile_menu mobile_menu-open" onClick={closeMenu}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.17 14.83L14.83 9.17M14.83 14.83L9.17 9.17M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="navigator__list-mobile__inner-list" onCLick={closeMenu}>
              {navigatorList.map((node, key) => {
                return (
                  <Link to={`/${node.link}`} className="navigator__item" key={key}>
                    {node.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
      <div className="navigator__list navigator__list-desktop">
        {navigatorList.map((node, key) => {
          return (
            <Link to={`/${node.link}`} className="navigator__item" key={key}>
              {node.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navigator;
