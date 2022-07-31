import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useToast = () => {
  const successToast = (text: String) => toast.success(text);

  const errorToast = (text: String) => toast.error(text);

  return {
    successToast,
    errorToast,
  };
};
