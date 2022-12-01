import { Link } from "react-router-dom";
import noImage from "../background.png";

const MovieCard = ({ movie }) => {
    const imgUrl = () => {
      if (movie.poster_path) {
        return `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
      } else {
        return noImage;
      }
    };
    const detailUrl = `/movie/${movie.id}`;
    return (
      <div className="col-lg-3 col-md-4 col-6 my-3">
        <div className="card">
          <img
            src={imgUrl()}
            className="card-img-top"
            alt={movie.original_title}
          />
          <div className="card-body">
            <h5 className="card-title">{movie.original_title}</h5>
            <Link to={detailUrl} className="btn btn-primary">
              Check Details
            </Link>
          </div>
        </div>
      </div>
    );
  };

  export default MovieCard;