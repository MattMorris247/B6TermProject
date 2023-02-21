import React from 'react'
import '../cssfiles/OrderConfirmation.css';

const OrderConfirmation = () => {
  return (
	<div className="order-confirmation-container">
		<div className="order-confirmation-row">
			<div className="order-column-side"></div>
			<div className="order-column-main">
				<div className="order-confirmation-summary">
					<h1 class="font-bold text-2xl mb-6 text-white text-center">Order Confirmation</h1>
					<div className="order-confirmation-information">
						<h1 class="font-bold text-xl mb-3 text-white text-center">Hi[Insert Name] thank you for your ticket purchase!</h1>
						<h1 class="font-bold text-xl mb-2 text-white text-center">This page is confirmation of your booking enjoy the show!</h1>
					</div>
					<br/>
					<div className="order-confirmation-information">
						<h1 class="font-bold text-2xl mb-3 text-red-700 text-left">Purchase Summary</h1>
						<div className="purchase-summary">
							<div className="order-column-row">
								<h1>Tickets:</h1>
								<h1 class="ml-60">Ticket Price:</h1>
							</div>
							<div className="order-column-row">
								<h1 class="mr-3">Seats:</h1>
								<h1 class="ml-60">Date:</h1>
							</div>
							<div className="order-column-row">
								<h1>Time:</h1>
								<h1 class="ml-64">Total Price:</h1>
							</div>
							<div className="order-column-row">
								<h1 class="mr-2">Movie Title:</h1>
								<h1 class="ml-52">Reference Number:</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="order-column-side"></div>
		</div>
	</div>
  )
}

export default OrderConfirmation