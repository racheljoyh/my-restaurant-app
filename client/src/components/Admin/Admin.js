
import { useState, useEffect } from "react";

function Admin() {
  const [userIndex, setUserIndex] = useState([]);
  const [orderIndex, setOrderIndex] = useState([]);

  useEffect(() => {
    // fetching users
    fetch("/admin/users")
      .then((r) => r.json())
      .then((users) => setUserIndex(users));
  }, []);

  useEffect(() => {
    // fetching users
    fetch("/admin/orders")
      .then((r) => r.json())
      .then((orders) => setOrderIndex(orders));
  }, []);

  return (
    <div>
     
    </div>
  );
}

export default Admin;
