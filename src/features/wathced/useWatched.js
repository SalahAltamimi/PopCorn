import { useEffect, useState } from "react";

export function useWatched() {
  const [wathced, setWatched] = useState(() => {
    const x = JSON.parse(localStorage.getItem("watched"));
    return x ? x : [];
  });

  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(wathced));
    },
    [wathced]
  );
  return { wathced, setWatched };
}
