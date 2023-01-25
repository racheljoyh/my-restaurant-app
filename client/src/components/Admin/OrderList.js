import OrderItem from "./OrderItem";

function OrderList({ orderIndex }) {
  console.log(orderIndex);
  const allOrders = orderIndex.map((oneOrder) => (
    <OrderItem key={oneOrder.id} oneOrder={oneOrder} />
  ));

  return (
    <div>
      <h3>{allOrders}</h3>
    </div>
  );
}

export default OrderList;
