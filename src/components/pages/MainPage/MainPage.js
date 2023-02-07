import { Footer, Navigator, TopPanel, PostsList, RedactionTop, Slider } from '../../organisms/';
import ListVPN from './../../organisms/ListVPN/ListVPN';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';

import { ButtonLink } from '../../atoms';
import { VPNsStore } from '../../../stores/';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './MainPage.scss';

const MainPage = observer(() => {
  const { vpnsData, isLoadedVPNs } = VPNsStore;
  const navigate = useNavigate();

  return (
    <>
      <TopPanel />
      <Navigator />
      <div className="main-page__wrapper">
        <div className="main-page__inner">
          <Slider />
          <div className="news-list__wrapper">
            <PostsList />
            <RedactionTop />
          </div>

          <div className="vpn-list__wrapper">
            <div
              className="vpn-list__row"
              onClick={() => {
                navigate(`/rating`);
              }}
            >
              <div className="vpn-list__title title-50">Лучшие VPN — полный анализ (обновлено в январе 2023 г.)</div>
              <div className="btn btn_all_vpn">
                <ButtonLink text="Все" url="/rating" arrowRight={true} />
              </div>
              <div className="btn btn_all_vpn__mobile">
                <ButtonLink text="" url="/rating" arrowRight={true} />
              </div>
            </div>
            {isLoadedVPNs ? (
              <ListVPN list={vpnsData} />
            ) : (
              <Skeleton count={20} baseColor="#f5f5f5" highlightColor="#fff" className="transition_skeleton" />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
});

export default MainPage;
