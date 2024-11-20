import React, { useEffect, useState } from "react";
import "./Style.css";
import { Link, useParams } from "react-router-dom";

function AboutMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const fetchMovie = async () => {
    const url = `http://www.omdbapi.com/?apikey=6ae4e5c8&i=${id}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === "True") {
        setMovie(data);
      } else {
        setError(data.Error); // If the API returns an error
      }
    } catch (err) {
      setError("An error occurred while fetching the movie details.");
    } finally {
      setLoading(false); // Set loading to false after fetching is done
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [id]); // Add 'id' to the dependency array to re-fetch when the ID changes

  if (loading) {
    return (
      <div>
        <h1>Loading details...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Error: {error}</h1>
      </div>
    );
  }

  return (
    <div className="aboutMovie">
      <div className="aboutmovie-poster">
        <img src={movie.Poster} className="img-fluid" alt={movie.Title} />
      </div>
      <div className="aboutmovie-details">
        <div>
          <h1>{movie.Title} - {movie.Year}</h1>
        </div>
        <div style={{ minWidth: "300px", width: "60%" }}>
          <p>{movie.Plot}</p>
        </div>
        {movie.Ratings && movie.Ratings.length > 0 && (
          <div>
            <h3>Ratings:</h3>
            {movie.Ratings.map((rating, index) => (
              <div key={index}>
                {rating.Source}: {rating.Value}
              </div>
            ))}
          </div>
        )}
        <div className="my-2">
          <Link to={`/bookmovie/${movie.Title}`} className="btn btn-primary">
            Book Now Here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutMovie;
