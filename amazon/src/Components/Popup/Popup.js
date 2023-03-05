import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Popups = () => {
  const notify = () => toast("Wow so easy!");

  // !user.email
  //   ? toast.warn(`Removing from Cart!`)
  //       : user.email && toast.warn(`Removing from ${user.email} Cart!`);
    
    
  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Popups;
