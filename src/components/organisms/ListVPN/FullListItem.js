import { Link } from 'react-router-dom';
import './ListVPN.scss';
import { toJS } from 'mobx';

const List = (props) => {
  const { item } = props;
  const availableFromRussia = item.cards.find(({ type }) => type === 'available_from_russia');

  const isAmneziaVpn = item.name.toLowerCase().includes('amnezia');
  return (
    <Link to={`/rating/${item.slug}`} className={`vpn-list__item ${isAmneziaVpn ? 'recommend' : ''}`}>
      <div className="vpn-list__item-number">{item.index}</div>

      <div className="vpn-list__item-content">
        <div className="vpn-list__item-row">
          <div className="vpn-list__item-logo">
            <img src={`${item.iconUrl}`} />
          </div>
          <div className="vpn-list__item-descr">
            <div className="vpn-list__item-name-block">
              <div className="vpn-list__item-name">
                {item.name}
                {isAmneziaVpn && <div className="vpn-list__item-name__recommend">Рекомендуем</div>}
                {!availableFromRussia.state && (
                  <div className="vpn-list__item-russia_disabled">
                    <svg width="25" height="14" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_952_6767)">
                        <path
                          d="M4.99999 2.83334C2.69999 2.83334 0.833328 4.70001 0.833328 7.00001C0.833328 9.30001 2.69999 11.1667 4.99999 11.1667C7.29999 11.1667 9.16666 9.30001 9.16666 7.00001C9.16666 4.70001 7.29999 2.83334 4.99999 2.83334ZM1.66666 7.00001C1.66666 5.15834 3.15833 3.66668 4.99999 3.66668C5.77083 3.66668 6.47916 3.92918 7.04166 4.37084L2.37083 9.04168C1.92916 8.47918 1.66666 7.77084 1.66666 7.00001ZM4.99999 10.3333C4.22916 10.3333 3.52083 10.0708 2.95833 9.62918L7.62916 4.95834C8.07083 5.52084 8.33333 6.22918 8.33333 7.00001C8.33333 8.84168 6.84166 10.3333 4.99999 10.3333Z"
                          fill="#7F7A87"
                        />
                      </g>
                      <path
                        d="M12.86 3.36C13.7933 3.36 14.4733 3.54333 14.9 3.91C15.3267 4.27667 15.54 4.79333 15.54 5.46C15.54 5.85333 15.45 6.22333 15.27 6.57C15.0967 6.91 14.8 7.18667 14.38 7.4C13.9667 7.61333 13.4033 7.72 12.69 7.72H11.87V10.5H10.97V3.36H12.86ZM12.78 4.13H11.87V6.95H12.59C13.27 6.95 13.7767 6.84 14.11 6.62C14.4433 6.4 14.61 6.02667 14.61 5.5C14.61 5.04 14.4633 4.69667 14.17 4.47C13.8767 4.24333 13.4133 4.13 12.78 4.13ZM20.5147 3.26V4.14C21.288 4.15333 21.898 4.28 22.3447 4.52C22.7914 4.76 23.108 5.08 23.2947 5.48C23.4814 5.87333 23.5747 6.31333 23.5747 6.8C23.5747 7.12 23.5247 7.44 23.4247 7.76C23.3314 8.07333 23.168 8.36 22.9347 8.62C22.7014 8.87333 22.388 9.08 21.9947 9.24C21.6014 9.4 21.108 9.48667 20.5147 9.5V10.6H19.6247V9.5C19.018 9.48667 18.5147 9.4 18.1147 9.24C17.7214 9.07333 17.4114 8.86 17.1847 8.6C16.958 8.33333 16.798 8.04333 16.7047 7.73C16.6114 7.41667 16.5647 7.10667 16.5647 6.8C16.5647 6.32667 16.658 5.89333 16.8447 5.5C17.038 5.1 17.358 4.77667 17.8047 4.53C18.2514 4.28333 18.858 4.15333 19.6247 4.14V3.26H20.5147ZM19.6247 4.9C19.0914 4.91333 18.6647 5 18.3447 5.16C18.0314 5.32 17.808 5.54 17.6747 5.82C17.5414 6.09333 17.4747 6.41667 17.4747 6.79C17.4747 7.37667 17.6447 7.84667 17.9847 8.2C18.3314 8.54667 18.878 8.73333 19.6247 8.76V4.9ZM20.5147 8.76C21.288 8.73333 21.838 8.54333 22.1647 8.19C22.498 7.83 22.6647 7.36333 22.6647 6.79C22.6647 6.41 22.598 6.08333 22.4647 5.81C22.3314 5.53 22.108 5.31333 21.7947 5.16C21.4814 5 21.0547 4.91333 20.5147 4.9V8.76Z"
                        fill="#7F7A87"
                      />
                      <defs>
                        <clipPath id="clip0_952_6767">
                          <rect width="10" height="10" fill="white" transform="translate(0 2)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                )}
              </div>
              <div className="vpn-list__item-price">
                от {item.currencySymbol}
                {item.price}
              </div>
            </div>
            <div className="vpn-list__item-rating">
              <span className="rating_value">{item.rating}</span>
              <span className="rating_full">/10</span>
            </div>
          </div>
        </div>
        <div className="vpn-list__item-progress">
          <div className="filled" style={{ width: `${item.rating * 10}%` }}></div>
        </div>
      </div>
    </Link>
  );
};

export default List;
