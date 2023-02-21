import React, { useState } from "react";
import "./OrderSummary.css";
import { Link } from 'react-router-dom';


function OrderSummary() {
  const [ticketPrice] = useState(10);
  const [ticketQuantity, setTicketQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const quantity = parseInt(event.target.value);
    setTicketQuantity(quantity);
  };

  

  const orderTotal = ticketPrice * ticketQuantity;

  return (
    <div className="order-summary">
      <h2 className="font-bold text-2xl mt-8 text-white">Order Summary</h2>
      <div className="order-details">
      <span className="detail-label">Ticket Quantity:</span>
        <div className="quantity-input">
          <button onClick={() => setTicketQuantity(ticketQuantity - 1)} disabled={ticketQuantity <= 1}>-</button>
          <input type="number" min="0" value={ticketQuantity} onChange={handleQuantityChange}/>
          <button onClick={() => setTicketQuantity(ticketQuantity + 1)}>+</button>
        </div>
        <div className="order-detail">
          <span className="detail-label">Ticket Price:</span>
          <span className="detail-value">${ticketPrice}</span>
        </div>
        <div className="order-detail">
          <span className="detail-label">Order Total:</span>
          <span className="detail-value">${orderTotal}</span>
        </div>
        <Link to="/BookTickets" className="back-button">Back</Link>
        <button className="checkout-button">Check Out</button>
      </div>
    </div>
  )
  }

export default OrderSummary;