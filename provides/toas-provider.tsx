"use client";

import "react-toastify/dist/ReactToastify.css";
import { Bounce, ToastContainer } from "react-toastify";

interface ToastProviderProps {
  children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {

  return (
    <>
      {children}
      <ToastContainer
        autoClose={3000}
        position="top-center"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
        stacked
      />
    </>
  );
}