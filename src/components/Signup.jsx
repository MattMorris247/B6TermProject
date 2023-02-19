import React from 'react'
import './Signup.css'

const Signup = () => {
  return (
    <div className="column-container">
        <div className="row">
            <div className='column-side'></div>
            <div className="column-main">
                <div className="column-row"></div>
                <form>

                    <h1 class="font-bold text-2xl ml-56 mt-4 text-white mt-10">User Information</h1>

                    <br/>

				    <input class="shadow appearance-none border rounded w-50 py-2 px-2 mx-20 my-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="username" 
                    type="text" 
                    placeholder="Username*"/>

				    <input class="shadow appearance-none border rounded w-50 py-2 px-2 ml-1 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="phone-number" 
                    type="text" 
                    placeholder="Phone Number*"/>

                    <br/>

                    <input class="shadow appearance-none border rounded w-50 py-2 px-2 mx-20 my-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="password" 
                    type="text" 
                    placeholder="Password*"/>

				    <input class="shadow appearance-none border rounded w-50 py-2 px-2 ml-1 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="email" 
                    type="text" 
                    placeholder="Email*"/>
                    
                    <br/>

                    <h1 class="font-bold text-2xl ml-48 mt-4 text-white">Payment Info(Optional)</h1>

                    <br/>

                    <input class="shadow appearance-none border rounded w-9/12 py-2 px-2 ml-20 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="cardnumber" 
                    type="text" 
                    placeholder="Card Number"/>

                    <input class="shadow appearance-none border rounded w-3/12 py-2 px-2 ml-20 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="expiremonth" 
                    type="text" 
                    placeholder="Exp. Month"/>

                    <input class="shadow appearance-none border rounded w-3/12 py-2 px-2 -ml-2 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="expireyear" 
                    type="text" 
                    placeholder="Exp. Year"/>

                    <input class="shadow appearance-none border rounded w-3/12 py-2 px-2 -ml-2 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="cvv" 
                    type="text" 
                    placeholder="CVV"/>

                    <br/>
                    
                    <input class="shadow appearance-none border rounded w-6/12 py-2 px-2 ml-20 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="county" 
                    type="text" 
                    placeholder="Country"/>

                    <input class="shadow appearance-none border rounded w-3/12 py-2 px-2 -ml-2 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="zipcode" 
                    type="text" 
                    placeholder="Zip/Postal Code"/>

                    <br/>

                    <h1 class="font-bold text-2xl ml-44 mt-4 text-white">Home Address Information</h1>

                    <br/>

                    <input class="shadow appearance-none border rounded w-9/12 py-2 px-2 ml-20 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="address" 
                    type="text" 
                    placeholder="Street Address*"/>

                    <input class="shadow appearance-none border rounded w-3/12 py-2 px-2 ml-20 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="city" 
                    type="text" 
                    placeholder="City*"/>

                    <input class="shadow appearance-none border rounded w-3/12 py-2 px-2 -ml-2 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="state" 
                    type="text" 
                    placeholder="State*"/>

                    <input class="shadow appearance-none border rounded w-3/12 py-2 px-2 -ml-2 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="addresszip" 
                    type="text" 
                    placeholder="Zip/Postal Code*"/>
                </form>

                <br/>

                <label class="font-bold text-1xl ml-32 mt-4 text-white">Do you want to be signed up for email promotions?
                <input class="ml-1"
                id="promotions"
                type="checkbox"/>
                </label>
                <p class="font-bold text-1xl ml-40 text-white">Input fields marked with a star are required</p>
                <br/>
                <button type="button" 
                class="text-white bg-gray-800 w-32 ml-64 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    Submit Form
                </button>

                <div className="column-row"></div>
            </div>
            <div className='column-side'></div>
        </div>

        
    </div>
  )
}

export default Signup