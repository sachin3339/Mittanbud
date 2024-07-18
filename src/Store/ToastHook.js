import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastMessage = ({ type, message, time = 3000 }) => {
    const showToast = () => {
      switch (type) {
        case 'success':
          toast.success(message, {
            position: "top-center",
            autoClose: time,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          break;
        case 'error':
          toast.error(message, {
            position: "top-center",
            autoClose: time,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          break;
        case 'warning':
          toast.warn(message, {
            position: "top-center",
            autoClose: time,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          break;
        default:
          break;
      }
    };
  
    // Call the showToast function
 
  
    return (
      <>
        {/* Do not forget to call the ToastContainer outside of the function */}
        {/* <ToastContainer /> */}
        {   showToast()}
      </>
    );
  };
  
  export default ToastMessage;
  