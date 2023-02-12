import './Button.scss';
import { Link } from 'react-router-dom';
import { Icon } from './../';
import cn from 'classnames';

const ButtonLink = (props) => {
  const { text, url, icon, colored, customClass, externalURL } = props;
  const align = props.align || '';
  const arrow = props.arrowRight ? 'arrow_right' : '';
  const isColored = colored ? 'colored' : '';
  return (
    <>
      {externalURL ? (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className={`button button_link ${align} ${arrow} ${isColored} ${customClass}`}
        >
          {text}

          {/* <Icon id="exportsquare" /> */}
          {icon && <span className='button__icon'>{icon}</span>}
        </a>
      ) : (
        <Link to={url} className={`button button_link ${align} ${arrow} ${isColored} ${customClass}`}>
          {text}
          {/* <Icon id="exportsquare" /> */}
          {/* {icon && <Icon id="exportsquare" />} */}
        </Link>
      )}
    </>
  );
};

export default ButtonLink;
