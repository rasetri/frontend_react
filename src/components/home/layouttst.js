function Layout() {
    const handleSignOut = () =>{
        console.log(`signout`);
    }
  return (
    <div className="mainWP">
      <nav
        className="navbar navbar-light navbar-expand-md fixed-top navbar-shrink py-3"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <span className="bs-icon-sm bs-icon-circle bs-icon-primary shadow d-flex justify-content-center align-items-center me-2 bs-icon"></span>
            <span>Helpdesk</span>
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
                <a className="nav-link" href="services.html">
                  Open tickets
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="projects.html">
                  Closed tickets
                </a>
              </li>
            </ul>
            <button
              className="btn btn-danger shadow"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      </nav>
      <header className="bg-primary-gradient pt-5">
        <div className="container pt-4 pt-xl-5">
          <div className="row pt-5">
            <div className="col-md-8 col-xl-6 text-center text-md-start mx-auto">
              <div className="text-center">
                <p className="fw-bold text-success mb-2">Voted #1 Worldwide</p>
                <h1 className="fw-bold">
                  The best solution for you and your customers
                </h1>
                sdqsdqsd
              </div>
              t'"tt"'t'""
            </div>
            <div className="col-12 col-lg-10 mx-auto">
              <div
                className="position-relative lastWP"
              >
                
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Layout;
