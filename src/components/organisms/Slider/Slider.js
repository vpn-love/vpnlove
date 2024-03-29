import './Slider.scss';
import { observer } from 'mobx-react';
import { useLocation } from 'react-router-dom';

import SliderItem from './SliderItem';

import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { BannersStore } from '../../../stores/';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Slider = observer(() => {
  const pathname = useLocation().pathname;
  const { bannersList, isLoaded } = BannersStore;
  const list =
    pathname === '/'
      ? bannersList.filter((el) => {
          return el.showOnHomepage;
        })
      : bannersList.filter((el) => {
          return !el.showOnHomepage;
        });

  return (
    <div className="slider-vpn__wrapper">
      {isLoaded ? (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={25}
          navigation
          slidesPerView="auto"
          pagination={{
            clickable: true,
            type: 'bullets',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            bulletClass: 'swiper-pagination-bullet'
          }}
        >
          {list.map((node, key) => {
            return (
              <SwiperSlide key={key}>
                <SliderItem item={node} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <>
          <Skeleton count={20} baseColor="#f5f5f5" highlightColor="#fff" className="transition_skeleton" />
        </>
      )}
    </div>
  );
});

export default Slider;
