import { useParams, useNavigate } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const users = [
    { id: 1, name: "Sumisha", email: "sumisha@gmail.com", city: "Kannur" },
    { id: 2, name: "Arya", email: "arya@gmail.com", city: "Thalassery" },
    { id: 3, name: "Anjana", email: "anjana@gmail.com", city: "Kochi" }
  ];

  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return <h3>User Not Found</h3>;
  }

  return (
    <div className="card p-3">
      <h3>{user.name}</h3>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>City:</strong> {user.city}</p>

      <button
        className="btn btn-danger"
        onClick={() => navigate("/users")}
      >
        Go Back
      </button>
    </div>
  );
}

export default UserDetail;