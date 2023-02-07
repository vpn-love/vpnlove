import { Link, useNavigate } from 'react-router-dom';
import './RedactionTop.scss';

const RedactionItem = (props) => {
  const { item } = props;
  const navigate = useNavigate();
  return (
    <div className="redaction-top__item">
      <div className="icon_triangle"></div>
      <div
        className="redaction-top__item_title"
        onClick={() => {
          navigate(`/top/${item.slug}`);
        }}
      >
        {item.title}
      </div>
    </div>
  );
};

export default RedactionItem;
