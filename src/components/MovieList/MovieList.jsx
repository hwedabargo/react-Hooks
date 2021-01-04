import React from "react"
import AddMovie from "../Addmovie/AddMovie"
import MovieCard from "../MovieCard/MovieCard"
import "./MovieList.css"

function MovieList(props) {
   const { movieslist  , searchInput ,searchRating , setNewMovie , setfirstRender} = props
   console.log(movieslist);
   
    return (
     <div className="MovieList">
       
        {movieslist.map((movie, index) =>
         movie.rate >= searchRating && movie.title.toUpperCase().startsWith(searchInput.toUpperCase())?
          <MovieCard movie={movie} key={index}/>
        : <></>
        )}
         <AddMovie setNewMovie={setNewMovie} setfirstRender={setfirstRender}/>
     </div>
    )
  }
  
  export default MovieList;