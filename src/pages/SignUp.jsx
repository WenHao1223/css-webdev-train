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

const change = (id) => {
  if(id === "email") {
    if(!$(`#${id}`).val().match(/^(.*)@student.usm.my/gm)){
      $(`#w-${id}`).removeClass("hidden");
    } else {
      $(`#w-${id}`).addClass("hidden");
    }
  }
  
  if(id === "fullName") {
    if($(`#${id}`).val() === ""){
      $(`#w-${id}`).removeClass("hidden");
    } else {
      $(`#w-${id}`).addClass("hidden");
    }
  }

  if(id === "pw") {
    if($(`#${id}`).val().length >= 8) {
      $(`#w-${id}-8`).css("backgroundColor", "#14A44D");
    } else {
      $(`#w-${id}-8`).css("backgroundColor", "#6b7280");
    }

    if($(`#${id}`).val().match(/[A-Z]/gm)){
      $(`#w-${id}-upper`).css("backgroundColor", "#14A44D");
    } else {
      $(`#w-${id}-upper`).css("backgroundColor", "#6b7280");
    }

    if($(`#${id}`).val().match(/[a-z]/gm)){
      $(`#w-${id}-lower`).css("backgroundColor", "#14A44D");
    } else {
      $(`#w-${id}-lower`).css("backgroundColor", "#6b7280");
    }

    if($(`#${id}`).val().match(/[\`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\{\}\[\]\:\;\'\"\\\|\,\.\<\>\/\?]/gm)){
      $(`#w-${id}-special`).css("backgroundColor", "#14A44D");
    } else {
      $(`#w-${id}-special`).css("backgroundColor", "#6b7280");
    }

    if($(`#${id}`).val().match(/[0-9]/gm)){
      $(`#w-${id}-no`).css("backgroundColor", "#14A44D");
    } else {
      $(`#w-${id}-no`).css("backgroundColor", "#6b7280");
    }
  }
  
  if(id === "confirm-pw") {
    if($(`#${id}`).val() == $("#pw").val()){
      $(`#w-${id}`).css("backgroundColor", "#14A44D");
    } else {
      $(`#w-${id}`).css("backgroundColor", "#6b7280");
    }
  }

  if(id === "tel") {
    if(!$(`#${id}`).val().match(/^(\+?6?01)[02-46-9]-[0-9]{7}$|^(\+?6?01)[1]-[0-9]{8}$/gm)){
      $(`#w-${id}`).removeClass("hidden");
    } else {
      $(`#w-${id}`).addClass("hidden");
    }
  }
}

const SignUp = () => {
  return (
    <section className="gradient-form h-full">
      <div className="g-0 lg:flex lg:flex-wrap overflow-hidden">
        <div className="px-4 md:px-0 lg:w-7/12 overflow-y">
          <div className="md:mx-6 md:p-12">
            <div className="font-display">
              <h4 className="mb-3 mt-1 pb-1 text-2xl font-medium">Welcome to VCSIRF Copy Cat Community</h4>
              <p className='mb-6 pb-1 text-base'>Already have an account? <Link to="../sign-in">Sign In</Link></p>
            </div>
            <form className="font-display">
              <div className="grid grid-cols-1 gap-6">
                <label className="block">
                  <span className="text-gray-700">Student Email</span>
                  <input type="email" className="mt-1 block w-full" id="email" placeholder="john123@student.usm.my" onChange={ () => change("email")}/>
                  <span className="text-danger text-xs hidden" id="w-email">Wrong email format.</span>
                </label>
                <label className="block">
                  <span className="text-gray-700">Full name (as per IC)</span>
                  <input type="text" className="mt-1 block w-full" id="fullName" placeholder="Steve John" onChange={ () => change("fullName")}/>
                  <span className="text-danger text-xs hidden" id="w-fullName">Write something here...</span>
                </label>
                <label className="block">
                  <div className="flex justify-between">
                    <div className="text-gray-700">Password</div>
                    <div className="content-center flex cursor-pointer" id="div-pw" onClick={() => hide("pw")}>
                      <box-icon color="#374151" name='hide'></box-icon>
                      <span className="ml-2 text-gray-700">Hide</span>
                    </div>
                  </div>
                  <input id="pw" type="password" className="mt-1 block w-full" placeholder="" onChange={ () => change("pw")}/>

                  <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-2 text-sm mt-2">
                    <label className="mt-1 inline-flex items-center">
                      <input className="form-radio" id="w-pw-8" type="radio" style={{backgroundColor: "#6b7280"}} checked disabled/>
                      <span className="ml-2 mr-8">Use 8 or more characters</span>
                    </label>
                    <label className="mt-1 inline-flex items-center">
                      <input className="form-radio hover:bg-gray-500" id="w-pw-upper" type="radio" style={{backgroundColor: "#6b7280"}} checked disabled/>
                      <span className="ml-2 mr-8">One uppercase character</span>
                    </label>
                    <label className="mt-1 inline-flex items-center">
                      <input className="form-radio" id="w-pw-lower" type="radio" style={{backgroundColor: "#6b7280"}} checked disabled/>
                      <span className="ml-2 mr-8">One lowercase character</span>
                    </label>
                    <label className="mt-1 inline-flex items-center">
                      <input className="form-radio" id="w-pw-special" type="radio" style={{backgroundColor: "#6b7280"}} checked disabled/>
                      <span className="ml-2 mr-8">One special character</span>
                    </label>
                    <label className="mt-1 inline-flex items-center">
                      <input className="form-radio" id="w-pw-no" type="radio" style={{backgroundColor: "#6b7280"}} checked disabled/>
                      <span className="ml-2 mr-8">One number</span>
                    </label>
                  </div>
                </label>
                <label className="block">
                  <div className="flex justify-between">
                      <div className="text-gray-700">Confirm password</div>
                      <div className="content-center flex cursor-pointer" id="div-confirm-pw" onClick={() => hide("confirm-pw")}>
                        <box-icon color="#374151" name='hide'></box-icon>
                        <span className="ml-2 text-gray-700">Hide</span>
                      </div>
                    </div>
                    <input id="confirm-pw" type="password" className="mt-1 block w-full" placeholder="" onChange={ () => change("confirm-pw")}/>
                    <label className="mt-1 inline-flex items-center mt-2 text-sm">
                      <input className="form-radio" id="w-confirm-pw" type="radio" style={{backgroundColor: "#6b7280"}} checked disabled/>
                      <span className="ml-2 mr-8">Password same</span>
                    </label>
                </label>
                <label className="block">
                  <span className="text-gray-700">Phone number</span>
                  <input type="tel" className="mt-1 block w-full" id="tel" placeholder="+6012-3456789" onChange={ () => change("tel")}/>
                  <span className="text-danger text-xs hidden" id="w-tel">Wrong phone format.</span>
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
              <p>Already have an account? <Link to="sign-in">Sign In</Link></p>
            </form>
          </div>
        </div>
        <div className="items-center rounded-b-lg lg:w-5/12 lg:rounded-r-lg lg:rounded-bl-none overflow-hidden lg:block hidden">
          <div className="fixed h-full lg:w-5/12">
            <img src="./src/assets/signup.jpg" className="w-full h-full object-cover"></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;