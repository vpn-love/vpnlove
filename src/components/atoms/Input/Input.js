import './Input.scss';

const Input = (props) => {
  const { customClass, type, placeholder, value, onChange, onKeyPress } = props;

  return (
    <div className={`input  ${customClass}`}>
      <input
        type={type}
        placeholder={placeholder || ''}
        value={value}
        onChange={(el) => {
          onChange(el);
        }}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default Input;
