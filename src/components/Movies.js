import React from "react";
import { movies } from "../data";

function Movies() {
  return(
  <div>
    <h1>Movies Page</h1>
    {movies.map(({title, time, genres}) => <div key={title}>
      <h2>{title}</h2>
      <p>Duration: {time} minutes</p>
      <ul>
        {genres.map((genre) => <li key={genre}>{genre}</li>)}
      </ul>
      </div>)}
  </div>
  );
}

export default Movies;
