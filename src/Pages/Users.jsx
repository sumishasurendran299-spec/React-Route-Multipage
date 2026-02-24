import { Link } from "react-router-dom";

function Users() {
  const users = [
    { id: 1, name: "Sumisha", email: "sumisha@gmail.com" },
    { id: 2, name: "Arya", email: "arya@gmail.com" },
    { id: 3, name: "Anjana", email: "anjana@gmail.com" }
  ];

  return (
    <div>
      <h2>Users List</h2>

      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item">
            <Link to={`/users/${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;