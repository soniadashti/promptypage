import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

function NavBar(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const currentUser = props.currentUser;
  const handleSignOut = (event) => {
    signOut(getAuth());
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
      <ul>
        <li className="navbar-item" style={{ display: "inline-block" }}>
              <Link
                to="/home"
                className="nav-link nav-button"
                onClick={handleClick}
              >
                Prompty
              </Link>
            </li>
          </ul>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleClick}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${click ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto" style={{ display: "flex"}}>
            <li className="nav-item" style={{ display: "inline-block" }}>
              <Link
                to="/home"
                className="nav-link nav-button"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item" style={{ display: "inline-block" }}>
              <Link
                to="/prompts"
                className="nav-link nav-button"
                onClick={handleClick}
              >
                Prompts
              </Link>
            </li>
            <li className="nav-item" style={{ display: "inline-block" }}>
              <Link
                to="/about"
                className="nav-link nav-button"
                onClick={handleClick}
              >
                Our Team
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;