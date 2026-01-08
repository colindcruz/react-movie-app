import "../../../css/Favorites.css";
import MovieCard from "../MovieCard";
import { useMovieContext } from "../../../contexts/MovieContext";





function Favorites() {
  const { favorites } = useMovieContext();

  console.log("Favorites array:", favorites);

  if (!favorites || favorites.length === 0) {
    return <h2>No favorites yet</h2>;
  }

  return (
    <div className="movies-grid">
      {favorites.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Favorites;

