import React from "react";
import 'boxicons';

import { Link } from "react-router-dom";
import './index.css';

const SignUp = () => {
  return (
    <section className="gradient-form h-full">
      <div className="g-0 lg:flex lg:flex-wrap overflow-hidden">
        <div className="px-4 md:px-0 lg:w-7/12 overflow-y">
          <div className="md:mx-6 md:p-12">
            <div className="font-display">
              <h4 className="mb-3 mt-1 pb-1 text-2xl font-medium">Welcome to VCSIRF Copy Cat Community</h4>
              <p className='mb-6 pb-1 text-base'>Already have an account? <Link to="../sign-in">Log In</Link></p>
            </div>
            <form className="font-display">
              <div className="grid grid-cols-1 gap-6">
                <label className="block">
                  <span className="text-gray-700">Student Email</span>
                  <input type="email" className="mt-1 block w-full" placeholder="john123@student.usm.my"/>
                </label>
                <label className="block">
                  <span className="text-gray-700">Full Name (as per IC)</span>
                  <input type="text" className="mt-1 block w-full" placeholder="John Bieber" />
                </label>
                <label className="block">
                  <div className="flex justify-between">
                    <div className="text-gray-700">Password</div>
                    <div className="content-center flex">
                      <box-icon color="#374151" name='hide'></box-icon>
                      <span className="ml-2 text-gray-700">Hide</span>
                    </div>
                  </div>
                  <input type="password" className="mt-1 block w-full" placeholder="" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-2 text-sm mt-2">
                    <label className="mt-1 inline-flex items-center">
                      <input className="form-radio" type="radio" style={{backgroundColor: "#6b7280"}} checked disabled/>
                      <span className="ml-2 mr-8">Use 8 or more characters</span>
                    </label>
                    <label className="mt-1 inline-flex items-center">
                      <input className="form-radio hover:bg-gray-500" type="radio" style={{backgroundColor: "#6b7280"}} checked disabled/>
                      <span className="ml-2 mr-8">One uppercase character</span>
                    </label>
                    <label className="mt-1 inline-flex items-center">
                      <input className="form-radio" type="radio" style={{backgroundColor: "#6b7280"}} checked disabled/>
                      <span className="ml-2 mr-8">One lowercase character</span>
                    </label>
                    <label className="mt-1 inline-flex items-center">
                      <input className="form-radio" type="radio" style={{backgroundColor: "#6b7280"}} checked disabled/>
                      <span className="ml-2 mr-8">One special character</span>
                    </label>
                    <label className="mt-1 inline-flex items-center">
                      <input className="form-radio" type="radio" style={{backgroundColor: "#6b7280"}} checked disabled/>
                      <span className="ml-2 mr-8">One number</span>
                    </label>
                  </div>
                </label>
                <label className="block">
                <div className="flex justify-between">
                    <div className="text-gray-700">Confirm Password</div>
                    <div className="content-center flex">
                      <box-icon color="#374151" name='hide'></box-icon>
                      <span className="ml-2 text-gray-700">Hide</span>
                    </div>
                  </div>
                  <input type="password" className="mt-1 block w-full" placeholder="" />
                  <label className="mt-1 inline-flex items-center mt-2 text-sm">
                      <input className="form-radio" type="radio" style={{backgroundColor: "#6b7280"}} checked disabled/>
                      <span className="ml-2 mr-8">Password same</span>
                    </label>
                </label>
                <label className="block">
                  <span className="text-gray-700">Phone Number</span>
                  <input type="text" className="mt-1 block w-full" placeholder="+6012-345 6789" />
                </label>
                <label className="block">
                  <span className="text-gray-700">Birth date</span>
                  <input type="date" className="mt-1 block w-full"/>
                </label>
                <div className="block">
                  <div>
                    <label className="inline-flex items-center">
                      <input type="checkbox" defaultChecked="" />
                      <span className="ml-2">By creating an account, you agree to the <Link to="terms-of-use">Terms of use</Link> and <Link to="privacy-policy">Privacy Policy</Link>.</span>
                    </label>
                  </div>
                </div>
              </div>
              <button type="button" className="block rounded-2xl border-2 border -secondary mt-6 mb-6 px-8 pb-[10px] pt-3 text-md font-medium leading-normal bg-secondary-400 text-white transition duration-150 ease-in-out hover:border-secondary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-secondary-600 focus:border-secondary-600 focus:text-secondary-600 focus:outline-none focus:ring-0 active:border-secondary-700 active:text-secondary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10" data-te-ripple-init="" data-te-ripple-color="light">Create an account</button>
              <p>Already have an account? <Link to="sign-in">Log In</Link></p>
            </form>
          </div>
        </div>
        <div className="items-center rounded-b-lg lg:w-5/12 lg:rounded-r-lg lg:rounded-bl-none overflow-hidden">
          <div className="fixed h-full lg:w-5/12">
            <img src="./src/assets/signup.jpg" className="w-full h-full object-cover"></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;