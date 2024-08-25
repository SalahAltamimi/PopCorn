import { Popcontext } from "../../context/Pop";

function Summary() {
  const { wathced } = Popcontext();
  const avgimdbRating = Math.ceil(
    wathced.reduce((a, b) => Number(a) + Number(b.imdbRating), 0) /
      wathced.length
  );
  const avguserRating = Math.ceil(
    wathced.reduce((a, b) => Number(a) + Number(b.userRating), 0) /
      wathced.length
  );
  const Runtime = Math.ceil(
    wathced.reduce((a, b) => Number(a) + Number(b.runtime.split(" ")[0]), 0)
  );
  return (
    <div className="shadow-xl flex flex-col px-6 py-4 space-y-4 text-slate-100 mb-2">
      <h3>Movies you watched</h3>
      <ul className="flex justify-between">
        <li>#️⃣ {wathced?.length} movies</li>
        <li>⭐ {wathced.length > 0 ? avgimdbRating : 0}</li>
        <li>🌟 {wathced.length > 0 ? avguserRating : 0}</li>
        <li>⏳{Runtime} min</li>
      </ul>
    </div>
  );
}

export default Summary;
