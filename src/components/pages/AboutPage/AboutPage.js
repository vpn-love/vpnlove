import { Component } from 'react';
import { Footer, Navigator, TopPanel } from '../../organisms/';
import './AboutPage.scss';

class AboutPage extends Component {
  render() {
    return (
      <>
        <TopPanel />
        <Navigator />
        <div className="about-page about-page__wrapper">
          <div className="about-page__inner">
            <div className="about-page__title title-50">О нас</div>
            <div className="about-page__description">
              <p>
                VPN Love&nbsp;&mdash; сервис для выбора надежного vpn, проверенного и&nbsp;рекомендованного экспертами
                в&nbsp;сфере инфобезопасности и&nbsp;цифровыми правозащитниками.
              </p>

              <p>
                С&nbsp;помощью этого сервиса вы&nbsp;можете ознакомиться со&nbsp;списком коммерческих сервисов, которые
                отвечают требованиям максимальной безопасности, анонимности, но&nbsp;при этом являются еще
                и&nbsp;доступными по&nbsp;цене. Эти инструменты помогут получить доступ к&nbsp;заблокированным сайтам,
                а&nbsp;также спрячут вашу личную информацию от&nbsp;провайдеров и&nbsp;спецслужб.
              </p>

              <p>
                Мы&nbsp;ведем постоянное наблюдение за&nbsp;рынком vpn-сервисов, анализируем их&nbsp;характеристики,
                изучаем политики, отслеживаем инциденты, проводим анализ репутации основателей, делаем тесты,
                запрашиваем дополнительную информацию у&nbsp;сервисов, проверяя их&nbsp;открытость.
              </p>

              <p>Мы&nbsp;выбираем самых проверенных и&nbsp;рекомендуем вам&nbsp;то, чем пользуемся сами.</p>

              <p>
                Подключаясь к&nbsp;надежным vpn, вы&nbsp;поддерживаете общее дело борьбы за&nbsp;цифровые права
                не&nbsp;только в&nbsp;России, но&nbsp;и&nbsp;по&nbsp;всему миру.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default AboutPage;
