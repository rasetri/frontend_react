import { Link } from "react-router-dom";
import { LoginService } from "../services/Login";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

function Signin() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const _loginService = new LoginService();

  //Sending login form
  const onSubmit = (values) => {
    _loginService
      .login(values)
      .then((res) => {
        const {
          data: {
            peopleConnection: { values: login },
          },
        } = res;
        if (login.length)
          toast.success(`User '${login[0].name}' logged successfully!`);
        else toast.error(`Invalid informations`);
      })
      .catch((res) => toast.error(res.message));
  };

  return (
    <div className="bg-gradient-primary">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-12 col-xl-10">
            <div className="card shadow-lg o-hidden border-0 my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-flex"></div>
                  <div className="flex-grow-1 bg-login-image coverImg"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h4 className="text-dark mb-4">Sign In</h4>
                      </div>
                      <form className="user" onSubmit={handleSubmit(onSubmit)}>
                        <ToastContainer
                          position="top-center"
                          autoClose={3000}
                        />
                        <div className="mb-3">
                          <input
                            className="form-control form-control-user"
                            type="email"
                            id="email"
                            aria-describedby="emailHelp"
                            placeholder="Email"
                            name="email"
                            {...register("email", {
                              required: true,
                              pattern: {
                                value:
                                  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                message: "email is invalid",
                              },
                            })}
                          />
                          {errors.email && (
                            <p className="formError">{errors.email.message}</p>
                          )}
                        </div>
                        <div className="mb-3">
                          <input
                            className="form-control form-control-user"
                            type="password"
                            id="password"
                            placeholder="Password"
                            name="password"
                            {...register("password", {
                              required: true,
                              pattern: {
                                value: /^[A-Za-z]\w{7,14}$/,
                                message: "Password length is invalid",
                              },
                            })}
                          />
                          {errors.password && (
                            <p className="formError">
                              {errors.password.message}
                            </p>
                          )}
                        </div>
                        <div className="mb-3">
                          <div className="custom-control custom-checkbox small"></div>
                        </div>
                        <button
                          className="btn btn-primary d-block btn-user w-100"
                          type="submit"
                        >
                          Login
                        </button>
                        <hr></hr>
                      </form>
                      <div className="text-center"></div>
                      <div className="text-center">
                        <Link className="small" to="/signup">
                          Create an Account!
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
