import { TicketService } from "../../services/Ticket";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";


const Createticket = ({ user }) => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const _ticketService = new TicketService();

  //Sending ticket form
  const onSubmit = (values) => {
    confirmAlert({
      title: "Confirmation",
      message: `Do you want to send this request?`,
      buttons: [
        {
          label: "confirm",
          onClick: () => {
            _ticketService
              .addTicket(values, user.id)
              .then((res) => {
                const is_ticket = true;
                const id = res.data.createTicket.ticket.id;
                console.log("RES TICKET", res);
                toast.success(`Ticket has been sent!`);
                clearInputs();
                navigate('/viewAttachments',{state: {user, is_ticket, id}});
              })
              .catch((res) => toast.error(res.message));
          },
        },
        {
          label: "Cancel",
        },
      ],
    });
  };

  //Clear form inputs
  const clearInputs = () => {
    reset();
  };

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
