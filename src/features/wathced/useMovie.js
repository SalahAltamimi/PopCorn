import { useEffect, useState } from "react";
import { apiMovie } from "../../service/apiMovies";

export function useMovie(select) {
  const [movie, setMovies] = useState({});
  const [isLoading2, setLoading] = useState(false);
  const [error2, setErorr] = useState("");

  useEffect(
    function () {
      async function getApi() {
        try {
          setLoading(true);
          const data = await apiMovie(select);
          setMovies(data?.data);
          setLoading(false);
        } catch (err) {
          setErorr(err.message);
          setLoading(false);
        }
      }
      getApi();
    },
    [select]
  );
  return { movie, isLoading2, error2 };
}
