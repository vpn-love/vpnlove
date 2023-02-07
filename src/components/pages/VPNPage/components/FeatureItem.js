const FeatureItem = (props) => {
  const { customClass, value, title } = props;

  return (
    <div className={`feature-item ${customClass}`}>
      <div className="feature-item-title">{title}</div>
      <div className="feature-item-line"></div>
      {typeof value != 'string' ? (
        <>
          <div className="feature-item-value">
            {value && (
              <div className="details-item__description list_elements">
                {value.map((node, key) => {
                  return (
                    <div className="list_element" key={key}>
                      {node.name}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <div className={`feature-item-value ${customClass}`}>{value}</div>
        </>
      )}
    </div>
  );
};

export default FeatureItem;
