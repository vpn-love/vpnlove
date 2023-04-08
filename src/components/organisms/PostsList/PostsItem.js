import { useNavigate, Link } from 'react-router-dom';
import Categories from './molecules/Categories';

import './PostsList.scss';
import { toJS } from 'mobx';

const PostsItem = (props) => {
  const { item } = props;
  const navigate = useNavigate();
  return (
    <div className="news-item__wrapper">
      <Categories list={item.categories} />
      <div
        className="news-item"
        onClick={() => {
          navigate(`/news/${item.slug}`);
        }}
      >
        <div className="news-item__content">
          <div className="news-item__title">{item.title}</div>
        </div>
        <div className="news-item__img">
          <img src={item.image} />
        </div>
      </div>
      {item.shopBanner && (
        <a className="news-item__btn-buy" href={item.shopBanner.url} target="_blank" rel="noreferrer">
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1013_11287)">
                <path opacity="0.3" d="M15.55 11L18.31 6H6.16003L8.53003 11H15.55Z" fill="#E5D9FF" />
                <path
                  d="M15.55 13C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C21.25 4.82 20.77 4 20.01 4H5.21L4.27 2H1V4H3L6.6 11.59L5.25 14.03C4.52 15.37 5.48 17 7 17H19V15H7L8.1 13H15.55ZM6.16 6H18.31L15.55 11H8.53L6.16 6ZM7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z"
                  fill="#E5D9FF"
                />
              </g>
              <defs>
                <clipPath id="clip0_1013_11287">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <span className="btn-buy__name">{item.shopBanner.name}</span>
          <span>
            {item.shopBanner.cost}
            {item.shopBanner.currencySymbol}
          </span>
        </a>
      )}
    </div>
  );
};

export default PostsItem;
