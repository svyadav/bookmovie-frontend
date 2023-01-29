import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import env from "../environment";

const EditMovie = () => {
  const [movie, setMovie] = useState({
    movieId: "",
    movieName: "",
    movieText: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit =async() => {
    let token = sessionStorage.getItem("token");
    if (token){
      await fetch(`${env.apiurl}/movie/edit-movie/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(movie),
      })
        .then((data) => data.json())
        .then((response) =>{
          if(response.statusCode===200){
            navigate("/movies")
          }
          else{
            alert(response.message)
            navigate("/movies")
          }
        })

    }
    else{
      navigate("/login")
    }

 
}

  useEffect(() => {
    let res = axios
      .get(`${env.apiurl}/movie/${id}`)
      .then((response) => setMovie(response.data.data));
    console.log(res);
  }, [id]);

  return (
    <>
      <div className="login-wrapper">
        <div className="login">
          <h1>Edit Movie</h1>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>MovieId</Form.Label>
              <Form.Control
                type="text"
                name="movieId"
                value={movie.movieId}
                placeholder="Enter movieId"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>MovieName</Form.Label>
              <Form.Control
                type="text"
                name="movieName"
                value={movie.movieName}
                placeholder="Enter movieName"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Movie Details</Form.Label>
              <Form.Control
                type="text"
                name="movieText"
                value={movie.movieText}
                placeholder="Enter Movie details"
                onChange={handleChange}
              />
            </Form.Group>

            <div className="button-wrapper">
              <Button
                className="btn-login"
                variant="success"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};
export default EditMovie;
