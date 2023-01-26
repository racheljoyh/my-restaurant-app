function User({ oneUser, handleDeleteUser }) {
  const { first_name, last_name, email, username } = oneUser;

  function handleDeleteUserClick() {
    fetch(`/admin/destroy/${oneUser.id}`, { method: "DELETE" }).then(() =>
      handleDeleteUser(oneUser)
    );
  }

  return (
    <div className="all-users-card">
      <p>Username: {username}</p>
      <p>
        Name: {first_name} {last_name}
      </p>
      <p>Email: {email}</p>
      <button className="btn --delete-user" onClick={handleDeleteUserClick}>
        Delete User
      </button>
    </div>
  );
}

export default User;
