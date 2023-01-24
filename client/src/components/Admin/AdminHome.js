import { Link, Outlet } from "react-router-dom";

function AdminHome() {
  return (
    <div>
      <h1>Admin Actions</h1>

      <nav>
        <Link to="orders">Orders</Link>
        <Link to="users">Users</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default AdminHome;
