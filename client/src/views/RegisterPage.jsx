import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  submitRegister,
  formRegisterOnChange,
} from "../features/user/user-slicer";

const RegisterPage = () => {
  const navigate = useNavigate();
  const variants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const dispatch = useDispatch();
  const { userRegisterForm } = useSelector((state) => state.user);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch(formRegisterOnChange({ name, value }));
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    dispatch(submitRegister(userRegisterForm, navigate));
  };

  return (
    <>
      <m.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5 }}
        className="flex w-screen h-screen justify-center items-center"
      >
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
          <div className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-bk-250 to-bk-300 bg-clip-border shadow-bk-200/40">
            <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
              Register Now
            </h3>
          </div>
          <div className="flex flex-col gap-4 p-6">
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  type="text"
                  name="fullname"
                  onChange={handleInputChange}
                  value={userRegisterForm.fullname}
                  className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-bk-250 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeHolder=" "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-bk-250 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-bk-250 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-bk-250 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Full Name
                </label>
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  type="text"
                  name="email"
                  onChange={handleInputChange}
                  value={userRegisterForm.email}
                  className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-bk-250 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeHolder=" "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-bk-250 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-bk-250 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-bk-250 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Email
                </label>
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  type="password"
                  name="password"
                  onChange={handleInputChange}
                  value={userRegisterForm.password}
                  className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-bk-250 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeHolder=" "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-bk-250 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-bk-250 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-bk-250 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Password
                </label>
              </div>
              <div className="-ml-2.5"></div>
              <div className="p-6 pt-2 w-full">
                <button
                  className="block w-full select-none rounded-lg bg-gradient-to-tr from-bk-250 to-bk-200 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-bk-200/20 transition-all hover:shadow-lg hover:shadow-bk/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="submit"
                  data-ripple-light="true"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
          <p className="flex justify-center py-2 mb-4 -mt-8 marker:font-sans text-sm antialiased font-light leading-normal text-inherit">
            Don't have an account?
            <Link
              to={"/login"}
              className="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-bk-200"
            >
              Log In
            </Link>
          </p>
        </div>
      </m.div>
    </>
  );
};

export default RegisterPage;
