import { TicketService } from "../../services/Ticket";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useState, useEffect } from "react";
import AttachmentList from "../models/AttachmentList";
import { confirmAlert } from "react-confirm-alert";

const Attachment = ({ user, is_ticket, id }) => {
  const [fileList, set_fileList] = useState([]);
  const { handleSubmit, register } = useForm();
  const _ticketService = new TicketService();

  //Add a new file to local
  const addToList = (file) => {
    let list = [...fileList];
    list.push(file);
    set_fileList(list);
  };

  //Get initial files linked to parent 
  const getInitData = () => {
    _ticketService
      .getFilesByParent(is_ticket, id)
      .then((res) => {
        set_fileList([]);
        const values = res.data.attachmentsConnection.values;
        set_fileList(values);
      }) //There are errors
      .catch((res) => toast.error(res.message));
  };

  //Initialize via use Effect
  useEffect(() => {
    getInitData();
  }, []);

  //Sending file form
  const onSubmit = (values) => {
    let file = values.myFile[0];

    confirmAlert({
      title: "Confirmation",
      message: `Do you want to add this file?`,
      buttons: [
        {
          label: "confirm",
          onClick: () => {
            _ticketService
              .uploadfile(file)
              .then((res) => {
                toast.success(`File has been uploaded!`);
                const file = res.data.upload.url;
                linkingFile(file, is_ticket, id);
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

  //Linking a file to its parents
  const linkingFile = (file, is_ticket, id) => {
    _ticketService
      .linkFile(file, is_ticket, id)
      .then((res) => {
        toast.success(`File has been linked to its parent!`);
        const newFile = res.data.createAttachment.attachment;
        addToList(newFile);
      })
      .catch((res) => toast.error(res.message));
  };

  return (
    <div className="bg-gradient-primary">
      <form className="p-3 p-xl-4" onSubmit={handleSubmit(onSubmit)}>
        <ToastContainer position="top-center" autoClose={3000} />
        <div className="mb-3">
          <input
            className="form-control"
            type="file"
            id="myFile"
            name="myFile"
            placeholder="Title"
            {...register("myFile", {
              required: true,
            })}
          />
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
      <AttachmentList fileList={fileList} />
    </div>
  );
};

export default Attachment;
