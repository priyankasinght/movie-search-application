import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../store/moviesSlice';
import SearchBar from './SearchBar';
import Sidebar from './Sidebar';
import MovieList from './MovieList';

const HomePage = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.data); // Access movies data from the Redux store
  const status = useSelector((state) => state.movies.status); // Access the status of the movies fetching operation

  useEffect(() => {
    dispatch(fetchMovies('action')); // Fetch movies on component mount
  }, [dispatch]);

  const handleSearch = (movieGenre) => {
    dispatch(fetchMovies(movieGenre)); // Dispatch an action to fetch movies based on the selected genre
  };

  return (
    <div className='home-container'>
      <SearchBar onSearch={handleSearch} /> {/* Render the SearchBar component and pass the handleSearch function */}
      <div className='main-content'>
        <Sidebar onGenreSelect={handleSearch} /> {/* Render the Sidebar component and pass the handleSearch function */}
        {status === 'loading' && <div>Loading...</div>} {/* Show loading message if movies are being fetched */}
        {status === 'failed' && <div>Error fetching movies.</div>} {/* Show error message if movies fetching failed */}
        {status === 'succeeded' && <MovieList movies={movies} />} {/* Render the MovieList component with the fetched movies */}
      </div>
    </div>
  );
};

export default HomePage;
