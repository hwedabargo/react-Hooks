import React from "react"
import MovieCard from "../MovieCard/MovieCard"
import "./MovieList.css"

function MovieList(props) {
   const { movieslist  , searchInput ,searchrating } = props
   
    return (
     <div className="MovieList">
        {movieslist.map((movie, index) => movie.rate >= searchrating && movie.title.toappercase().startswith(searchInput.toappercase())?
          <MovieCard movie={movie} key={index}/>
        :<></>
        )}
     </div>
    )
  }
  
  export default MovieList;