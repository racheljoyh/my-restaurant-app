import User from "./User";

function UserList({ userIndex }) {
  const allUsers = userIndex.map((oneUser) => (
    <User key={oneUser.id} oneUser={oneUser} />
  ));
  return (
    <div>
      <h3>{allUsers}</h3>
    </div>
  );
}

export default UserList;
