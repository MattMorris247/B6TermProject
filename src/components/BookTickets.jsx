import { useState } from 'react';
import './BookTickets.css';
import { Link } from 'react-router-dom';

const BookTickets = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedShowtime, setSelectedShowtime] = useState('12:00 PM');
  const [selectedMovie, setSelectedMovie] = useState('Blank');
  const [numChildren, setNumChildren] = useState(0);
  const [numAdults, setNumAdults] = useState(0);
  const [numSeniors, setNumSeniors] = useState(0);

  const handleShowtimeChange = (event) => {
    setSelectedShowtime(event.target.value);
  };

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  function handleNumChildrenChange(event) {
    setNumChildren(event.target.value);
    const newValue = event.target.value;
    if (newValue < 0) {
      setNumChildren(0);
    } else {
      setNumChildren(newValue);
    }
  }

  function handleNumAdultsChange(event) {
    setNumAdults(event.target.value);
    const newValue = event.target.value;
    if (newValue < 0) {
      setNumAdults(0);
    } else {
      setNumAdults(newValue);
    }
  }

  function handleNumSeniorsChange(event) {
    setNumSeniors(event.target.value);
    const newValue = event.target.value;
    if (newValue < 0) {
      setNumSeniors(0);
    } else {
      setNumSeniors(newValue);
    }
    
  }

  const handleMovieChange = (event) => {
    setSelectedMovie(event.target.value);
  };

  const renderSeat = (seat) => {
    const isSelected = selectedSeats.includes(seat);
    const isAvailable = true; // replace with actual availability check
    const seatClass = `seat ${isSelected ? 'selected' : ''} ${
      isAvailable ? 'available' : 'unavailable'
    }`;
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
        <div className="seat-wrapper">{seats.map((seat) => renderSeat(`${row}${seat}`))}</div>
      </div>
    );
  };

  return (
    <div className="booktickets">
      <div class="bg-#1a1a1d">
        <label htmlFor="movie" className="text-white">Select a movie:</label>
        <select id="movie" value={selectedMovie} onChange={handleMovieChange} class="bg-gray-900 text-white">
          <option value="Select Movie">Select Movie</option>
          <option value="Top Gun: Maverick">Top Gun: Maverick</option>
          <option value="Ant-Man and The Wasp Quantumania">Ant-Man and The Wasp Quantumania</option>
          <option value="Avatar: The Way of Water">Avatar: The Way of Water</option>
          <option value="Puss in Boots: The Last Wish">Puss in Boots: The Last Wish</option>
          <option value="Everything Everywhere All At Once">Everything Everywhere All At Once</option>
          <option value="Titanic 25 Year Anniversary">Titanic 25 Year Anniversary</option>
          <option value="Marlowe">Marlowe</option>
          <option value="A Man Called Otto">A Man Called Otto</option>
        </select>
      </div>
      <div className="bg-#1a1a1d">
        <label htmlFor="showtime" className="text-white">Select a showtime:</label>
        <select id="showtime" value={selectedShowtime} onChange={handleShowtimeChange} class="bg-gray-900 text-white">
          <option value="12:00 PM">12:00 PM</option>
          <option value="3:00 PM">3:00 PM</option>
          <option value="6:00 PM">6:00 PM</option>
          <option value="9:00 PM">9:00 PM</option>
        </select>
      </div>
      <div>
      <label>
        Children:
        <input class="bg-#1a1a1d" type="number" value={numChildren} onChange={handleNumChildrenChange} />
      </label>
      <br />
      <label>
        Adults: 
        <input class="bg-#1a1a1d" type="number" value={numAdults} onChange={handleNumAdultsChange} />
      </label>
      <br />
      <label>
        Seniors: 
        <input class="bg-#1a1a1d" type="number" value={numSeniors} onChange={handleNumSeniorsChange} />
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
        <Link to="/ordersummary"><button className="select-seats-btn" disabled={selectedSeats.length === 0}>Select Seats</button></Link>
      </div>
    </div>
  );
};

export default BookTickets;