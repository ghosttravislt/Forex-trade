import "../index.css";
// import Logo from "../assets/images/retail-logo.png";

const Navbar = () => {
  return (
    <div className="nav_contianer">
      <nav className="navbar">
        <div className="logo">
          {/* <img src={Logo} alt="" /> */}
          logo
        </div>
        <ul className="navlink">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Members</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
