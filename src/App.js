import './App.css';
import SearchNavbar from './components/SearchNavbar/SearchNavbar'
// import MoviCard from './components/MovieCard/MovieCard';
import { useEffect, useState } from 'react';
import MovieData from './components/MovieData';
import MovieList from './components/MovieList/MovieList';
import { Route } from 'react-router-dom';
import { Fragment } from 'react';
import Descrption from './components/Descrption/Descrption';
import  {Switch} from 'react-router-dom';
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
     // eslint-disable-next-line‏
  },[newMovie]);
  
  // console.log(MovieData);
  return (
    <div className="App" >
      <Switch>
    <Route exact path="/" render={()=>(
     <Fragment>
      <SearchNavbar setSearchInput={setSearchInput} setSearchRating={setSearchRating}/>
    
      <MovieList movieslist={movieslist} 
      searchInput={searchInput}
      searchRating={searchRating}
      setNewMovie={setNewMovie}
      setfirstRender={setfirstRender}
     />

      </Fragment>
      )}/>
      <Route path="/movies/:id" render={({match}) => (
      <Descrption MovieData={movieslist.find(item=>item.id===Number(match.params.id))}/> 
      )} 
        />
      
      </Switch>
      {/* <Descrption/> */}
    </div>
        
          );
}

export default App;
