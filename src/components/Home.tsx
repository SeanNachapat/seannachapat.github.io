import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="bg-white dark:bg-black font-JetBrain flex flex-col min-h-screen justify-center items-center">
      <Navbar />
      <h1 className="text-[2em] font-medium text-black mb-4 dark:text-white">
        Hey there! I'm Sean 👋
      </h1>
      <p className="text-[1em] mb-2 dark:text-white">
        💻 Studying Computer Science at KMITL
      </p>
      <ul className="hidden md:flex gap-10 underline mb-8 dark:text-white">
        <a
          className="hover:text-blue-800 cursor-pointer"
          href="https://github.com/SeanNachapat"
        >
          Github
        </a>
        <a
          className="hover:text-blue-800 cursor-pointer"
          href="https://www.instagram.com/seanst._/"
        >
          Instagram
        </a>
        <a
          className="hover:text-blue-800 cursor-pointer"
          href="https://www.youtube.com/@Seanst"
        >
          Youtube
        </a>
        <a className="hover:text-blue-800 cursor-pointer" href="/Card">
          Card
        </a>
      </ul>
    </div>
  );
};

export default Home;
