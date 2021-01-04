import './App.css';
import SearchNavbar from './components/SearchNavbar/SearchNavbar'
// import MoviCard from './components/MovieCard/MovieCard';
import { useEffect, useState } from 'react';
import MovieData from './components/MovieData';
import MovieList from './components/MovieList/MovieList';
// import AddMovie from './components/Addmovie/AddMovie';

function App() {
  const [movieslist,setMoviesList]=useState(MovieData);
  const [searchInput , setSearchInput ]=useState("")
  const [searchRating , setSearchRating]=useState(0);
  const [newMovie , setNewMovie]=useState({});
const[firstRender,setfirstRender]=useState(true);
  useEffect(() => {
    !firstRender
     ?setMoviesList([...movieslist,newMovie])
     :console.log("remmber")
  },[newMovie]);
  
  // console.log(MovieData);
  return (
    <div className="App" >
      {/* <h2>Hwda Bargo hello in my movie app </h2> */}
      <SearchNavbar setSearchInput={setSearchInput} setSearchRating={setSearchRating}/>
      {/* <MoviCard/> */}
      <MovieList movieslist={movieslist} 
      searchInput={searchInput}
      searchRating={searchRating}/>
      setNewMovie={setNewMovie}
      setfirstRender={setfirstRender}
    </div>
  );
}

export default App;
