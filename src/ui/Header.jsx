import { Popcontext } from "../context/Pop";

function Header() {
  const { qurey, setQurey, movies } = Popcontext();

  return (
    <header className="bg-blue-800 m-4 rounded-xl h-[7vh]">
      <nav className="py-3 px-6 flex items-center justify-between text-slate-100">
        <span className="text-lg font-semibold tracking-wider">
          🍿 usePopcorn
        </span>
        <input
          value={qurey}
          onChange={(e) => setQurey(e.target.value)}
          type="text"
          className="rounded-full px-3 w-28 py-1 text-slate-900 outline-none placeholder:text-slate-800 placeholder:text-sm focus:w-48 focus:ring focus:ring-yellow-500 transition-all duration-300"
          placeholder="Search movies..."
        />
        <p>Found {movies.length} results</p>
      </nav>
    </header>
  );
}

export default Header;
