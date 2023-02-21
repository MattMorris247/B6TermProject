import React from 'react'
import '../cssfiles/CheckOut.css';
import { Link } from 'react-router-dom';


const CheckOut = () => {


  return (

	<div className="checkout-container">
		<div className="checkout-row">
			<div className="checkout-column-side"></div>
			<div className="checkout-column-main">

				<div className="order-summary">
      				<h2 class="font-bold text-2xl mt-8 text-white">Order Summary</h2>
      				<div className="order-details">
					  <div className="order-detail">
          					<span className="detail-label">Ticket Quantity:</span>
        				</div>
        				<div className="order-detail">
          					<span className="detail-label">Ticket Price:</span>
        				</div>
        				<div className="order-detail">
          					<span className="detail-label">Order Total:</span>
        				</div>
						<div className="order-detail">
          					<span className="detail-label">Movie:</span>
        				</div>
						<div className="order-detail">
          					<span className="detail-label">Seats:</span>
        				</div>
      				</div>
    			</div>

				<div className="checkout-summary">
					<h1 class="font-bold text-xl text-white mb-6">Checkout Information</h1>
					<div className="checkout-information">
							<h1>Name</h1>
							<input class="shadow appearance-none border rounded text-white w-72 py-2 px-2 my-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           					id="name"
            				type="text"
            				placeholder="Name"
            				/>
							<h1>Email Address</h1>
							<input class="shadow appearance-none border rounded text-white w-72 py-2 px-2 my-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           					id="email_address"
            				type="text"
            				placeholder="Email Address"
            				/>
							<h1>Phone Number(Optional)</h1>
							<input class="shadow appearance-none border rounded text-white w-72 py-2 px-2 my-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           					id="phone_numer"
            				type="text"
            				placeholder="Phone Number"
            				/>
							<h1 class="font-bold text-lg mt-10 mb-4">Payment Information</h1>
							<input class="shadow appearance-none border rounded h-12 text-white w-9/12 py-2 px-2 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
							id="cardnumber" 
							type="text" 
							placeholder="Card Number"/>

							<input class="shadow appearance-none border rounded h-12 text-white w-3/12 py-2 px-2 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
							id="expiremonth" 
							type="text" 
							placeholder="Exp. Month"/>

							<input class="shadow appearance-none border rounded h-12 text-white w-3/12 py-2 px-2 -ml-2 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
							id="expireyear" 
							type="text" 
							placeholder="Exp. Year"/>

							<input class="shadow appearance-none border rounded h-12 text-white w-3/12 py-2 px-2 -ml-2 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
							id="cvv" 
							type="text" 
							placeholder="CVV"/>

							<br/>
							
							<input class="shadow appearance-none border rounded h-12 text-white w-6/12 py-2 px-2 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
							id="county" 
							type="text" 
							placeholder="Country"/>

							<input class="shadow appearance-none border rounded h-12 text-white w-3/12 py-2 px-2 -ml-2 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
							id="zipcode" 
							type="text" 
							placeholder="Zip/Postal Code"/>		

							<h1 class="font-bold text-lg mt-10 mb-4">Billing Address</h1>	

							<input class="shadow appearance-none border rounded text-white w-9/12 py-2 px-2 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
							id="address" 
							type="text" 
							placeholder="Street Address*"/>

							<input class="shadow appearance-none border rounded text-white w-3/12 py-2 px-2 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
							id="city" 
							type="text" 
							placeholder="City*"/>

							<input class="shadow appearance-none border rounded text-white w-3/12 py-2 px-2 -ml-2 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
							id="state" 
							type="text" 
							placeholder="State*"/>

							<input class="shadow appearance-none border rounded text-white w-3/12 py-2 px-2 -ml-2 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
							id="addresszip" 
							type="text" 
							placeholder="Zip/Postal Code*"/>				
					</div>
								<Link to="/"><button class="bg-blue-500 w-40 mt-6 mr-14 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
									Cancel Order
								</button></Link>

								<Link to="/orderconfirmation"><button class="bg-blue-500 w-40 mt-6 ml-96 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
									Confirm Order
								</button></Link>
				</div>
				

			</div>
			<div className="checkout-column-side"></div>
		</div>
	</div>
  )
}

export default CheckOut