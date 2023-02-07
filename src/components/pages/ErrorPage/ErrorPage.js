import { Footer, Navigator, TopPanel, PostsList, RedactionTop, Slider } from '../../organisms/';
import ListVPN from './../../organisms/ListVPN/ListVPN';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';

import { ButtonLink } from '../../atoms';

import './ErrorPage.scss';

const MainPage = observer(() => {
  const navigate = useNavigate();

  return (
    <>
      <TopPanel />
      <Navigator />
      <div className="error-page page__wrapper">
        <div className="main-page__inner">
          <div className="error_wrapper">
            <div className="error_wrapper__title title-50">Страница не найдена</div>
            <div className="error_wrapper__description">Попробуйте вручную найти то, что искали</div>
            <div className="error_wrapper__btns">
              <ButtonLink
                text="Поиск по сайту"
                iconId="exportsquare"
                url="/search"
                externalURL={false}
                align="center"
                colored={true}
                customClass="error_wrapper__btns__search"
              />
              <ButtonLink
                text="На главную"
                iconId="exportsquare"
                url="/"
                externalURL={false}
                align="center"
                colored={false}
                customClass="error_wrapper__btns__go-main"
              />
              {/* <div
                className="error_wrapper__btns__go-main"
                onClick={() => {
                  navigate(`/`);
                }}
              >
                Перейти на главную
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
});

export default MainPage;
