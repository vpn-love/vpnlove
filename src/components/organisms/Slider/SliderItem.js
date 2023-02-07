import { Link } from 'react-router-dom';
import './Slider.scss';

const SliderItem = (props) => {
  const { title, url, image, description, backgroundColor, linkText } = props.item;
  return (
    <div className="slider_item banner background" style={{ backgroundColor: `${backgroundColor}` }}>
      <Link to={url} className="banner__link-el">
        <div className="banner__content">
          <div className="banner__title title-70">{title}</div>
          <div className="banner__description">{description}</div>
          <div className="banner__link">{linkText}&nbsp;&rarr;</div>
        </div>
        {/* <image src={require(`../../../images/${image}`)} /> */}
        <img src={image} />
      </Link>
    </div>
  );
};

export default SliderItem;
