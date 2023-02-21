import "./login.css";
import { Link } from "react-router-dom";
import { LoginService } from "../services/Login";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";

function Signup() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    reset
  } = useForm();
  const _loginService = new LoginService();

  //Submit a new 'Person'
  const onSubmit = (values) => {
    confirmAlert({
      title: "Confirmation",
      message: `Create new ${values.role}?`,
      buttons: [
        {
          label: "confirm",
          onClick: () => {
            _loginService
              .addPerson(values)
              .then(() => {
                toast.success(`New "${values.role}" added successfully!`);
                clearInputs();
              })
              .catch(res =>  toast.error(res.message));
          },
        },
        {
          label: "Cancel",
        },
      ],
    });
  };

  //Clear form inputs
  const clearInputs = () =>{
    reset();
  } 

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
                        <h4 className="text-dark mb-4">Sign Up</h4>
                      </div>
                      <form className="user" onSubmit={handleSubmit(onSubmit)}>
                        <ToastContainer position="top-center" autoClose={3000}/>
                        <div className="mb-3">
                          <input
                            className="form-control form-control-user"
                            type="text"
                            id="name"
                            placeholder="Name"
                            name="name"
                            {...register("name", {
                              required: true,
                              pattern: {
                                value: /^[a-zA-Z ]+$/,
                                message: "Name cannot contain numbers",
                              },
                            })}
                          />
                          {errors.name && (
                            <p className="formError">{errors.name.message}</p>
                          )}
                        </div>
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
                                  /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
                                message: "email is invalid",
                              },
                            })}
                          />
                          {errors.email && (
                            <p className="formError">{errors.email.message}</p>
                          )}
                        </div>
                        <div className="mb-3">
                          <select
                          className="form-control form-control-user dropdown-toggle"
                            {...register("role", {
                              validate: (val) => {
                                if (!val) {
                                  return "Please choose a role!";
                                }
                              },
                            })}
                          >
                            <option value="">Choose a role ...</option>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                          </select>
                          {errors.role && (
                            <p className="formError">{errors.role.message}</p>
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
                          <input
                            className="form-control form-control-user"
                            type="password"
                            id="password2"
                            placeholder="Verify Password"
                            name="password2"
                            {...register("password2", {
                              required: true,
                              validate: (val) => {
                                if (watch("password") !== val) {
                                  return "Passwords do not match!";
                                }
                              },
                            })}
                          />
                          {errors.password2 && (
                            <p className="formError">
                              {errors.password2.message}
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
                          Create
                        </button>
                        <hr></hr>
                      </form>
                      <div className="text-center"></div>
                      <div className="text-center">
                        <Link to="/signin">Sign in!</Link>
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

export default Signup;
