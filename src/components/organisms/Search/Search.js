import { Link } from 'react-router-dom';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { Input } from './../../atoms';
import cn from 'classnames';
import { SearchStore } from '../../../stores/';

import './Search.scss';

const Search = () => {
  const { queryData } = SearchStore;
  const navigate = useNavigate();
  const location = useLocation().pathname.replace('/', '');

  const linkQuerySearch = useLocation().search.replace('?query=', '');

  const [isSearchOpen, setSearchOpen] = useState(location === 'search' ? true : false);
  const [querySearch, setQuerySearch] = useState(queryData || linkQuerySearch);

  useEffect(() => {
    if (location === 'search' && queryData === '') {
      SearchStore.queryData = linkQuerySearch;
      SearchStore.getSearch();
    }
  }, [location]);

  var wrapperClass = cn({
    search__wrapper: true,
    'search-open': isSearchOpen
  });

  const onChangeInput = (value) => {
    setQuerySearch(value.target.value);
  };

  const handleSubmit = () => {
    SearchStore.queryData = querySearch;
    SearchStore.getSearch();
    navigate(`/search?query=${querySearch}`);
  };
  const handleKeypress = (e) => {
    if (e.which === 13) {
      handleSubmit();
    }
  };

  return (
    <div className={wrapperClass}>
      <div className="search__inner ">
        {isSearchOpen ? (
          <div className="search__inner-open">
            <div className="search__input">
              <Input
                type="text"
                placeholder="Поиск"
                onChange={onChangeInput}
                value={querySearch}
                onKeyPress={handleKeypress}
              />
              <div className="btn_search" onClick={handleSubmit}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22 22L20 20M11.5 21C12.7476 21 13.9829 20.7543 15.1355 20.2769C16.2881 19.7994 17.3354 19.0997 18.2175 18.2175C19.0997 17.3354 19.7994 16.2881 20.2769 15.1355C20.7543 13.9829 21 12.7476 21 11.5C21 10.2524 20.7543 9.0171 20.2769 7.86451C19.7994 6.71191 19.0997 5.66464 18.2175 4.78249C17.3354 3.90033 16.2881 3.20056 15.1355 2.72314C13.9829 2.24572 12.7476 2 11.5 2C8.98044 2 6.56408 3.00089 4.78249 4.78249C3.00089 6.56408 2 8.98044 2 11.5C2 14.0196 3.00089 16.4359 4.78249 18.2175C6.56408 19.9991 8.98044 21 11.5 21V21Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div
              className="btn_close_search"
              onClick={() => {
                setSearchOpen(!isSearchOpen);
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.17 14.83L14.83 9.17M14.83 14.83L9.17 9.17M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        ) : (
          <div
            className="btn_search"
            onClick={() => {
              setSearchOpen(!isSearchOpen);
              setQuerySearch('');
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22 22L20 20M11.5 21C12.7476 21 13.9829 20.7543 15.1355 20.2769C16.2881 19.7994 17.3354 19.0997 18.2175 18.2175C19.0997 17.3354 19.7994 16.2881 20.2769 15.1355C20.7543 13.9829 21 12.7476 21 11.5C21 10.2524 20.7543 9.0171 20.2769 7.86451C19.7994 6.71191 19.0997 5.66464 18.2175 4.78249C17.3354 3.90033 16.2881 3.20056 15.1355 2.72314C13.9829 2.24572 12.7476 2 11.5 2C8.98044 2 6.56408 3.00089 4.78249 4.78249C3.00089 6.56408 2 8.98044 2 11.5C2 14.0196 3.00089 16.4359 4.78249 18.2175C6.56408 19.9991 8.98044 21 11.5 21V21Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
