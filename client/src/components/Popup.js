function Popup({ orderId, handleClose, user }) {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>
          x
        </span>
        <div className="popup-details">
          <h3 className="heading-tertiary">
            Your order is placed, {user.first_name}!
          </h3>
          <p className="popup-detail">
            The chef is cooking you up something nice!
          </p>
          <p className="popup-detail">
            Your order number is <strong>{orderId}</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Popup;
