import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to the Multi-Page React App </h1>
      <p>This application demonstrates React Router with Bootstrap Styling.</p>

      <Link to="/about" className="btn btn-primary m-2 ">
        Go to About
      </Link>

      <Link to="/users" className="btn btn-success m-2">
        View Users
      </Link>
    </div>
  );
}

export default Home;