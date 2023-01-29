import axios from "axios";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import env from "../environment";

const AddMovie = () => {
  const [movie, setMovie] = useState({
    movieId: "",
    movieName: "",
    movieText:""
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = async() => {
    let token = sessionStorage.getItem("token");
    if(token){
      let res = await axios.post(`${env.apiurl}/movie/create-movie`,movie,{
        headers: { Authorization: `Bearer ${token}` }
      })
      if (res.data.statusCode === 200) {
        alert("Movie addedd successfully")
            navigate("/movies");
       
      } else {
        alert(res.data.message);
        navigate("/movies")
    }

    }
    else{
      navigate("/login")
    }
     
}
  return (
    <>
     <div className="add-movie">
    <Container>
     

     
      <h1>Enter new movie</h1>
      <div>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>MovieId</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter movieId"
              name="movieId"
              value={movie.movieId}
              onChange={handleChange} 
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Movie Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter MovieName"
              name="movieName"
              value={movie.movieName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Movie Details</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Movie details"
              name="movieText"
              value={movie.movieText}
              onChange={handleChange}
            />
          </Form.Group>

          <Button
            variant="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Form>
        {message ? <div>{message}</div> : <></>}
      </div>
      </Container>
      </div>
    </>
  );
};

export default AddMovie;
