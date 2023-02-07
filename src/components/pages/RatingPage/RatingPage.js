import { Link } from 'react-router-dom';

import { Footer, Navigator, TopPanel, FullListVpn } from '../../organisms/';

import './RatingPage.scss';

const RatingPage = () => {
  return (
    <>
      <TopPanel />
      <Navigator />
      <div className="rating-page page__wrapper">
        <div className="page__inner">
          <div className="title title-50">Рейтинг VPN сервисов</div>
          <div className="description">
            <p>Данный раздел поможет вам выбрать VPN-сервис. Все сервисы прошли проверку нашими специалистами. </p>
            <p>
              Мы&nbsp;рекомендуем лишь те&nbsp;сервисы, которые отвечают нашим стандартам безопасности, приватности
              и&nbsp;качества. Ознакомится с&nbsp;методикой оценки вы&nbsp;можете{' '}
              <a href="#/top/assessment-methodology" className="link">
                в&nbsp;нашем материале
              </a>
              , где мы&nbsp;подробно рассказываем о&nbsp;всех пунктах и&nbsp;нюансах.
            </p>
          </div>
          {/* <div className="filters">фильтры</div> */}
          <FullListVpn />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RatingPage;
