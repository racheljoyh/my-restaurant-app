function Popup({ orderId, handleClose }) {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>
          x
        </span>
        <h2>Order Placed!</h2>
        <p>The chef is cooking you up something nice!</p>
        <p>
          Your order number is <strong>{orderId}</strong>.
        </p>
      </div>
    </div>
  );
}

export default Popup;
