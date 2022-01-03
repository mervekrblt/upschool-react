import { Link } from "react-router-dom";
import theme from '../theme'

const Navbar = ({isDark}) => {
  const currentTheme = isDark ? theme.isDark : theme.isLight
  console.log(currentTheme)
  return (
    <>
      <nav className={`navbar navbar-expand-lg  ${currentTheme.nav}`}>
        <div className="container-fluid">
          <Link className="nav-link active" aria-current="page" to={"/"}>
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/about"}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
