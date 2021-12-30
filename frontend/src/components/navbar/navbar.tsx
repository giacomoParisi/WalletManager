import logo from "../../assets/images/logo.png";
import light from "../../assets/images/light.png";
import dark from "../../assets/images/dark.png";
import { useNavigate } from "react-router-dom";
import { darkTheme, lightTheme, selectorTheme } from "../../app/slicer";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Themes } from "../../themes/themes";
import Switch from "../switch/switch";

const NavBar = () => {
  const theme = useAppSelector(selectorTheme);
  const dispatch = useAppDispatch();

  let navigator = useNavigate();

  const home = () => navigator("/");

  const test = () => {
    console.log("test");
    navigator("/test");
  };

  const changeTheme = () => {
    if (theme == Themes.LIGHT) dispatch(darkTheme());
    else dispatch(lightTheme());
  };

  const themeIcon = () => {
    if (theme == Themes.LIGHT) return light;
    else return dark;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          
        </a>
        <a className="navbar-brand" href="#"> <img src={logo} alt="" width="30" height="24" /> Wallet Manager</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form className="d-flex">
            <Switch isOn={theme == Themes.LIGHT} icon={themeIcon()} handleToggle={() => { changeTheme() }} />
          </form>
        </div>
      </div>
    </nav>
  );

  // return (
  //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  //     <div className="container-fluid">
  //       <a className="navbar-brand" href="#" onClick={() => home()}>
  //         <img
  //           src={logo}
  //           alt=""
  //           width="60"
  //           height="60"
  //           className="d-inline-block align-text-center"
  //         />
  //         Wallet Manager
  //       </a>
  //       <button
  //         className="navbar-toggler"
  //         type="button"
  //         data-bs-toggle="collapse"
  //         data-bs-target="#navbarNav"
  //         aria-controls="navbarNav"
  //         aria-expanded="false"
  //         aria-label="Toggle navigation"
  //       >
  //         <span className="navbar-toggler-icon"></span>
  //       </button>
  //       <div className="collapse navbar-collapse" id="navbarNav">
  //         <ul className="navbar-nav">
  //           <li className="nav-item">
  //             <a
  //               className="nav-link active"
  //               aria-current="page"
  //               href="#"
  //               onClick={() => test()}
  //             >
  //               Home
  //             </a>
  //           </li>
  //           <li className="nav-item">
  //             
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   </nav>
  // );
};

export default NavBar;
