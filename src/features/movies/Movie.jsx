import { Popcontext } from "../../context/Pop";

function Movie({ movie }) {
  const { fun } = Popcontext();
  return (
    <li
      onClick={() => fun(movie.imdbID)}
      key={movie.imdbID}
      className="flex space-x-4 px-4 py-3 hover:bg-slate-800 active:bg-slate-700 cursor-pointer transition-all duration-300"
    >
      <img src={movie.Poster} alt={movie.Title} className="h-24 w-16" />
      <div className="flex flex-col space-y-6 text-slate-100">
        <span>{movie.Title}</span>
        <span>{movie.Year}</span>
      </div>
    </li>
  );
}

export default Movie;
