import { createContext, useContext, useState } from "react";
import { useMovies } from "../features/movies/useMovies";
import { useMovie } from "../features/wathced/useMovie";
import { useWatched } from "../features/wathced/useWatched";

const PopProvider = createContext();
function Pop({ children }) {
  const [qurey, setQurey] = useState("");
  const { wathced, setWatched } = useWatched();
  const [select, setSelect] = useState(null);
  function fun(val) {
    setSelect((s) => (s === val ? null : val));
  }
  function funWatched(val) {
    setWatched((s) => [...s, val]);
    setSelect(null);
  }
  function funDWatched(val) {
    setWatched((s) => s.filter((el) => el.imdbID !== val));
  }
  const { movies, isLoading, error } = useMovies(qurey);
  const { movie, isLoading2, error2 } = useMovie(select);
  return (
    <PopProvider.Provider
      value={{
        movies,
        isLoading,
        error,
        qurey,
        setQurey,
        fun,
        select,
        movie,
        isLoading2,
        error2,
        wathced,
        funWatched,
        funDWatched,
        setSelect,
      }}
    >
      {children}
    </PopProvider.Provider>
  );
}
export function Popcontext() {
  const x = useContext(PopProvider);
  if (x === undefined) throw new Error("unkonw");
  return x;
}

export default Pop;
