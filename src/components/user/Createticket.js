import { TicketService } from "../../services/Ticket";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

const Createticket = ({user}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset
  } = useForm();
  const _ticketService = new TicketService();

  //Sending ticket form
  const onSubmit = (values) => {
    _ticketService
      .addTicket(values, user.id)
      .then(() => {
        toast.success(`Ticket has been sent!`);
        clearInputs();
      })
      .catch((res) => toast.error(res.message));
  };

  //Clear form inputs
  const clearInputs = () =>{
    reset();
  } 

  return (
    <div className="bg-gradient-primary">
      <form className="p-3 p-xl-4" onSubmit={handleSubmit(onSubmit)}>
        <ToastContainer position="top-center" autoClose={3000} />
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            id="label"
            name="label"
            placeholder="Title"
            {...register("label", {
              required: true,
            })}
          />
          {errors.label && <p className="formError">Title is required</p>}
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="6"
            placeholder="Description"
            {...register("description", {
              required: true,
            })}
          ></textarea>
          {errors.label && <p className="formError">Description is required</p>}
        </div>
        <div>
          <button
            className="btn btn-primary shadow d-block w-100"
            type="submit"
          >
            Send{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Createticket;
