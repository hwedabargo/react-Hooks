import {React , useState} from "react";
import {Modal , Button ,Card , Form} from "react-bootstrap";
// import { propTypes } from "react-bootstrap/esm/Image";
import "./AddMovie.css"; 


function AddMovie (props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newMovie , setNewMovie]=useState({title:"",descrption:"",posterUrl:"",rate:0 ,trailerUrl:""})

    const handelChange = (e) =>{
      setNewMovie({ ...newMovie, [e.target.name]: e.target.value})
      
    }
    const handlesubmit= () =>{
     const {title,descrption,posterUrl,rate ,trailerUrl}=newMovie
     if(title&&descrption&&posterUrl&&rate &&trailerUrl){
         props.setNewMovie(newMovie)
       setNewMovie({title:"",descrption:"",posterUrl:"",rate:0 ,trailerUrl:""})
       props.setfirstRender(false)
      handleClose()
     }
     else 
       alert("There is an empty Field , plese check agine")
     
    }
    return (
    <>
        <Card style={{ width:'18rem' , boxshadow :"0 0 10px" , color:"green " , cursor:"pointer" }} onClick={handleShow}>
        <Card.Body className="CardBody">
            <img src="https://static.thenounproject.com/png/37404-200.png"  alt="plas-icon" />
        </Card.Body>
</Card>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a New Movie </Modal.Title>
          </Modal.Header>
          <Modal.Body className="InputArea">
          <Form.Control text="text" placeholder="enter Movie title ..." name="title" onChange={handelChange}/>
          <Form.Control as="textarea" placeholder="enter Movie descrption ..." name="descrption"  onChange={handelChange}/>
          <Form.Control text="text" placeholder="enter Movie posterUrl ..." name="posterUrl" onChange={handelChange}/>
          <Form.Control text="text" placeholder="enter Movie rate ..." name="rate" onChange={handelChange}/>
          <Form.Control text="text" placeholder="enter Movie trailerUrl ..." name="trailerUrl"onChange={handelChange} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handlesubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
  </>
    );
  }
  
  
  export default AddMovie;