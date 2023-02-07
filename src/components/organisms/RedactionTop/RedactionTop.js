import RedactionItem from './RedactionItem';
import { PostsStore } from '../../../stores/';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import './RedactionTop.scss';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const RedactionTop = observer(() => {
  const { topRatedData, isLoadedTop } = PostsStore;
  return (
    <div className="redaction-top background">
      <div className="title-36 redaction-top__title">Топ редакции</div>
      <div className="line"></div>
      <div className="redaction-top__list">
        {isLoadedTop ? (
          <>
            {topRatedData.map((node, key) => {
              return <RedactionItem key={key} item={node} />;
            })}
          </>
        ) : (
          <Skeleton count={10} baseColor="#f5f5f5" highlightColor="#fff" className="transition_skeleton" />
        )}
      </div>
    </div>
  );
});

export default RedactionTop;
