import React from "react";
import Swal, { SweetAlertIcon } from "sweetalert2";

interface ToastProps {
  type: SweetAlertIcon;
  message: string | unknown;
}

const useToast: React.FC<ToastProps> = ({ type, message }) => {
  Swal.fire({
    icon: type,
    text: JSON.stringify(message),
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    width: "300px",
    showClass: {
      popup: "swal2-show",
      backdrop: "swal2-noanimation",
    },
    hideClass: {
      popup: "",
      backdrop: "",
    },
    background: "#555555",
    color: "#f3f3f3",
  });

  return null;
};

export default useToast;
