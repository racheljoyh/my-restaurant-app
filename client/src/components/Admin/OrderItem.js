function OrderItem({ oneOrder }) {
  const { total, identifier } = oneOrder;
  const { first_name, last_name } = oneOrder.user;
  return (
    <div>
      <h3>Customer:</h3>
      <p>
        {first_name} {last_name}
      </p>
      <p>Order Number: {identifier}</p>
      <p>Total: {total}</p>
    </div>
  );
}

export default OrderItem;
