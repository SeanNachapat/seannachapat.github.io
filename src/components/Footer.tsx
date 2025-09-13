import React from "react";

const Footer = () => {
  return (
    <div className="bg-night text-white font-JetBrain">
      <div className="flex flex-col items-center">
        <div className="text-3xl p-4 text-gray-400 flex gap-5">
          <a href="https://github.com/SeanNachapat " target="_blank">
            <span
              className="fa fa-github hover:text-white hover:scale-105"
              aria-hidden="true"
            ></span>
          </a>

          <a href="https://www.instagram.com/seanst._/ " target="_blank">
            <span
              className="fa fa-instagram hover:text-white hover:scale-105"
              aria-hidden="true"
            ></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
