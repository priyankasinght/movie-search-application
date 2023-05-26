import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './MovieDetail.css'

const MovieDetail = () => {
  const { id } = useParams(); // Get the movie ID from URL parameters
  const [movieData, setMovieData] = useState({ // Change 'data' to 'movieData' for clarity
    id: 0,
    title: "",
    overview: "",
    poster_path: "",
    vote_average: 0,
    release_date: "",
    runtime: 0,
    genres: [],
  });

  const API_KEY = '475aef2ec41986e38a57bff00b6c53d0'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
        const movie = await response.json();
        setMovieData(movie); // Update the movie data state
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className='movieDetailCard'>
      <div className='leftMoviedetail'>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
          alt={movieData.title}
          className="poster"
        />
      </div>
      <div className="rightMoviedetail">
        <h1 className="title">{movieData.title}</h1>
        <p className="rating">{movieData.vote_average}⭐</p>
        <p className="genres">{movieData.genres.map(genre => genre.name).join(", ")}</p>
        <p className="release-date">{movieData.release_date} | {Math.floor(movieData.runtime / 60)}Hrs {movieData.runtime % 60}Mins | {Math.floor(movieData.vote_average)}+</p>
        <p className="overview">{movieData.overview}</p>
        <h3 className="relatedMoviesTitle">Related Movies</h3>
      </div>
    </div>
  )
}

export default MovieDetail;
