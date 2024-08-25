import Movie from "./Movie";
import { Popcontext } from "../../context/Pop";
import Error from "../../ui/Error";
import Loader from "../../ui/Loader";

function MoviesList() {
  const { movies, isLoading, error } = Popcontext();
  if (isLoading) return <Loader />;
  if (error) return <Error error={error} />;
  return (
    <ul className="flex flex-col divide-y divide-slate-100 max-h-96 overflow-scroll">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

export default MoviesList;
