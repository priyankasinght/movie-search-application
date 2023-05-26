import React, { useState } from 'react';
import '../index.css';

const SearchBar = ({ onSearch }) => {
    const [searchInput, setSearchInput] = useState('');

    // Handler for input change
    const handleChange = (event) => {
        setSearchInput(event.target.value);
    };

    // Handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchInput);
    };

    return (
        <div className='search-bar'>
            <form onSubmit={handleSubmit}>
                <input
                    className='search-input'
                    type='text'
                    placeholder='Search movies'
                    value={searchInput}
                    onChange={handleChange}
                />
            </form>
            <a href='Home'>Movies</a>
            <a href='Home'>TV Shows</a>
            <a href='Home'>Watch List</a>
        </div>
    );
};

export default SearchBar;