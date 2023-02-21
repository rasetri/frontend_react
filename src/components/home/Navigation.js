import "./Layout.css";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";

const Navigation = ({ user }) => {
  const navigate = useNavigate();
  const isUser = user.role === "user";
  const handleSignOut = () => {
    confirmAlert({
      title: "Confirmation",
      message: `Do you want to log out?`,
      buttons: [
        {
          label: "confirm",
          onClick: () => {
            localStorage.removeItem("loggedUser");
            navigate("/signin");
          },
        },
        {
          label: "Cancel",
        },
      ],
    });
  };

  return (
    <nav
      className="navbar navbar-light navbar-expand-md fixed-top navbar-shrink py-3"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <span className="bs-icon-sm bs-icon-circle bs-icon-primary shadow d-flex justify-content-center align-items-center me-2 bs-icon"></span>
          <span className="hdesk">Helpdesk</span>
        </a>
        <button
          data-bs-toggle="collapse"
          className="navbar-toggler"
          data-bs-target="#navcol-1"
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Open tickets
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Closed tickets
              </a>
            </li>
            {isUser && (
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Request a support
                </a>
              </li>
            )}
          </ul>
          <button className="btn btn-danger shadow" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
