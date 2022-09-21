import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <button>test</button>
      <Link to="/front-portfolio">Home</Link>
      <Link to="/front-portfolio/test">Test</Link>
    </div>
  );
}

export default Navbar;
