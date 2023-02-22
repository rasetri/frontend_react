import { MessageService } from "../../services/Message";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";

const SendMessage = ({ user, ticket, addToList }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const _messageService = new MessageService();

  //Submit message
  const onSubmit = (values) => {
    confirmAlert({
      title: "Confirmation",
      message: `Send the message?`,
      buttons: [
        {
          label: "confirm",
          onClick: () => {
            _messageService
              .addMessage(values.message, ticket.id, user.id)
              .then((res) => {
                toast.success(`Message has been posted!`);
                addToList(res.data.createTicketMessage.ticketMessage);
                clearInputs();
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

  //Clear form input
  const clearInputs = () => {
    reset();
  };

  return (
    <div className="footer ">
      <form className="p-3 p-xl-4" onSubmit={handleSubmit(onSubmit)}>
        <ToastContainer position="top-center" autoClose={3000} />
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            id="message"
            name="message"
            placeholder="Type a message ..."
            {...register("message", {
              required: true,
            })}
          />
          {errors.message && (
            <p className="formError">
              A message must contain at least 1 character!
            </p>
          )}
        </div>
        <div>
          <button
            className="btn btn-primary shadow d-block w-100"
            type="submit"
          >
            Post{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendMessage;
