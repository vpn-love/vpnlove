import { Footer, Navigator, TopPanel, PostsList } from '../../organisms';
import { observer } from 'mobx-react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { PostsStore, SearchStore } from '../../../stores/';
import { toJS } from 'mobx';
import './PostsPage.scss';

const PostsListPage = observer(() => {
  const navigate = useNavigate();

  const location = useLocation().pathname.replace('/', '');
  const search = useParams().newsName;
  // console.log('search', search);
  const { categoriesData } = PostsStore;
  const { queryData, status, answerData } = SearchStore;

  const category = categoriesData.find((element) => element.slug === location);
  // console.log('location', location);
  // console.log('answerData', answerData);
  return (
    <>
      <TopPanel />
      <Navigator />
      <div className="news-page page__wrapper">
        <div className="page__inner">
          {location === 'search' ? (
            <>
              <div className="news-page__title title-50 wordBreak">Поиск {queryData}</div>
              {answerData.length > 0 ? (
                <>
                  <div className="news-list__wrapper">
                    <PostsList posts={answerData} />
                  </div>
                </>
              ) : (
                <div className="search__not-found background">
                  <div className="search__not-found__text">
                    <p>( ˘︹˘ )</p>
                    <p>
                      Мы везде внимательно посмотрели,
                      <br /> но ничего не нашли
                    </p>
                  </div>
                  <div
                    className="search__not-found__go-main"
                    onClick={() => {
                      navigate(`/`);
                    }}
                  >
                    Перейти на главную
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              {category && (
                <>
                  <div className="news-page__title title-50">{category.name}</div>
                  <div className="news-list__wrapper">
                    <PostsList posts={category.posts} />
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
});

export default PostsListPage;
