import React, { useState } from "react";
import MovieRow from "../movieRow";
import { movieData, seriesData } from "../movieRow/movieData";

const HomePage = () => {
    const [watchlist, setWatchlist] = useState([]);

    const addToWatchlist = (movie) => {
        setWatchlist((prevWatchlist) => {
          if (!prevWatchlist.some((item) => item.id === movie.id)) {
            return [...prevWatchlist, movie];
          }
          return prevWatchlist;
        });
      };

    const removeFromWatchlist = (movieId) => {
        setWatchlist((prevWatchlist) =>
          prevWatchlist.filter((item) => item.id !== movieId)
        );
      };

    return (
        <div>
            {watchlist.length > 0 && (
                <MovieRow title={"Watchlist"} content={watchlist} removeFromWatchlist={removeFromWatchlist} isWatchlist/>
            )}
            <MovieRow title={"Movies List"} content={movieData} addToWatchlist={addToWatchlist} watchlist={watchlist} />
            <MovieRow title={"Series List"} content={seriesData} addToWatchlist={addToWatchlist} watchlist={watchlist} />
        </div>
    )
}

export default HomePage;