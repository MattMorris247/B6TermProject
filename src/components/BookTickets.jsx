import { useState } from 'react';
import './BookTickets.css';

const BookTickets = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedShowtime, setSelectedShowtime] = useState('12:00 PM');
  const [numChildren, setNumChildren] = useState(0);
  const [numAdults, setNumAdults] = useState(0);
  const [numSeniors, setNumSeniors] = useState(0);

  const handleShowtimeChange = (event) => {
    setSelectedShowtime(event.target.value);
  };

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  function handleNumChildrenChange(event) {
    setNumChildren(event.target.value);
  }

  function handleNumAdultsChange(event) {
    setNumAdults(event.target.value);
  }

  function handleNumSeniorsChange(event) {
    setNumSeniors(event.target.value);
  }

  const renderSeat = (seat) => {
    const isSelected = selectedSeats.includes(seat);
    const isAvailable = true; // replace with actual availability check
    const seatClass = `seat ${isSelected ? 'selected' : ''} ${isAvailable ? 'available' : 'unavailable'}`;
    return (
      <div key={seat} className={seatClass} onClick={() => handleSeatClick(seat)}>
        {seat}
      </div>
    );
  };

  const renderSeatRow = (row) => {
    const seats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
      <div key={row} className="seat-row">
        <div className="row-label">{row}</div>
        <div className="seat-wrapper">
          {seats.map(seat => renderSeat(`${row}${seat}`))}
        </div>
      </div>
    );
  };

  return (
    <div className="book-tickets">
      <div className="showtime-dropdown">
        <label htmlFor="showtime">Select a showtime:</label>
        <select id="showtime" value={selectedShowtime} onChange={handleShowtimeChange}>
          <option value="12:00 PM">12:00 PM</option>
          <option value="3:00 PM">3:00 PM</option>
          <option value="6:00 PM">6:00 PM</option>
          <option value="9:00 PM">9:00 PM</option>
        </select>
      </div>
      <div>
      <label>
        Children:
        <input class="bg-white" type="number" value={numChildren} onChange={handleNumChildrenChange} />
      </label>
      <br />
      <label>
        Adults: 
        <input class="bg-white" type="number" value={numAdults} onChange={handleNumAdultsChange} />
      </label>
      <br />
      <label>
        Seniors: 
        <input class="bg-white" type="number" value={numSeniors} onChange={handleNumSeniorsChange} />
      </label>
    </div>
      <div className="screen">Screen</div>
      <div className="seating-area">
        <div className="seats">
          {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].map(row => renderSeatRow(row))}
        </div>
        <div className="seat-info">
          <div className="seat-legend">
            <div className="legend-item available"></div>
            <div className="legend-label">Available</div>
            <div className="legend-item unavailable"></div>
            <div className="legend-label">Unavailable</div>
            <div className="legend-item selected"></div>
            <div className="legend-label">Selected</div>
          </div>
          <div className="selected-seats">
            <div className="selected-label">Selected Seats:</div>
            {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None'}
          </div>
        </div>
      </div>
      <div className="button-wrapper">
        <button className="select-seats-btn" disabled={selectedSeats.length === 0}>Select Seats</button>
      </div>
    </div>
  );
};

export default BookTickets;