import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../store/moviesSlice';

const Sidebar = () => {
    const dispatch = useDispatch();

    // Handler for genre button click
    const handleGenreClick = (genre) => {
        dispatch(fetchMovies(genre));
    };

    return (
        <div className="sidebar">
            <button className="all-movies-btn" onClick={() => dispatch(fetchMovies('all'))}>
                All Movies
            </button>
            <br />
            <button className="genre-btn" onClick={() => handleGenreClick('Action')}>
                Action
            </button>
            <br />
            <button className="genre-btn" onClick={() => handleGenreClick('Comedy')}>
                Comedy
            </button>
            <br />
            <button className="genre-btn" onClick={() => handleGenreClick('Drama')}>
                Drama
            </button>
            <br />
        </div>
    );
};

export default Sidebar;
