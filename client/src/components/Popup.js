function Popup({ orderId, handleClose, user }) {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>
          x
        </span>
        <h2>Your order is placed, {user.first_name}!</h2>
        <p>The chef is cooking you up something nice!</p>
        <p>
          Your order number is <strong>{orderId}</strong>.
        </p>
      </div>
    </div>
  );
}

export default Popup;
