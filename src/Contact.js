import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>Contact Component</h1>
      <div>
        <Link to="/">Home</Link>
      </div>
      <Link to="/about">About</Link>
    </div>
  );
};
export default Contact;
