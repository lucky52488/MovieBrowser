import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import noImage from "../background.png";

const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const imgUrl = () => {
    if (movieDetails.poster_path) {
      return `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`;
    } else {
      return noImage;
    }
  };
  const backdropUrl = () => {
    if (movieDetails.backdrop_path) {
      return `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`;
    }
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=1ea98ca8044bc664b541c39ffb92d3bd&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false);
      });
  }, [id]);

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    if (movieDetails) {
      return (
        <>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl()} />
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12">
                <img
                  src={imgUrl()}
                  className="img-fluid rounded shadow mx-auto d-block my-3"
                  alt={movieDetails.original_title}
                />
              </div>
              <div className="col-md-6 col-12 my-auto">
                <h4 className="text-info">Original Title</h4>
                <div className="lead">{movieDetails.original_title}</div>
                <div className="my-3 border-top border-3"></div>
                <h5 className="text-info">OverView</h5>
                <div className="lead">{movieDetails.overview}</div>
                <div className="my-3 border-top border-3"></div>
                <h5 className="text-info">Release Date</h5>
                <div className="lead">{movieDetails.release_date}</div>
                <div className="my-3 border-top border-3"></div>
                <h5 className="text-info">Run Time</h5>
                <div className="lead">{movieDetails.runtime} min</div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }

  return renderMovieDetails();
};

export default MovieView;
