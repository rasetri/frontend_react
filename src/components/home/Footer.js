import "./Layout.css";

const Footer = () => {

    return (
        <footer className="bg-primary-gradient">
        <div className="container py-4 py-lg-5">
            <div className="row justify-content-center">
                <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column item">
                    <h3 className="fs-6 fw-bold">Services</h3>
                </div>
                <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column item">
                    <h3 className="fs-6 fw-bold">About</h3>
                </div>
                <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column item">
                    <h3 className="fs-6 fw-bold">2023</h3>
                </div>
            </div>
            <hr/>
        </div>
    </footer>
    )
}

export default Footer;