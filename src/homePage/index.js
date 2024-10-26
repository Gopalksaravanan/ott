import React from "react";
import MovieRow from "../movieRow";
import { movieData,seriesData } from "../movieRow/movieData";

const HomePage = ()=>{

    return(
        <div>
            <MovieRow title={"Movies List"} content={movieData} /> 
            <MovieRow title={"Series List"}  content={seriesData} />
        </div>
    )
}

export default HomePage;