import React from "react";
import { Link } from "react-router-dom";

// pages
import SignIn from "./SignIn";

const SignUp = () => {
  return (
    <section className="gradient-form h-full">
      <div className="g-0 lg:flex lg:flex-wrap">
        <div className="px-4 md:px-0 lg:w-7/12">
          <div className="md:mx-6 md:p-12">
            <div className="font-display">
              <h4 className="mb-3 mt-1 pb-1 text-2xl font-medium">Welcome to VCSIRF Copy Cat Community</h4>
              <p className='mb-12 pb-1 text-base'>Already have an account? <Link className="underline" to="../sign-in">Log In</Link></p>
            </div>
            <form className="font-display">
              
              <div className="flex items-center justify-between pb-6">
                <p className="mb-0 mr-2">Don't have an account?</p>
                <button type="button" className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10" data-te-ripple-init="" data-te-ripple-color="light">Register</button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex items-center rounded-b-lg lg:w-5/12 lg:rounded-r-lg lg:rounded-bl-none">
          <img src="./src/assets/signup.jpg" class="w-full object-cover h-[100vh]"></img>
        </div>
      </div>
    </section>
  );
}

export default SignUp;