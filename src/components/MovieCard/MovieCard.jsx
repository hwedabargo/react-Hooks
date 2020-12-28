import React from "react"
import {Card , Button} from "react-bootstrap"
import "./MovieCard.css"

function MovieCard({movie}) {
    return (
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
    )
  }
  
  export default MovieCard;