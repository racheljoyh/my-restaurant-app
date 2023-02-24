import OrderItem from "./OrderItem";

function OrderList({ orderIndex }) {
  const allOrders = orderIndex.map((oneOrder) => (
    <OrderItem key={oneOrder.id} oneOrder={oneOrder} />
  ));

  if (!allOrders) return <p className="heading-secondary">"Loading..."</p>;
  return (
    <div className="all-orders">
      <div>{allOrders}</div>
    </div>
  );
}

export default OrderList;
