import { Link } from 'react-router-dom';
import './ListVPN.scss';

const List = (props) => {
  const { item, index } = props;
  return (
    <Link to={`/rating/${item.slug}`} className="vpn-list__item">
      <div className="vpn-list__item-number">{index + 1}</div>

      <div className="vpn-list__item-content">
        <div className="vpn-list__item-row">
          <div className="vpn-list__item-logo">
            <img src={`${item.iconUrl}`} />
          </div>
          <div className="vpn-list__item-descr">
            <div className="vpn-list__item-name">{item.name}</div>
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
