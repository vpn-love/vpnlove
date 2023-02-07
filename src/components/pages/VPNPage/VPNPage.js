import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Footer, Navigator, TopPanel } from '../../organisms/';
import { ButtonLink } from '../../atoms/';
import GeneralRating from './components/GeneralRating';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { VPNsStore } from '../../../stores/';
import { useParams } from 'react-router-dom';
import { marked } from 'marked';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import './VPNPage.scss';
import Promocode from './components/atoms/Promocode';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
// import { ReactComponent as ReactSprite } from '../../../images/sprite.svg';
import { toJS } from 'mobx';

const VPNPage = observer(() => {
  const params = useParams().vpn;
  useEffect(() => {
    if (params) VPNsStore.getVPNAsync(params);
  }, [params]);

  const { vpnDescr, vpnsData, isLoadedVPNData } = VPNsStore;
  const vpnCount = vpnsData.length;
  const listPlatforms = ['Windows', 'MacOS', 'iOS', 'Android', 'Linux', 'SmartTV', 'Routers'];

  const paymentMethods = vpnDescr ? vpnDescr.cards.find((element) => element.type === 'payment_methods') : null;
  const priceVPN = vpnDescr ? vpnDescr.cards.find((element) => element.type === 'price') : null;

  return (
    <>
      <TopPanel />
      <Navigator />
      <div className="vpn-page page__wrapper">
        <div className="page__inner">
          <div className="categories">
            {!isLoadedVPNData ? (
              <Skeleton height={'100%'} baseColor="#f5f5f5" highlightColor="#fff" className="transition_skeleton" />
            ) : (
              <>Обзоры</>
            )}
          </div>
          <div className="title title-50">
            {!isLoadedVPNData ? (
              <Skeleton height={'100%'} baseColor="#f5f5f5" highlightColor="#fff" className="transition_skeleton" />
            ) : (
              <>{vpnDescr.name}</>
            )}
          </div>
          <div className="description">
            <div className="description__logo">
              {!isLoadedVPNData ? (
                <Skeleton height={'100%'} baseColor="#f5f5f5" highlightColor="#fff" className="transition_skeleton" />
              ) : (
                <img src={`${vpnDescr.iconUrl}`} />
              )}
            </div>
            <div className="description__text">
              {!isLoadedVPNData ? (
                <Skeleton count={10} baseColor="#f5f5f5" highlightColor="#fff" className="transition_skeleton" />
              ) : (
                <div dangerouslySetInnerHTML={{ __html: marked.parse(vpnDescr.description) }} />
              )}
            </div>
            <div className="description__rating">
              <div className="rating">
                {!isLoadedVPNData ? (
                  <Skeleton height={'100%'} baseColor="#f5f5f5" highlightColor="#fff" className="transition_skeleton" />
                ) : (
                  <>
                    <div className="rating__data">
                      <span className="rating__value">{vpnDescr.rating}</span>
                      <span className="rating__full">/10</span>
                    </div>
                    <div className="rating__place">
                      {vpnDescr.rank} место из {vpnCount}
                    </div>
                  </>
                )}
              </div>
              <div className="rating">
                {!isLoadedVPNData ? (
                  <Skeleton height={'100%'} baseColor="#f5f5f5" highlightColor="#fff" className="transition_skeleton" />
                ) : (
                  <>
                    <div className="rating__data">
                      <span className="rating__full">{vpnDescr.currencySymbol}</span>
                      <span className="rating__value">{vpnDescr.price}</span>
                    </div>
                    <span className="rating__place">мин. цена</span>
                  </>
                )}
              </div>
            </div>
            <div className="description__footer">
              {!isLoadedVPNData ? (
                <Skeleton height={'100%'} baseColor="#f5f5f5" highlightColor="#fff" className="transition_skeleton" />
              ) : (
                <>
                  <div className="block__buy-vpn">
                    <ButtonLink
                      text={`Сайт ${vpnDescr.name}`}
                      iconId="exportsquare"
                      url={vpnDescr.website}
                      externalURL={true}
                      align="center"
                      colored={true}
                      customClass="button_vpn-link"
                    />
                    {vpnDescr.promocode && vpnDescr.discount > 0 && (
                      <Promocode discount={vpnDescr.discount} promocode={vpnDescr.promocode} />
                    )}
                  </div>
                  {vpnDescr.recommended && (
                    <div className="border__wrapper block__rks-recommended">
                      <div className="rks-recommended ">
                        <div className="rks"></div>
                        <div className="text">рекомендует</div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {!isLoadedVPNData ? (
              <Skeleton height={'100%'} baseColor="#f5f5f5" highlightColor="#fff" className="transition_skeleton" />
            ) : (
              <>
                {vpnDescr.screenshots.length > 0 && (
                  <div className="description__images slider-vpn__wrapper">
                    <Swiper
                      modules={[Navigation, Scrollbar, A11y]}
                      spaceBetween={25}
                      slidesPerView="auto"
                      navigation
                      // pagination={{ clickable: true }}
                    >
                      {vpnDescr.screenshots.map((node, key) => {
                        return (
                          <SwiperSlide key={key}>
                            <img src={`${node.imageUrl}`} />
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                )}
              </>
            )}
          </div>
          {!isLoadedVPNData ? (
            <Skeleton height={'100%'} baseColor="#f5f5f5" highlightColor="#fff" className="transition_skeleton" />
          ) : (
            <GeneralRating vpnDescr={vpnDescr} vpnCount={vpnCount} />
          )}

          <div className="line"></div>
          <div className="vpn-rating__inner-details">
            {!isLoadedVPNData ? (
              <Skeleton height={'100%'} baseColor="#f5f5f5" highlightColor="#fff" className="transition_skeleton" />
            ) : (
              <>
                <div className="title title-50">Подробнее</div>
                {priceVPN && (
                  <div className="details-item background">
                    <div className="details-item__header">
                      <div className="details-item__header-title">{priceVPN.name}</div>
                      <div className="details-item__header-rating">
                        <div className="rating__data">
                          <span className="rating__value">{priceVPN.rating}</span>
                          <span className="rating__full">/10</span>
                        </div>
                      </div>
                    </div>
                    <div className="details-item__rating-line progress-line">
                      <div
                        className="filled"
                        style={{
                          width: `${priceVPN.rating * 10}%`,
                          borderRadius: `${priceVPN.rating === 10 ? '4px' : '4px 0 0 4px'}`
                        }}
                      ></div>
                    </div>

                    {priceVPN.info && (
                      <div className="details-item__description">
                        <div dangerouslySetInnerHTML={{ __html: marked.parse(priceVPN.info) }} />
                      </div>
                    )}
                    <div className="border-dashed"></div>

                    <div className="block__buy-vpn">
                      <div className="block__buy-vpn__price">
                        от {priceVPN.currencySymbol}
                        {priceVPN.value}
                        {vpnDescr.promocode && vpnDescr.discount > 0 && (
                          <Promocode discount={vpnDescr.discount} promocode={vpnDescr.promocode} />
                        )}
                      </div>

                      <ButtonLink
                        text="Купить"
                        iconId="exportsquare"
                        url={vpnDescr.website}
                        externalURL={true}
                        align="center"
                        colored={true}
                        customClass="button_vpn-link"
                      />
                    </div>
                  </div>
                )}

                {paymentMethods && (
                  <div className="details-item background" key={paymentMethods.type}>
                    <div className="details-item__header">
                      <div className="details-item__header-title">{paymentMethods.name}</div>
                    </div>

                    {paymentMethods.methods && (
                      <div className="details-item__description list_elements">
                        {paymentMethods.methods.map((node, key) => {
                          return (
                            <div className="list_element" key={key}>
                              {node.name}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {paymentMethods.info && (
                      <div className="details-item__description">
                        <div dangerouslySetInnerHTML={{ __html: marked.parse(paymentMethods.info) }} />
                      </div>
                    )}
                  </div>
                )}

                {vpnDescr.cards
                  .filter(
                    (element) =>
                      element.rating != null && element.type !== 'payment_methods' && element.type !== 'price'
                  )
                  .map((element) => {
                    return (
                      <div className="details-item background" key={element.type}>
                        <div className="details-item__header">
                          <div className="details-item__header-title">{element.name}</div>
                          <div className="details-item__header-rating">
                            <div className="rating__data">
                              <span className="rating__value">{element.rating}</span>
                              <span className="rating__full">/10</span>
                            </div>
                          </div>
                        </div>
                        <div className="details-item__rating-line progress-line">
                          <div
                            className="filled"
                            style={{
                              width: `${element.rating * 10}%`,
                              borderRadius: `${element.rating === 10 ? '4px' : '4px 0 0 4px'}`
                            }}
                          ></div>
                        </div>
                        {element.countries && (
                          <div className="details-item__description details-item__description-countries">
                            {element.countries.map((node, key) => {
                              return (
                                <div key={key} className="country__item">
                                  <span className={`fi fi-${node.code.toLowerCase()}`}></span>
                                  <span className="country-name">{node.name}</span>
                                </div>
                              );
                            })}
                          </div>
                        )}
                        {element.platforms && (
                          <div className="details-item__description platforms">
                            {listPlatforms.map((node, key) => {
                              let isActive =
                                element.platforms.filter((el) => el.name.toLowerCase() === node.toLowerCase()).length >
                                0;
                              return (
                                <div
                                  key={key}
                                  className={`platforms__item ${node.toLowerCase()} ${isActive ? 'active' : ''}`}
                                >
                                  <span className={`icon ${node.toLowerCase()}`}></span>
                                  <span className="name">{node}</span>
                                </div>
                              );
                            })}
                          </div>
                        )}
                        {element.info && (
                          <div className="details-item__description">
                            <div dangerouslySetInnerHTML={{ __html: marked.parse(element.info) }} />
                          </div>
                        )}
                      </div>
                    );
                  })}

                {vpnDescr.cards
                  .filter((element) => typeof element.rating == 'undefined' && element.type !== 'payment_methods')
                  .map((element) => {
                    return (
                      <div key={element.type}>
                        {element.info && (
                          <div className="details-item background">
                            <div className="details-item__header">
                              <div className="details-item__header-title">{element.name}</div>
                              {element.state != null && element.type !== 'data_collection' && (
                                <div
                                  className={`details-item__header-status ${
                                    element.state || element.type === 'logging' ? 'positive' : 'negative'
                                  }`}
                                >
                                  {element.type !== 'accepts_russian_creditcards' ? (
                                    <>{element.state ? 'Есть' : 'Отсутствует'}</>
                                  ) : (
                                    <>{element.state ? 'Да' : 'Нет'}</>
                                  )}
                                </div>
                              )}
                              {element.type === 'connection_speed' && (
                                <div className={`details-item__header-status ${element.quality.toLowerCase()} `}>
                                  {element.qualityVerbose}
                                </div>
                              )}
                              {element.type === 'data_collection' && (
                                <div
                                  className={`details-item__header-status collection_${element.state.toLowerCase()} `}
                                >
                                  {element.stateVerbose}
                                </div>
                              )}
                            </div>

                            {element.methods && (
                              <div className="details-item__description">
                                {element.methods.map((node, key) => {
                                  return (
                                    <span key={key} style={{ marginRight: '15px' }}>
                                      {node.name}
                                    </span>
                                  );
                                })}
                              </div>
                            )}

                            {element.info && (
                              <div className="details-item__description">
                                <div dangerouslySetInnerHTML={{ __html: marked.parse(element.info) }} />
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
});

export default VPNPage;
