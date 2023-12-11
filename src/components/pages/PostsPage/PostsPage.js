import { useState, useEffect } from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { useLocation, useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import { Footer, Navigator, TopPanel, PostsList } from '../../organisms';
import { ButtonLink } from '../../atoms/';

import Categories from './../../organisms/PostsList/molecules/Categories';

import { PostsStore } from '../../../stores/';
import { marked } from 'marked';
import './PostsPage.scss';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const PostsPage = observer(() => {
  const params = useParams().newsName;
  const { fullPostsData, isLoadedPosts } = PostsStore;

  return (
    <>
      <TopPanel />
      <Navigator />
      <div className="news-page page__wrapper news-page__article">
        <div className="page__inner">
          {isLoadedPosts ? (
            <Categories list={fullPostsData[params].categories} />
          ) : (
            <Skeleton height={'100%'} baseColor="#f5f5f5" highlightColor="#fff" className="transition_skeleton" />
          )}

          <div className="news-page__title title-50">
            {isLoadedPosts ? (
              <> {fullPostsData[params].title}</>
            ) : (
              <Skeleton height={'100%'} baseColor="#f5f5f5" highlightColor="#fff" className="transition_skeleton" />
            )}
          </div>
          <div className="news-page__img">
            {isLoadedPosts ? (
              <img src={fullPostsData[params].imageUrl} />
            ) : (
              <Skeleton count={10} baseColor="#f5f5f5" highlightColor="#fff" className="transition_skeleton" />
            )}
          </div>
          <div className="news-page__content">
            {isLoadedPosts ? (
              <>
                <div className="news_page__lead">{fullPostsData[params].shortDescription}</div>
                <div className="line"></div>
              </>
            ) : (
              <Skeleton count={4} baseColor="#f5f5f5" highlightColor="#fff" className="transition_skeleton" />
            )}

            {isLoadedPosts && fullPostsData[params].shopBanner && (
              <div className="news-page__short__banner">
                <div className="details-item background">
                  <div className="details-item__header">
                    <div className="details-item__header-title">Стоимость</div>
                  </div>

                  <div className="details-item__description">
                    {fullPostsData[params].shopBanner.description && (
                      <div className="details-item__description">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: marked.parse(fullPostsData[params].shopBanner.description)
                          }}
                        />
                      </div>
                    )}

                    <div className="border-dashed"></div>

                    <div className="block__buy-vpn">
                      <div className="block__buy-vpn__price">
                        {fullPostsData[params].shopBanner.cost} {fullPostsData[params].shopBanner.currencySymbol}/
                        {fullPostsData[params].shopBanner.durationUnitVerbose.toLowerCase()}
                      </div>
                      <div className="">
                        <ButtonLink
                          text="Купить"
                          iconId="exportsquare"
                          url={fullPostsData[params].shopBanner.url}
                          externalURL={true}
                          align="center"
                          colored={true}
                          customClass="button_vpn-link"
                        />
                        <div className="block__buy-vpn__service">Оплата через сервис VPNPay</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="news-page__text" id="textPost">
              {isLoadedPosts ? (
                <div dangerouslySetInnerHTML={{ __html: marked.parse(fullPostsData[params].content) }} />
              ) : (
                <Skeleton count={10} baseColor="#f5f5f5" highlightColor="#fff" className="transition_skeleton" />
              )}
            </div>
            <div className="line"></div>
            <div className="news-list__wrapper ">
              <PostsList />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
});

export default PostsPage;
