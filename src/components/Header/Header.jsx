import Search_Icon from "../../assets/images/icon-arrow.svg";

import axios from "../../../src/utilities/axios";
import { API_KEY } from "../../utilities/utilities";

// IMPORTS
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const [ipAddress, setIpAddress] = useState("");
  const notify = () =>
    toast.error("Invalid IP", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  // handle form submit
  async function handleSubmit(e) {
    e.preventDefault();
    if (ipAddress.length < 5) {
      notify();

      return;
    }

    try {
      const response = await axios.get();
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }

    console.log(ipAddress);
  }
  return (
    <header className=" text-center flex flex-col items-center bg-cover bg-mobile px-2 py-10 sm:bg-desktop">
      <h2 className=" text-xl text-white font-semibold mb-3">
        Ip Address Tracker
      </h2>
      <form
        method="post"
        onSubmit={handleSubmit}
        className="input__form flex  bg-white w-fit  rounded-lg overflow-hidden  mb-3  sm:w-[25%] hover:cursor-pointer"
      >
        <input
          type="search"
          name="ipAddress"
          placeholder=" Search for an IP "
          className=" w-[90%] p-3 focus:outline-none text-black "
          onChange={(e) => {
            setIpAddress(e.target.value);
          }}
        />
        <button
          className=" bg-verydarkgray py-3 px-5 sm:w-fit transition-all delay-300 hover:cursor-pointer hover:opacity-[0.8] "
          type="submit"
        >
          <img src={Search_Icon} alt="Search Icon" />
        </button>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </form>
    </header>
  );
};

export default Header;
