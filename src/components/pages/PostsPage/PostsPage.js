import { useState, useEffect } from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { useLocation, useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import { Footer, Navigator, TopPanel, PostsList } from '../../organisms';
import Categories from './../../organisms/PostsList/molecules/Categories';

import { PostsStore } from '../../../stores/';
import { marked } from 'marked';
import './PostsPage.scss';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const PostsPage = observer(() => {
  const params = useParams().newsName;
  const path = useLocation().pathname.replace(`/${params}`, '').replace('/', '');

  useEffect(() => {
    PostsStore.getPostAsync(params);
  }, [params]);

  const { post, isLoadedPost } = PostsStore;

  return (
    <>
      <TopPanel />
      <Navigator />
      <div className="news-page page__wrapper news-page__article">
        <div className="page__inner">
          {isLoadedPost ? (
            <Categories list={post.categories} />
          ) : (
            <Skeleton height={'100%'} baseColor="#f5f5f5" highlightColor="#fff" className="transition_skeleton" />
          )}

          <div className="news-page__title title-50">
            {isLoadedPost ? (
              <> {post.title}</>
            ) : (
              <Skeleton height={'100%'} baseColor="#f5f5f5" highlightColor="#fff" className="transition_skeleton" />
            )}
          </div>
          <div className="news-page__img">
            {isLoadedPost ? (
              <img src={post.image} />
            ) : (
              <Skeleton count={10} baseColor="#f5f5f5" highlightColor="#fff" className="transition_skeleton" />
            )}
          </div>
          <div className="news-page__content">
            {isLoadedPost ? (
              <>
                <div className="news_page__lead">{post.shortDescription}</div>
                <div className="line"></div>
              </>
            ) : (
              <Skeleton count={4} baseColor="#f5f5f5" highlightColor="#fff" className="transition_skeleton" />
            )}
            <div className="news-page__text" id="textPost">
              {isLoadedPost ? (
                <div dangerouslySetInnerHTML={{ __html: marked.parse(post.content) }} />
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
