"use client";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const [contactCred, setContactCred] = useState({
    name: "",
    email: "",
    phone_no: "",
    message: "",
  });

  function onChange(event) {
    setContactCred({
      ...contactCred,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, phone_no, message } = contactCred;
    if (!email || !name || !phone_no || !message) {
      toast.error("Please fill in all the details");
    } else {
      axios
        .post("/api/send-mail", { name, email, phone_no, message })
        .then((result) => {
          if (result.data.Success === true) {
            toast.success("Mail sent.");
          } else {
            toast.error("OOPS! Something went wrong.");
          }
        });
    }
  }
  return (
    <div
      className="container  font-[sans-serif] max-w-6xl mx-auto relative rounded-lg mb-12"
      id="contact"
    >
      <h2 className="mb-12 mt-80 text-center text-4xl font-semibold">
        Contact Me
      </h2>
      <div className="grid lg:grid-cols-3 items-center">
        <div className="grid sm:grid-cols-2 gap-4 z-20 relative lg:left-16 max-lg:px-4">
          <div className="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 fill-blue-600"
              viewBox="0 0 473.806 473.806"
            >
              <path
                d="M374.456 293.506c-9.7-10.1-21.4-15.5-33.8-15.5-12.3 0-24.1 5.3-34.2 15.4l-31.6 31.5c-2.6-1.4-5.2-2.7-7.7-4-3.6-1.8-7-3.5-9.9-5.3-29.6-18.8-56.5-43.3-82.3-75-12.5-15.8-20.9-29.1-27-42.6 8.2-7.5 15.8-15.3 23.2-22.8 2.8-2.8 5.6-5.7 8.4-8.5 21-21 21-48.2 0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5-6-6.2-12.3-12.6-18.8-18.6-9.7-9.6-21.3-14.7-33.5-14.7s-24 5.1-34 14.7l-.2.2-34 34.3c-12.8 12.8-20.1 28.4-21.7 46.5-2.4 29.2 6.2 56.4 12.8 74.2 16.2 43.7 40.4 84.2 76.5 127.6 43.8 52.3 96.5 93.6 156.7 122.7 23 10.9 53.7 23.8 88 26 2.1.1 4.3.2 6.3.2 23.1 0 42.5-8.3 57.7-24.8.1-.2.3-.3.4-.5 5.2-6.3 11.2-12 17.5-18.1 4.3-4.1 8.7-8.4 13-12.9 9.9-10.3 15.1-22.3 15.1-34.6 0-12.4-5.3-24.3-15.4-34.3l-54.9-55.1zm35.8 105.3c-.1 0-.1.1 0 0-3.9 4.2-7.9 8-12.2 12.2-6.5 6.2-13.1 12.7-19.3 20-10.1 10.8-22 15.9-37.6 15.9-1.5 0-3.1 0-4.6-.1-29.7-1.9-57.3-13.5-78-23.4-56.6-27.4-106.3-66.3-147.6-115.6-34.1-41.1-56.9-79.1-72-119.9-9.3-24.9-12.7-44.3-11.2-62.6 1-11.7 5.5-21.4 13.8-29.7l34.1-34.1c4.9-4.6 10.1-7.1 15.2-7.1 6.3 0 11.4 3.8 14.6 7l.3.3c6.1 5.7 11.9 11.6 18 17.9 3.1 3.2 6.3 6.4 9.5 9.7l27.3 27.3c10.6 10.6 10.6 20.4 0 31-2.9 2.9-5.7 5.8-8.6 8.6-8.4 8.6-16.4 16.6-25.1 24.4-.2.2-.4.3-.5.5-8.6 8.6-7 17-5.2 22.7l.3.9c7.1 17.2 17.1 33.4 32.3 52.7l.1.1c27.6 34 56.7 60.5 88.8 80.8 4.1 2.6 8.3 4.7 12.3 6.7 3.6 1.8 7 3.5 9.9 5.3.4.2.8.5 1.2.7 3.4 1.7 6.6 2.5 9.9 2.5 8.3 0 13.5-5.2 15.2-6.9l34.2-34.2c3.4-3.4 8.8-7.5 15.1-7.5 6.2 0 11.3 3.9 14.4 7.3l.2.2 55.1 55.1c10.3 10.2 10.3 20.7.1 31.3zm-154.2-286.1c26.2 4.4 50 16.8 69 35.8s31.3 42.8 35.8 69c1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.4-1.2 12.3-8.2 11.1-15.6-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3 3.7-15.6 11s3.5 14.4 10.9 15.6zm217.2 96.3c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2 3.7-15.5 11-1.2 7.4 3.7 14.3 11.1 15.6 46.6 7.9 89.1 30 122.9 63.7 33.8 33.8 55.8 76.3 63.7 122.9 1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.3-1.1 12.3-8.1 11-15.4z"
                data-original="#000000"
              ></path>
            </svg>
            <h4 className="text-gray-800 text-base font-bold mt-4">Call us</h4>
            <p className="text-sm text-gray-600 mt-2">+91 7042317518</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 fill-blue-600"
              viewBox="0 0 32 32"
            >
              <path
                d="M8 30a1.001 1.001 0 0 1-1-1v-5H4c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h24c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3H15.851l-7.226 5.781A.998.998 0 0 1 8 30zM4 4c-.552 0-1 .449-1 1v16c0 .551.448 1 1 1h4a1 1 0 0 1 1 1v3.92l5.875-4.701A1 1 0 0 1 15.5 22H28c.552 0 1-.449 1-1V5c0-.551-.448-1-1-1z"
                data-original="#000000"
              ></path>
              <path
                d="M24 12H8a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2zm-8 4H8a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2z"
                data-original="#000000"
              ></path>
            </svg>
            <h4 className="text-gray-800 text-base font-bold mt-4">
              Chat with me
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              ganeshmangla2003@gmail.com
            </p>
          </div>
        </div>

        <div className="lg:col-span-2 bg-gradient-to-b px-4 py-10 lg:px-20 from-zinc-900 to-zinc-950 shadow-[0_2px_10px_-3px_rgba(255, 255, 255, 0.5)] rounded-lg sm:p-10 p-4 z-10 max-lg:-order-1 max-lg:mb-8">
          <form onSubmit={handleSubmit}>
            <div className="max-w-md mx-auto space-y-3">
              <input
                type="text"
                placeholder="Name"
                value={contactCred.name}
                onChange={onChange}
                name="name"
                className="w-full bg-gray-100  rounded-lg py-3 px-6 text-sm outline-none"
                style={{ color: "black", fontSize: "16px" }}
              />
              <input
                type="email"
                placeholder="Email"
                value={contactCred.email}
                onChange={onChange}
                name="email"
                style={{ color: "black", fontSize: "16px" }}
                className="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none"
              />
              <input
                type="text"
                placeholder="Phone No."
                value={contactCred.phone_no}
                onChange={onChange}
                name="phone_no"
                style={{ color: "black", fontSize: "16px" }}
                className="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none"
              />
              <textarea
                placeholder="Message"
                value={contactCred.message}
                onChange={onChange}
                name="message"
                rows="6"
                style={{ color: "black", fontSize: "16px" }}
                className="w-full bg-gray-100 rounded-lg px-6 text-sm pt-3 outline-none"
              ></textarea>
              <button
                type="submit"
                className="text-gray-800 w-full relative bg-yellow-400 hover:bg-yellow-500 font-semibold rounded-lg text-sm px-6 py-3 !mt-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="currentColor"
                  className="mr-2 inline"
                  viewBox="0 0 548.244 548.244"
                >
                  <path
                    fillRule="evenodd"
                    d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                    clipRule="evenodd"
                    data-original="#000000"
                  />
                </svg>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
