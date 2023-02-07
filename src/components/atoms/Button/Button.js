import './Button.scss';
import { Icon } from './../';
import cn from 'classnames';

const ButtonLink = (props) => {
  const { text, iconId, colored, customClass, handleClick } = props;
  const align = props.align || '';
  const arrow = props.arrowRight ? 'arrow_right' : '';
  const isColored = colored ? 'colored' : '';
  return (
    <div className={`button button_link ${align} ${arrow} ${isColored} ${customClass}`} onClick={handleClick}>
      {text}
      {/* <Icon id="exportsquare" /> */}
      {/* {icon && <Icon id="exportsquare" />} */}
    </div>
  );
};

export default ButtonLink;
