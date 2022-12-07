import React from "react";
import styles from "../style";
import "tailwindcss/tailwind.css";
import SignUpButton from "./SignUpButton";

const WaitingListForm = () => {
  return (
    <section
      id="join-the-waitlist"
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="box">
        <h2 className={styles.heading2}>
          Sign up to join the <br className="sm:block hidden" />{" "}
          <span className=" text-gradient">MediaCyborg</span> waitlist to get
          first access.
        </h2>
      </div>
      <div className=" ">
        <div className="w-full p-6 m-auto bg-white__gradient rounded-md shadow-xl  lg:max-w-xl">
          <form className="mt-6">
            <div className="mb-2">
              <label>
                <span className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                  Name
                </span>
                <input
                  placeholder="Enter your name"
                  type="text"
                  name="name"
                  className=" w-full block px-6 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "
                />
              </label>
            </div>
            <div className="mb-2">
              <label>
                <span className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                  Email Address
                </span>
                <input
                  placeholder="Enter your email"
                  name="email"
                  type="email"
                  className=" block w-full mt-2 px-6 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "
                  required
                />
              </label>
            </div>
            <div className="mb-2">
              <label>
                <span className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                  Phone
                </span>
                <input
                  placeholder="Enter your phone number"
                  type="text"
                  name="phone"
                  className="w-full block px-6 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "
                />
              </label>
            </div>
            <div className="mb-5">
              <label>
                <span class="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                  Message
                </span>
                <textarea
                  name="message"
                  className=" block w-full mt-2 px-16 py-4 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "
                  rows="5"
                ></textarea>
              </label>
            </div>
            <div class="mb-6">
              <SignUpButton />
            </div>
            <div></div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WaitingListForm;

/*
 <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Sign up to join the <br className="sm:block hidden" />{" "}
            <span className="text-gradient">MediaCyborg</span>{" "} waitList</h2>
      </div>

      <h1 className="text-3xl font-semibold text-center">Contact Form</h1>




      <button
                type="submit"
                className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
              >
                Contact Us
              </button>
      */
