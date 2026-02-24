import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h2>About This App</h2>
      <p>
        This application demonstrates multi-page routing using
        react-router-dom in React.
      </p>

      <Link to="/" className="btn btn-secondary mt-3">
        Back to Home
      </Link>
    </div>
  );
}

export default About;