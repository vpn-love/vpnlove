import './Promocode.scss';

const Promocode = (props) => {
  const { discount, promocode } = props;
  return (
    <div className="vpn-discount">
      Скидка&nbsp;{discount}% с&nbsp;промокодом <span className="vpn-discount__code">{promocode}</span>
    </div>
  );
};
export default Promocode;
