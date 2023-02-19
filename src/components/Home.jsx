import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import NavBar from './NavBar'
import _ from 'lodash'
import Footer from './Footer.jsx';

import './Home.css'; // import CSS file for styling

const nowShowingData = [
  { id: 1, title: 'Top Gun: Maverick',  posterUrl: 'https://regalcdn.azureedge.net/REG/BP23TopGunMaverick/HO00013839/TV_SmallPosterImage/20230124-113127845.jpg', trailerUrl: 'https://www.youtube.com/watch?v=qSqVVswa420' },
  { id: 2, title: 'Ant-Man and The Wasp Quantumania',  posterUrl: 'https://regalcdn.azureedge.net/REG/AntManandTheWaspQuantumania/HO00011164/TV_SmallPosterImage/20230110-082703606.jpg' },
  { id: 3, title: 'Avatar: The Way of Water',  posterUrl: 'https://regalcdn.azureedge.net/REG/BP23AvatarTheWayofWater/HO00013837/TV_SmallPosterImage/20230124-110036249.jpg' },
  { id: 4, title: 'Puss in Boots: The Last Wish',  posterUrl: 'https://regalcdn.azureedge.net/REG/PussinBootsTheLastWish/HO00011016/TV_SmallPosterImage/20220615-134344011.jpg' },
  { id: 5, title: 'Top Gun: Maverick',  posterUrl: 'https://regalcdn.azureedge.net/REG/BP23TopGunMaverick/HO00013839/TV_SmallPosterImage/20230124-113127845.jpg' },
  { id: 6, title: 'Ant-Man and The Wasp Quantumania',  posterUrl: 'https://regalcdn.azureedge.net/REG/AntManandTheWaspQuantumania/HO00011164/TV_SmallPosterImage/20230110-082703606.jpg' },
  { id: 7, title: 'Avatar: The Way of Water', posterUrl: 'https://regalcdn.azureedge.net/REG/BP23AvatarTheWayofWater/HO00013837/TV_SmallPosterImage/20230124-110036249.jpg' },
  { id: 8, title: 'Puss in Boots: The Last Wish',  posterUrl: 'https://regalcdn.azureedge.net/REG/PussinBootsTheLastWish/HO00011016/TV_SmallPosterImage/20220615-134344011.jpg'},
];

const comingSoonData = [
  { id: 9, title: 'Guardians of the Galaxy Vol. 3',  posterUrl: 'https://via.placeholder.com/150x200' },
  { id: 10, title: 'Creed 3',  posterUrl: 'https://via.placeholder.com/150x200' },
  { id: 11, title: 'Transformers: Rise of The Beasts',  posterUrl: 'https://via.placeholder.com/150x200' },
  { id: 12, title: 'Fast X',  posterUrl: 'https://via.placeholder.com/150x200' },
  { id: 13, title: 'Guardians of the Galaxy Vol. 3',  posterUrl: 'https://via.placeholder.com/150x200' },
  { id: 14, title: 'Creed 3',  posterUrl: 'https://via.placeholder.com/150x200' },
  { id: 15, title: 'Transformers: Rise of The Beasts',  posterUrl: 'https://via.placeholder.com/150x200' },
  { id: 16, title: 'Fast X',  posterUrl: 'https://via.placeholder.com/150x200' },

];

const Home = () => {
  const renderMovieCards = (movies, wrapperClass) => {
    // Divide movies array into sub-arrays of 4 elements each
    const movieChunks = _.chunk(movies, 4);
  
    // Map over each sub-array to render each row of movies
    return movieChunks.map((movieChunk, index) => (
      <div key={index} className={`movie-row ${wrapperClass}`}>
        {movieChunk.map(movie => (
          <div key={movie.id} className="movie-card">
            <img src={movie.posterUrl} alt="Movie Poster" />
            <h2 className="h2-home">{movie.title}</h2>
            <div className='button-wrapper'>
              <button class="bg-white" className="book-now-button">Book Now</button>
              <button class="bg-white" className="trailer-button" onClick={() => window.open(movie.trailerUrl)}>Trailer</button>
            </div>
          </div>
        ))}
      </div>
    ));
  };
  
  return (
    <div className="home">
      <h1 class="font-bold text-2xl ml-48 mt-8 text-white" className="h1-home">MoviesNow</h1>
      <h2 class="font-bold text-2xl ml-48 mt-8 text-white" className="h2-home">Now Showing</h2>
      <div className="movie-wrapper">
        {renderMovieCards(nowShowingData, 'now-showing')}
      </div>
      <h2 class="font-bold text-2xl ml-48 mt-8 text-white" className="h2-home">Coming Soon</h2>
      <div className="movie-wrapper">
        {renderMovieCards(comingSoonData, 'coming-soon')}
      </div>
      <Footer />
    </div>
  )
}

export default Home;