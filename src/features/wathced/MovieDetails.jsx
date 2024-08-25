import { useEffect, useState } from "react";
import { Popcontext } from "../../context/Pop";
import Error from "../../ui/Error";
import Loader from "../../ui/Loader";
import Ratings from "../../ui/Ratings";

function MovieDetails() {
  const [userRating, setRating] = useState(null);
  const { setSelect, movie, isLoading2, error2, select, funWatched, wathced } =
    Popcontext();
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;
  useEffect(
    function () {
      if (title) document.title = title;
      return () => (document.title = "🍿 usePopcorn");
    },
    [title]
  );
  useEffect(function () {
    const close = (e) => {
      e.preventDefault();
      if (e.code === "Escape") setSelect(null);
    };
    document.querySelector("body").addEventListener("keydown", close);
    return () =>
      document.querySelector("body").removeEventListener("keydown", close);
  }, []);
  function handelSubmit(e) {
    e.preventDefault();
    const newWatch = {
      imdbID: select,
      Title: title,
      Year: year,
      Poster: poster,
      runtime,
      imdbRating,
      userRating,
    };
    funWatched(newWatch);
  }
  const isRated = wathced.map((el) => el.imdbID).includes(select);
  const userRatings = wathced.find((el) => el.imdbID === select)?.userRating;
  if (isLoading2) return <Loader />;
  if (error2) return <Error error={error2} />;
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-6 bg-slate-600">
        <img className="h-48" src={poster} alt={title} />
        <div className="flex flex-col justify-center  space-y-3 text-slate-100">
          <h3 className="text-xl tracking-widest">{title}</h3>
          <span className="text-sm font-light">
            {released}.{runtime}
          </span>
          <span className="text-sm font-light">{genre}</span>
          <span className="text-sm font-light">
            ⭐ {imdbRating} IMDb rating
          </span>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="bg-slate-600 flex flex-col items-center w-3/4 py-3 px-6 rounded-xl space-y-2">
          {isRated ? (
            <p className="text-slate-100">
              You rated with movie {userRatings} ⭐️
            </p>
          ) : (
            <>
              <Ratings userRating={userRating} setRating={setRating} />
              {userRating && (
                <button
                  onClick={handelSubmit}
                  className="bg-indigo-600 text-slate-100 px-10 py-1 rounded-full"
                >
                  Add to List+
                </button>
              )}
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col p-4 text-slate-100 space-y-4 text-sm">
        <p>{plot}</p>
        <span className="font-light">{actors}</span>
        <span className="font-light">Director by {director}</span>
      </div>
    </div>
  );
}

export default MovieDetails;
