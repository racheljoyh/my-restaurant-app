import User from "./User";

function UserList({ userIndex, handleDeleteUser }) {
  const allUsers = userIndex.map((oneUser) => (
    <User key={oneUser.id} oneUser={oneUser} handleDeleteUser={handleDeleteUser}/>
  ));
  return <div>
    <h3>{allUsers}</h3>
    </div>;
}

export default UserList;
