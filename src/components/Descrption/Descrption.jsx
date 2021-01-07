import { Button }  from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import "./Descrption.css"; 
function Descrption({MovieData}){
    console.log(MovieData)
    // const MovieData=MovieList.find(item=>item.id==match.params.id)
    return(

       <div id="descrption">
       <iframe title="movietrailer" width={853} height={460} src={MovieData.trailerUrl} frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
       <h4 className="desctext">{MovieData.descrption}</h4>
       <Link to="/">
        <Button variant="light" style={{border:"2px " , marginBottom:"50%"}}>Go Back</Button>
       </Link>
      </div>
    // <h1>hi</h1>
     )
  }
export default Descrption;