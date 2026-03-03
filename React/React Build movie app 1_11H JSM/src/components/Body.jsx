import { useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from "../apiZone/api";

import MovieCard from "./MovieCard";

const Body = ({ query, searchState }) => {
  const [movies, setMovies] = useState([]);

  const loadPopularMovies = async () => {
    try{
        const moviesData = await getPopularMovies();
        console.log(moviesData);
        setMovies(moviesData);
    } catch(err){
        console.log(err);
    }
  }
  
  const loadSearchMovies = async (query) => {
    try{
      const moviesData = await searchMovies(query);
      setMovies(moviesData);
    } catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    loadPopularMovies();
  }, []);

  useEffect(() => {
    if(searchState){
      loadSearchMovies(query);
    } else if(query === "") {
      loadPopularMovies();
    }
  }, [searchState]);

  return (
    <div className="bg-gray-400 flex flex-wrap justify-center gap-10 py-10 px-10">
        {movies.map((movie) => (
            <MovieCard 
                key={movie.id} 
                title={movie.title} 
                url={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                releaseDate={movie.release_date}
            />
        ))}
    </div>
  )
}

export default Body