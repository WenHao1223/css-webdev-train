import React from "react";
import 'boxicons';

import { Link } from "react-router-dom";
import './../index.css';

const hide = (id) => {
  if($(`#${id}`).attr("type") === "password"){
    $(`#div-${id}`).children(1).attr("name", "show");
    $(`#div-${id}`).children(2).text("Show");
    $(`#${id}`).attr("type", "text");
  } else {
    $(`#div-${id}`).children(1).attr("name", "hide");
    $(`#div-${id}`).children(2).text("Hide");
    $(`#${id}`).attr("type", "password");
  }
}

const SignIn = () => {
  return (
    <section className="gradient-form h-full">
      <div className="g-0 lg:flex lg:flex-wrap overflow-hidden">
        <div className="px-4 md:px-0 lg:w-7/12 overflow-y">
          <div className="md:mx-6 md:p-12">
            <p className='mb-6 pb-1 text-base text-right'>Don't have an account? <Link to="/">Sign Up</Link></p>
            <div className="font-display">
              <h4 className="mb-3 mt-1 pb-1 text-2xl font-medium">Sign In</h4>
            </div>
            <form className="font-display">
              <div className="grid grid-cols-1 gap-6">
                <label className="block">
                  <span className="text-gray-700">Student Email</span>
                  <input type="email" className="mt-1 block w-full" placeholder="john123@student.usm.my"/>
                </label>
                <label className="block">
                  <div className="flex justify-between">
                      <div className="text-gray-700">Your password</div>
                      <div className="content-center flex cursor-pointer" id="div-pw" onClick={() => hide("pw")}>
                        <box-icon color="#374151" name='hide'></box-icon>
                        <span className="ml-2 text-gray-700">Hide</span>
                      </div>
                    </div>
                    <input id="pw" type="password" className="mt-1 block w-full" placeholder="" />
                    <div className="mt-1 items-center mt-2 text-sm text-right">
                      <a className="cursor-pointer">Forget your password</a>
                    </div>
                </label>
              </div>
              <button type="button" className="block rounded-2xl border-2 border -secondary mt-6 mb-6 px-8 pb-[10px] pt-3 text-md font-medium leading-normal bg-secondary-400 text-white transition duration-150 ease-in-out hover:border-secondary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-secondary-600 focus:border-secondary-600 focus:text-secondary-600 focus:outline-none focus:ring-0 active:border-secondary-700 active:text-secondary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10" data-te-ripple-init="" data-te-ripple-color="light">Sign In</button>
              <p>Don't have an account? <Link to="/">Sign In</Link></p>
            </form>
          </div>
        </div>
        <div className="rounded-b-lg lg:w-5/12 lg:rounded-r-lg lg:rounded-bl-none w-full h-[100vh] bg-[url('./src/assets/signin.jpg')] lg:flex hidden font-display">
          <div className="items-center flex h-full w-full bg-neutral-950/[.25]">
            <div className="px-4 py-6 text-white md:mx-6 md:p-12">
              <svg height={60} width={60}>
                <ellipse cx={20} cy={20} rx={20} ry={20} style={{ fill: "white" }}
                />
              </svg>
                <h4 className="mb-4 text-4xl font-medium">
                  2 steps - Find, Apply.
                </h4>
                <p className="text-light">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo .
                </p>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}

export default SignIn;