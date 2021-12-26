import logo from "../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";

const test = () => {};

const NavBar = () => {
  let navigator = useNavigate();

  const home = () => navigator("/");
  const test = () => {
      console.log("test")
      navigator("/test");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid" >
        <a className="navbar-brand" href="#" onClick={() => home()}>
          <img
            src={logo}
            alt=""
            width="60"
            height="60"
            className="d-inline-block align-text-center"
          />
          Wallet Manager
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" onClick={() => test()}>
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
