import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate, useParams } from "react-router-dom";
import env from "../environment";
import Header from "./Header";

const Movies = () => {
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();
  const {id} =useParams()
  const loadMovie = async () => {
    let res = await axios.get(`${env.apiurl}/movie`);
    if (res.data.statusCode === 200) {
      setMovie(res.data.data);
    } else {
      alert(res.data.message);
    }
  };



  const handleDelete = async (id) => {
    let token = sessionStorage.getItem("token");
    if (token) {
      let res = await axios.delete(`${env.apiurl}/movie/delete-movie/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.data.statusCode === 200) {
        loadMovie();
      } else {
        alert(res.data.message);
      }
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    loadMovie();
  }, []);
  return (
    <>
      <Header />
      <div className="movie">
        <Container>
          <div className="fav-mov">
            <div>
              <h1>SELECT YOUR FAVOURITE MOVIE</h1>
            </div>
            <div>
              <Button variant="success" className="admin-btn" onClick={() => navigate("/addmovie")}>
                Add a new Movie
              </Button>
              <Button variant="primary" onClick={loadMovie}>
                Refresh
              </Button>
            </div>
          </div>

          <div className="movie-card">
            {movie.map((e, i) => {
              return (
                <Card style={{ width: "18rem" }} key={i}>
                  <Card.Img variant="top" src="./seats.jpg" />
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      MovieId {e.movieId}
                    </Card.Subtitle>
                    <Card.Title>
                      {" "}
                      <h2>{e.movieName}</h2>
                    </Card.Title>

                    <Card.Text>{e.movieText}</Card.Text>
                    <div className="movie-btn">
                      <Button
                        variant="primary"
                        onClick={() => navigate("/theatre/" + e._id)}
                       
                      >
                        Book
                      </Button>
                      <Button
                        variant="success"
                        onClick={() => navigate("/editmovie/" + e._id)}
                      >
                        Edit
                      </Button>

                      <Button
                        variant="danger"
                        onClick={() => handleDelete(e._id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Movies;
