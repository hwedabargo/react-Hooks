import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchNavbar from './components/SearchNavbar/SearchNavbar'
// import MoviCard from './components/MovieCard/MovieCard';
import { useState } from 'react';
import MovieData from './components/MovieData';
import MovieList from './components/MovieList/MovieList';

function App() {
  const [movieslist]=useState(MovieData);
  const [searchInput , setSearchInput ]=useState("")
  const [searchrating,setSearchRating]=useState(0);

  // console.log(MovieData);
  return (
    <div className="App" >
      {/* <h2>Hwda Bargo hello in my movie app </h2> */}
      <SearchNavbar searchInput={searchInput} searchrating={setSearchRating}/>
      {/* <MoviCard/> */}
      <MovieList movieslist={movieslist} 
      searchInput={setSearchInput}
       searchrating={setSearchRating}/>
    </div>
  );
}

export default App;
