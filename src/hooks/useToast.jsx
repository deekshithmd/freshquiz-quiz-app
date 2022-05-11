import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useToast = () => {
  const successToast = (t) => toast.success(t);

  const errorToast = (text) => toast.error(text);

  return {
    successToast,
    errorToast,
  };
};
