import React, { useState } from "react";
import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  Textarea,
} from "@mantine/core";
import { toast, ToastContainer } from "react-toastify";
import joinedImage from "../assets/join.svg";

import "react-toastify/dist/ReactToastify.css";
const MailForm = () => {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    "entry.1759328524": "",
    "entry.60803183": "",
    "entry.220097671": "",
    "entry.857691959": "",
  });

  const handleInputData = (input) => (e) => {
    const { value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      formData["entry.1759328524"] === "" ||
      formData["entry.60803183"] === "" ||
      formData["entry.220097671"] === "" ||
      formData["entry.857691959"] === ""
    ) {
      toast.warning("Please enter valid values", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setSubmit(false);
    } else {
      setSubmit(true);

      let url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSejEzAdpCGzmTYSq2LQTZbCpq8A4GcVUDpo0iAq9_7Ex2JMbA/formResponse?entry.1759328524=${formData["entry.1759328524"]}&entry.60803183=${formData["entry.60803183"]}&entry.220097671=${formData["entry.220097671"]}&entry.857691959=${formData["entry.857691959"]}`;

      const res = await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
    }
  }
  return (
    <div className="  m-auto mt-11 sm:mt-18  w-96  pr-2 pt-2">
      {submit ? (
        <div className="text-indigo-600 w-96 rounded-lg p-8 m-auto mt-8 ">
          <img src={joinedImage} alt="Successful request sent image" />

          <h1 className="text-indigo-600 font-normal ">
            Thank you! we will get back to you soon...
          </h1>
        </div>
      ) : (
        <form onSubmit={handleSubmit} target="_self">
          {
            <div className="overflow-hidden flex flex-col items-center  w-96   drop-shadow-lg border-gray-500 sm:rounded-md">
              <h1 className="text-gray-600 font-bold">
                Player Registration Form
              </h1>
              <div className="bg-white px-4 py-5 w-96 border-2 rounded-xl  shadow-lg sm:p-6">
                <div className="grid grid-cols-6  gap-6">
                  <div className="col-span-6 ">
                    <label
                      htmlFor="entry.1759328524"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <input
                      required
                      type="text"
                      name="entry.1759328524"
                      onChange={handleInputData("entry.1759328524")}
                      value={formData["entry.1759328524"]}
                      autoComplete={"false"}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-gray-700  sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 ">
                    <label
                      htmlFor="entry.60803183"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <input
                      required
                      type="text"
                      name="entry.60803183"
                      onChange={handleInputData("entry.60803183")}
                      value={formData["entry.60803183"]}
                      autoComplete={"false"}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-gray-700  sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 ">
                    <label
                      htmlFor="entry.220097671"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="XXXXXXXXXX"
                      pattern="[0-9]{10}"
                      required
                      name="entry.220097671"
                      onChange={handleInputData("entry.220097671")}
                      value={formData["entry.220097671"]}
                      autoComplete={"false"}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-gray-700  sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="entry.857691959"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <Textarea
                      required
                      name="entry.857691959"
                      placeholder="I am interested to join because..."
                      cols="10"
                      onChange={handleInputData("entry.857691959")}
                      value={formData["entry.857691959"]}
                      autoComplete={"false"}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm"
                    ></Textarea>
                  </div>
                </div>
                <div className=" px-4 py-3 text-center sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex outline-2 justify-center rounded-md  border-transparent bg-white-600 py-2 px-4 text-sm font-medium text-black hover:text-white shadow-md hover:bg-red-500 focus:outline-none  transition duration-150 ease-out hover:ease-in"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          }
        </form>
      )}
      <ToastContainer />
    </div>
  );
};

export default MailForm;
