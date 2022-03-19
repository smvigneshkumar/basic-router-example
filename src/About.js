import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <h1>About Component</h1>
      <div>
        <Link to="/">Home</Link>
      </div>
      <Link to="/contact">Contact</Link>
    </div>
  );
};
export default About;
