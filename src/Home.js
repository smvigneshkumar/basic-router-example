import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Home Component</h1>
      <div>
        <Link to="/about">About</Link>
      </div>
      <Link to="/contact">Contact</Link>
    </div>
  );
};
export default Home;
