import { useState } from 'react';
import { observer } from 'mobx-react';
import './PostsList.scss';
import PostsItem from './PostsItem';
import { Button } from '../../atoms';
import { PostsStore } from './../../../stores';
import { toJS } from 'mobx';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const PostsList = observer((props) => {
  const { postsData, isLoadedPosts } = PostsStore;
  const listPost = props && props.posts ? props.posts : postsData;
  const [showPosts, setShowPost] = useState(5);
  return (
    <div className="news-list__inner">
      {isLoadedPosts ? (
        <>
          <div className="news__list">
            {listPost.length > 0 && (
              <>
                {listPost.slice(0, showPosts).map((node, key) => {
                  return <PostsItem key={key} item={node} />;
                })}
              </>
            )}
          </div>
          {listPost.length > showPosts && (
            <div className="btn btn_all_news">
              <Button
                text="Показать еще"
                align="center"
                handleClick={() => {
                  setShowPost(showPosts + 5);
                }}
              />
            </div>
          )}
        </>
      ) : (
        <Skeleton count={10} baseColor="#f5f5f5" highlightColor="#fff" className="transition_skeleton" />
      )}
    </div>
  );
});

export default PostsList;
