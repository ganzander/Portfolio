"use client";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { WavyBackground } from "@/components/ui/wavy-background";
import { useTheme } from "next-themes";

export default function Contact() {
  const { theme, setTheme } = useTheme();
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
      className="container mt-48 pt-20 font-[sans-serif] w-full bg-[#eee] dark:bg-black mx-auto relative rounded-lg mb-5"
      id="contact"
    >
      {theme === "dark" ? (
        <WavyBackground className="max-w-4xl mx-auto pb-40">
          <h2 className="dark:text-white text-black tracking-tighter text-4xl lg:text-6xl mb-7 text-center font-semibold uppercase">
            Connect With Me
          </h2>

          <div className="dark:bg-gradient-to-b px-4 py-10 lg:px-20 dark:from-zinc-900 dark:to-zinc-950 shadow-[0_2px_10px_-3px_rgba(255, 255, 255, 0.5)] rounded-lg sm:p-10 p-4 z-10 max-lg:-order-1 max-lg:mb-8">
            <form onSubmit={handleSubmit}>
              <div className="max-w-md mx-auto space-y-3">
                <input
                  type="text"
                  placeholder="Name"
                  value={contactCred.name}
                  onChange={onChange}
                  name="name"
                  className="w-full bg-gray-100 border border-black rounded-lg py-3 px-6 text-sm outline-none"
                  style={{ color: "black", fontSize: "16px" }}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={contactCred.email}
                  onChange={onChange}
                  name="email"
                  style={{ color: "black", fontSize: "16px" }}
                  className="w-full border border-black bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none"
                />
                <input
                  type="text"
                  placeholder="Phone No."
                  value={contactCred.phone_no}
                  onChange={onChange}
                  name="phone_no"
                  style={{ color: "black", fontSize: "16px" }}
                  className="w-full border border-black bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none"
                />
                <textarea
                  placeholder="Message"
                  value={contactCred.message}
                  onChange={onChange}
                  name="message"
                  rows="6"
                  style={{ color: "black", fontSize: "16px" }}
                  className="w-full border border-black bg-gray-100 rounded-lg px-6 text-sm pt-3 outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="text-white border border-white w-full relative bg-yellow-500 hover:bg-yellow-200 hover:text-black rounded-lg text-sm px-6 py-3 !mt-6"
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
        </WavyBackground>
      ) : (
        <div className="max-w-4xl mx-auto pb-40">
          <h2 className="dark:text-white text-black tracking-tighter text-4xl lg:text-6xl mb-7 text-center font-semibold uppercase">
            Connect With Me
          </h2>

          <div className="dark:bg-gradient-to-b px-4 py-10 lg:px-20 dark:from-zinc-900 dark:to-zinc-950 shadow-[0_2px_10px_-3px_rgba(255, 255, 255, 0.5)] rounded-lg sm:p-10 p-4 z-10 max-lg:-order-1 max-lg:mb-8">
            <form onSubmit={handleSubmit}>
              <div className="max-w-md mx-auto space-y-3">
                <input
                  type="text"
                  placeholder="Name"
                  value={contactCred.name}
                  onChange={onChange}
                  name="name"
                  className="w-full bg-gray-100 border border-black rounded-lg py-3 px-6 text-sm outline-none"
                  style={{ color: "black", fontSize: "16px" }}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={contactCred.email}
                  onChange={onChange}
                  name="email"
                  style={{ color: "black", fontSize: "16px" }}
                  className="w-full border border-black bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none"
                />
                <input
                  type="text"
                  placeholder="Phone No."
                  value={contactCred.phone_no}
                  onChange={onChange}
                  name="phone_no"
                  style={{ color: "black", fontSize: "16px" }}
                  className="w-full border border-black bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none"
                />
                <textarea
                  placeholder="Message"
                  value={contactCred.message}
                  onChange={onChange}
                  name="message"
                  rows="6"
                  style={{ color: "black", fontSize: "16px" }}
                  className="w-full border border-black bg-gray-100 rounded-lg px-6 text-sm pt-3 outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="text-white border border-white w-full relative bg-yellow-500 hover:bg-yellow-200 hover:text-black rounded-lg text-sm px-6 py-3 !mt-6"
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
      )}
    </div>
  );
}
