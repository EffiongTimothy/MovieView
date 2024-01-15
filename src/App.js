import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./component/movieList";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieListHeader from "./component/movieListHeader";
import SearchBar from "./component/searchField";
import AddFavourite from "./component/AddFavourite";
import RemoveFavourite from "./component/RemoveFavourite";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [favourite, setFavourite] = useState([]);

  const getMovieRequest = async (search) => {
    const url = `http://www.omdbapi.com/?s=${search}&apikey=678b9f83`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };
  useEffect(() => {
    getMovieRequest(search);
  }, [search]);

  useEffect(() => {
    const favouriteMovies = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );
    setFavourite(favouriteMovies);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  const addFavourite = (movie) => {
    const initialFavourite = favourite || [];
    const newFavouriteList = initialFavourite.concat(movie);
    setFavourite(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
};

  const removeFavourite = (movie) => {
    const newFavouriteList = favourite.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourite(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <div className="container-fluid movie-app">
      <div className="row align-items-center  sticky-top">
        <MovieListHeader heading="Movies" />
        <SearchBar search={search} setSearch={setSearch} />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="d-flex mb-50 ">
        <MovieList
          movies={movies}
          handleFavouritesClick={addFavourite}
          favourite={AddFavourite}
        />
      </div>
      <div className="d-flex align-items-center mt-3 fixed">
        <MovieListHeader heading="Favourites" />
      </div>
      <div className="d-flex">
        {" "}
        <MovieList
          movies={favourite}
          handleFavouritesClick={removeFavourite}
          favourite={RemoveFavourite}
        />
      </div>
    </div>
  );
};

export default App;

// import React, { useEffect, useState } from 'react';

// const Profile = () => {
//   const [profileData, setProfileData] = useState(null);

//   useEffect(() => {
//     fetchProfileData();
//   }, []);

//   const fetchProfileData = async () => {
//     try {
//       const response = await fetch('http://jsonplaceholder.typicode.com/comments');
//       const data = await response.json();
//       console.log(data)
//       setProfileData(data.name);
//     } catch (error) {
//       console.log('Error:', error);
//     }
//   };

//   return (
//     <div style={{backgroundColor:"blue"}}>
//       {profileData ? (
//         <div>
//           <h2>Name: {profileData.name}</h2>
//           <p>Age: {profileData.email}</p>
//           <p>Gender: {profileData.body}</p>
//         </div>
//       ) : (
//         <p>Loading profile data...</p>
//       )}
//     </div>
//   );
// };

// export default Profile;
