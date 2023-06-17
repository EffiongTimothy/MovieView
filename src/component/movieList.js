import React from "react";

const MovieList = (props) => {
    const Favourite = props.favourite
    return(
        <>
        {props.movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m-4">
            <img src={movie.Poster} alt="poster"></img>
             <div
             onClick={() =>props.handleFavouritesClick(movie) } className="overlay d-flex align-items-center justify-content-center">  
            <Favourite/>
            </div> 
        </div>
        ))}
        </>
    )
}
export default MovieList;