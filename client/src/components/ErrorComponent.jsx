import React from "react";
import { RiSignalWifiErrorLine } from "react-icons/ri";

const ErrorComponent = ({ errorMessage = "Something went wrong" }) => {
  return (
    <div className="flex flex-col gap-5 my-10 items-center justify-center ">
      <div className="flex items-center justify-center p-5 rounded-full bg-danger-100">
        <RiSignalWifiErrorLine className="text-7xl text-danger" />
      </div>
      <p className="text-4xl font-bold text-danger">An error occured⛔☹️</p>
      <span className="text-danger"> Error: {errorMessage}</span>
    </div>
  );
};

export default ErrorComponent;
