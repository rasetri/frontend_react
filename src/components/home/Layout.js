import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout = ({ children, user, title }) => {
  return (
    <>
      <Navigation user={user} />
        <div className="bg-primary-gradient pt-5">
          <div className="container pt-4 pt-xl-5">
            <div className="row pt-5">
              <div className="col-md-8 col-xl-6 text-center text-md-start mx-auto">
                <div className="text-center">
                  <h1 className="fw-bold">
                    {title}
                  </h1>
                </div>
                <main>{children}</main>
              </div>
              <div className="col-12 col-lg-10 mx-auto">
                <div className="position-relative lastWP"></div>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </>
  );
};

export default Layout;
