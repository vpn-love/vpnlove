import { Component } from 'react';
import { observer } from 'mobx-react';
import { useState, useEffect } from 'react';
import { toJS } from 'mobx';

import { Footer, Navigator, TopPanel, PostsList, RedactionTop, Slider } from '../../organisms/';
import { PostsStore } from '../../../stores/';

import './AlternativeVPNPage.scss';

const AlternativeVPNPage = observer(() => {
  const { categoriesData } = PostsStore;
  return (
    <>
      <TopPanel />
      <Navigator />
      <div className="alternative-page alternative-page__wrapper">
        <div className="alternative-page__inner">
          <div className="alternative-page__title title-50">Альтернативы VPN</div>
          <div className="alternative-page__description">
            <p>
              В&nbsp;данном разделе мы&nbsp;расскажем вам про инструменты, которые можно назвать альтернативами для VPN
              сервисов. Каждый сервис из&nbsp;этого списка прошел проверку временем, доказал свою надежность, качество
              и&nbsp;простоту в&nbsp;использовании.{' '}
            </p>
            <p>
              Также тут можно будет найти полезные ссылки по&nbsp;настройке, работе и&nbsp;использовании того или иного
              продукта.{' '}
            </p>
          </div>
          <Slider />
          {categoriesData.length > 0 && (
            <div className="news-list__wrapper">
              <PostsList posts={categoriesData.filter((element) => element.slug === 'alternatives')[0].posts} />
              <RedactionTop />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
});

export default AlternativeVPNPage;
