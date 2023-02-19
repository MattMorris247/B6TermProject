import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import NavBar from './NavBar'
import _ from 'lodash'
import Footer from './Footer.jsx';
import './Home.css';

const nowShowingData = [
  { id: 1, title: 'Top Gun: Maverick',  posterUrl: 'https://regalcdn.azureedge.net/REG/BP23TopGunMaverick/HO00013839/TV_SmallPosterImage/20230124-113127845.jpg', trailerUrl: 'https://www.youtube.com/watch?v=qSqVVswa420', bookingUrl:true}, 
  { id: 2, title: 'Ant-Man and The Wasp Quantumania',  posterUrl: 'https://regalcdn.azureedge.net/REG/AntManandTheWaspQuantumania/HO00011164/TV_SmallPosterImage/20230110-082703606.jpg', trailerUrl: 'https://www.youtube.com/watch?v=ZlNFpri-Y40', bookUrl:true},
  { id: 3, title: 'Avatar: The Way of Water',  posterUrl: 'https://regalcdn.azureedge.net/REG/BP23AvatarTheWayofWater/HO00013837/TV_SmallPosterImage/20230124-110036249.jpg', trailerUrl: 'https://www.youtube.com/watch?v=d9MyW72ELq0', bookUrl:true },
  { id: 4, title: 'Puss in Boots: The Last Wish',  posterUrl: 'https://regalcdn.azureedge.net/REG/PussinBootsTheLastWish/HO00011016/TV_SmallPosterImage/20220615-134344011.jpg', trailerUrl: "https://www.youtube.com/watch?v=Y5zqweZAEKI", bookUrl:true},
  { id: 5, title: 'Everything Everywhere All At Once',  posterUrl: 'https://regalcdn.azureedge.net/REG/BP23EverythingEverywhereAllatOnce/HO00013833/TV_SmallPosterImage/20230124-111609324.jpg', trailerUrl: 'https://www.youtube.com/watch?v=wxN1T1uxQ2g', bookUrl:true },
  { id: 6, title: 'Titanic 25 Year Anniversary',  posterUrl: 'https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1673365874/amc-cdn/production/2/movies/67500/67480/PosterDynamic/147724.jpg', trailerUrl: 'https://www.youtube.com/watch?v=I7c1etV7D7g', bookUrl:true },
  { id: 7, title: 'Marlowe', posterUrl: 'https://regalcdn.azureedge.net/REG/Marlowe/HO00013724/TV_SmallPosterImage/20230120-093009393.jpg', trailerUrl: 'https://www.youtube.com/watch?v=jaZnsc5XfrA', bookUrl:true},
  { id: 8, title: 'A Man Called Otto',  posterUrl: 'https://regalcdn.azureedge.net/REG/ManCalledOttoA/HO00012761/TV_SmallPosterImage/20221020-092601950.jpg', trailerUrl: 'https://www.youtube.com/watch?v=eFYUX9l-m5I', bookUrl:true},
];

const comingSoonData = [
  { id: 9, title: 'John Wick: Chapter 4',  posterUrl: 'https://regalcdn.azureedge.net/REG/JohnWickChapter4/HO00010988/TV_SmallPosterImage/20221205-083052138.jpg', trailerUrl: 'https://www.youtube.com/watch?v=yjRHZEUamCc'},
  { id: 10, title: 'Creed 3',  posterUrl: 'https://regalcdn.azureedge.net/REG/CreedIII/HO00013425/TV_SmallPosterImage/20230130-124739509.jpg', trailerUrl: 'https://www.youtube.com/watch?v=xTaIZo8OJYE'},
  { id: 11, title: 'Transformers: Rise of The Beasts',  posterUrl: 'https://regalcdn.azureedge.net/REG/TransformersRiseoftheBeasts/HO00011307/TV_SmallPosterImage/20221201-123750022.jpg', trailerUrl: 'https://www.youtube.com/watch?v=WWWDskI46Js'},
  { id: 12, title: 'Fast X',  posterUrl: 'https://regalcdn.azureedge.net/REG/FastX/HO00012644/TV_SmallPosterImage/20230131-140119710.jpg', trailerUrl: 'https://www.youtube.com/watch?v=J5cPX-CJZFU' },
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const renderMovieCards = (movies, wrapperClass) => {
    // Filter movies based on search query
    const filteredMovies = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    // Divide filteredMovies array into sub-arrays of 4 elements each
    const movieChunks = _.chunk(filteredMovies, 4);
  
    // Map over each sub-array to render each row of movies
    return movieChunks.map((movieChunk, index) => (
      <div key={index} className={`movie-row ${wrapperClass}`}>
        {movieChunk.map(movie => (
          <div key={movie.id} className="movie-card">
            <img src={movie.posterUrl} alt="Movie Poster" class="w-200 h-300" />
            <h2 className="h2-home">{movie.title}</h2>
            <div className='button-wrapper'>
              {movie.bookUrl && <button class="bg-white" onClick={() => window.open(movie.bookUrl)}>Book Now</button>}
              <button class="bg-white"  onClick={() => window.open(movie.trailerUrl)}>Trailer</button>
            </div>
          </div>
        ))}
      </div>
    ));
  };
  
return (
    <div className="home">
      <h1 class="font-bold text-6xl mt-8 text-white" >MoviesNow</h1>
      <input
        type="text"
        placeholder="Search Movies"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        style={{ textAlign: 'center', color: 'white', marginTop: '30px' }}
      />
      <h2 class="font-bold text-4xl mt-8 mb-4 text-white" >Now Showing</h2>
      <div className="movie-wrapper">
        {renderMovieCards(nowShowingData, 'now-showing')}
      </div>
      <h2 class="font-bold text-4xl mt-8 mb-4 text-white">Coming Soon</h2>
      <div className="movie-wrapper">
        {renderMovieCards(comingSoonData, 'coming-soon')}
      </div>
      <Footer />
    </div>
  )
}

export default Home;