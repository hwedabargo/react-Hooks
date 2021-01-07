import React from "react"
import {Card , Button} from "react-bootstrap"
import "./MovieCard.css"
import {Link} from "react-router-dom"

function MovieCard({movie}) {
    return (
        <Link to={`/movies/${movie.id}`} style={{textDecoration:"none"}}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie.posterUrl} className="movieImg" />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
         {movie.descrption}
          </Card.Text>
          <span className="rateStars">{("⭐").repeat(movie.rate)}</span>
        </Card.Body>
        <Card.Footer className="cardfooter">
        <Button variant="primary">Trailer</Button>
        </Card.Footer>
      </Card>
      </Link>
    )
  }
  
  export default MovieCard;