import { useState } from 'react';

const MovieDetails = ({ movie }) => {
  const [showTime, setShowTime] = useState('');
  const [seats, setSeats] = useState('');
  const [age, setAge] = useState('');
  const [errors, setErrors] = useState([]);

  const handleShowTimeChange = (event) => {
    setShowTime(event.target.value);
  };

  const handleSeatsChange = (event) => {
    setSeats(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = [];

    if (!showTime) {
      newErrors.push('Please select a show time.');
    }

    if (!seats) {
      newErrors.push('Please select the number of seats.');
    }

    if (!age) {
      newErrors.push('Please enter your age.');
    }

    setErrors(newErrors);

    if (newErrors.length === 0) {
      // Handle the successful submission here
    }
  };

  return (
    <div className="movie-details">
      <img src={movie.posterUrl} alt="Movie Poster" />
      <h2>{movie.title}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="showTime">Select Show Time:</label>
          <select id="showTime" value={showTime} onChange={handleShowTimeChange}>
            <option value="">-- Select a show time --</option>
            <option value="1pm">1pm</option>
            <option value="4pm">4pm</option>
            <option value="7pm">7pm</option>
            <option value="10pm">10pm</option>
          </select>
        </div>
        <div>
          <label htmlFor="seats">Select Seats:</label>
          <select id="seats" value={seats} onChange={handleSeatsChange}>
            <option value="">-- Select the number of seats --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div>
          <label htmlFor="age">Enter Age:</label>
          <input type="text" id="age" value={age} onChange={handleAgeChange} />
        </div>
        {errors.length > 0 && (
          <ul className="errors">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}
        <button type="submit">Buy Tickets</button>
      </form>
    </div>
  );
};

export default MovieDetails