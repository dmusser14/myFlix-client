import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export const MovieView = ({ movie, onBackClick }) => {
  return (
    <Row className="my-5 justify-content-center">
      <Col md={5}>
        <img className="w-100" src={movie.image} alt="movie cover"/>
      </Col>
      <Col md="6">
        <div className="my-1">
          <span className="h1">{movie.title}</span>
        </div>
        <div className="my-1">
          <span className="h5">Description: </span>
          <span>{movie.description}</span>
        </div>
        <div className="my-1">
          <span className="h5">Director: </span>
          <span>{movie.director.name}</span>
        </div>
        <div className="my-1">
          <span className="h5">Genre: </span>
          <span>{movie.genre.name}</span>
        </div>
        <div className="my-1">
          <span className="h5">Rating: </span>
          <span>{movie.rating}</span>
        </div>
        <Button 
        onClick={onBackClick}>Back</Button>
      </Col>
    </Row>
  );
};