import "../../css/MovieCard.css";
import { useMovieContext } from "../../contexts/MovieContext";

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  function onFavouriteClick(e) {
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(movie.id);
   
    } else {
      addToFavorites(movie);
    
    }
  }

  return (
    <div className="movie-card">
  <div className="movie-poster">
    <button
      className={`favorite-btn ${favorite ? "active" : ""}`}
      onClick={onFavouriteClick}
      aria-label="Toggle favorite"
    >
      {favorite ? "❤️" : "🤍"}
    </button>

    <img
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt={movie.title}
    />
  </div>

  <div className="movie-info">
    <h3>{movie.title}</h3>
    <p>{movie.release_date?.split("-")[0]}</p>
  </div>
</div>

  );
}

export default MovieCard;
