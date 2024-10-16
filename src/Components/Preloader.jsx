import React from "react";
import { loader } from "../assets/data";

const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="h-32 w-32">
        <img src={loader} alt="Loading..." />
      </div>
    </div>
  );
};

export default Preloader;
