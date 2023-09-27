import react from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

function Toaster() {
  const successmessage = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 5000,
      closeOnClick: true,
      hideProgressBar: false,
    });
  };

  const errormessage = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 5000,
      closeOnClick: true,
      hideProgressBar: false,
    });
  };

  const successAlert = (message, url) => {
    Swal.fire({
      title: "Success",
      text: message,
      icon: "success",
      width:  "27em",
      confirmButtonColor: "rgba(251, 183, 20, 1)",
      confirmButtonText: "OK",
    }).then(function () {
      window.location.href = url;
    });
  };

  const newSuccessAlert = (message) => {
    Swal.fire({
      title: "Oops!",
      text: message,
      closeOnClick: true,
      confirmButtonColor: "rgba(251, 183, 20, 1)",
      confirmButtonText: "OK",
    });
  };

  const errorAlert = (message) => {
    Swal.fire({
      icon: "error",
      text: message,
      width:  "27em",
      text: message,
      confirmButtonColor: "rgba(251, 183, 20, 1)",
      confirmButtonText: "OK",
      

    });
  
  };
  
  const deleteAlert = (message) => {
    return new Promise((resolve) => {
      Swal.fire({
        text: message,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#de7907",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        customClass: {
          confirmButton: "btn btn-warning",
          cancelButton: "btn btn-dark mx-2",
        },
        buttonsStyling: false,
      }).then(function (result) {
        if (result.isConfirmed) {
          resolve(true); // Resolve with true when user confirms deletion
        } else {
          resolve(false); // Resolve with false when user cancels deletion
        }
      });
    });
  };

  return {
    successmessage,
    errormessage,
    successAlert,
    errorAlert,
    newSuccessAlert,
    deleteAlert,
  };
}

export default Toaster;
