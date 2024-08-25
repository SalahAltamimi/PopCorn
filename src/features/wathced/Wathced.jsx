import { Popcontext } from "../../context/Pop";

function Wathced({ movie }) {
  const { funDWatched } = Popcontext();
  return (
    <li
      key={movie.imdbID}
      className="flex space-x-4 px-4 py-3 hover:bg-slate-800 active:bg-slate-700 cursor-pointer transition-all duration-300  w-full"
    >
      <img src={movie.Poster} alt={movie.Title} className="h-24" />
      <div className="flex flex-col space-y-6 text-slate-100 w-full">
        <span>{movie.Title}</span>
        <div className="space-x-4">
          <span>⭐{movie.imdbRating}</span>
          <span>🌟{movie.userRating}</span>
          <span>⏳{movie.runtime}</span>
        </div>
      </div>
      <div className="flex items-center mt-6">
        <button
          onClick={() => funDWatched(movie.imdbID)}
          className="ml-6 bg-black px-1 py-1 rounded-full text-[0.7rem]"
        >
          ❌
        </button>
      </div>
    </li>
  );
}

export default Wathced;
