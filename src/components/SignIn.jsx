import React from 'react'
import '../cssfiles/SignIn.css';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
	<div>
		<div className="column2-container">
			<div className="row2">
				<div className="column2-side"></div>
				<div className="column2-main">
					<div class="column2-row"></div>
					<form>
						<h1 class="font-bold text-2xl ml-48 mt-8 text-white">Sign in to your account</h1>
						<br/>
						<h1 class="ml-36 text-white">Your email</h1>
						<input class="shadow appearance-none border rounded-md text-white ml-36 w-6/12 h-11 py-2 px-2 mx-20 my-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    	id="username" 
                    	type="text" 
                    	placeholder="email@company.com"/>
						<br/>
						<h1 class="ml-36 text-white">Password</h1>
						<input class="shadow appearance-none border rounded text-white ml-36 w-6/12 py-2 px-2 mx-20 my-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    	id="password" 
                		type="text" 
                    	placeholder="••••••••"/>
						<br/>
						<div className="row">
							<input class="ml-36"
                			id="promotions"
               				type="checkbox"/>
							<h1 class="ml-3 text-white">Remember me</h1>
							<a href="http://www.youtube.com" class="ml-16 text-white text-blue-800">Forgot Password?</a>
						</div>
						<br/>
						<button type="button" 
                		class="text-white bg-gray-800 w-6/12 ml-36 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    		Sign In
                		</button>
						<br/>
						<h1 class="ml-36 mt-2 mb-8 text-white">Don't have an account yet? <Link to="/signup" class="text-blue-800">Sign up</Link></h1>
					</form>
					<div class="column2-row"></div>
				</div>
				<div className="column2-side">Side</div>
			</div>
		</div>
	</div>
  )
}

export default SignIn