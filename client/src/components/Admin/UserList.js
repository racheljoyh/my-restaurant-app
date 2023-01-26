import User from "./User";

function UserList({ userIndex, handleDeleteUser }) {
  const allUsers = userIndex.map((oneUser) => (
    <User
      key={oneUser.id}
      oneUser={oneUser}
      handleDeleteUser={handleDeleteUser}
    />
  ));
  return (
    <div>
      <div className="all-users">{allUsers}</div>
    </div>
  );
}

export default UserList;
