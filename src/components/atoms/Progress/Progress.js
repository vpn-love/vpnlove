import './Progress.scss';
import cn from 'classnames';

const Progress = (props) => {
  const { customClass, value, fullValue, title } = props;
  const borderRadius = value == 10 ? '4px' : '4px 0 0 4px';

  return (
    <div className={`progress ${customClass}`}>
      <div className="progress-title">{title}</div>
      <div className="progress-value">
        <span className="rating_value">{value}</span>
        <span className="rating_full">/{fullValue}</span>
      </div>
      <div className="progress-line">
        <div className="filled" style={{ width: `${parseInt(value) * 10}%`, borderRadius: borderRadius }}></div>
      </div>
    </div>
  );
};

export default Progress;
