import React from "react"
import { Navbar , Nav  , FormControl , Form } from "react-bootstrap"
import "./SearchNavbar.css"
import ReactStars from 'react-stars'
 function  SearchNavbar(props) {
  

   const handelChange = (e) =>{
    props.setSearchInput(e.target.value)
   }
   const ratingChanged = (newRating) => {
    props.setSearchRating(newRating)
  }
     return(
         <div>
    <Navbar bg="light" variant="light" className="SearchNavbar">
    <Navbar.Brand href="#home">Movie App</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline className="seachArea">
      <FormControl type="text" placeholder="Search" className="mr-sm-2 searchInput" onChange = {handelChange} />
      <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            color2={'#ffd700'} />
    </Form>
 
  </Navbar>
         </div>
     )
 }
  export default SearchNavbar;
