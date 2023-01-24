function User({ oneUser }) {
  const { first_name, last_name, role, email, username } = oneUser;

  return (
    <div>
      <h3>Role: {role}</h3>
      <h3>
        Name: {first_name} {last_name}
      </h3>
      <h4>Username: {username}</h4>
      <p>Email: {email}</p>
      <button>Delete User</button>
    </div>
  );
}

export default User;
