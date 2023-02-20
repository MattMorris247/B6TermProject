import React from 'react'
import '../cssfiles/RegistrationConfirmation.css';

const RegistrationConfirmation = () => {
  return (
    <div className="registration-container">
      <div className="registration-row">
        <div className="registration-column-side"></div>
        <div className="registration-column-main">
          <div className="registration-column-row"></div>
          <h1 class="text-white font-bold text-xl text-center mt-10">Your account has been created!</h1>
          <br/>
          <h1 class="text-white font-bold text-xl text-center">Please enter the code sent to your email to verify your account and complete account registration.</h1>
          <br/>
          <input class="shadow appearance-none border rounded text-white text-center w-32 h-10 text-xl ml-64"
          id="submitcode"
          type="text"
          placeholder="Code"
          />
          <br/>
          <button type="button" 
          class="text-white bg-gray-800 w-6/12 ml-40 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-10 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            Submit
          </button>
          <div className="registration-column-row"></div>
        </div>
        <div className="registration-column-side"></div>
      </div>
    </div>
  )
}

export default RegistrationConfirmation