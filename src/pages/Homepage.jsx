import { Popcontext } from "../context/Pop";
import MoviesList from "../features/movies/MoviesList";
import MovieDetails from "../features/wathced/MovieDetails";
import Summary from "../features/wathced/Summary";
import WathcedList from "../features/wathced/WathcedList";
import Box from "../ui/Box";

function Homepage() {
  const { select } = Popcontext();
  return (
    <>
      <div className="flex space-x-2">
        <Box>
          <MoviesList />
        </Box>
        <Box>
          {select ? (
            <MovieDetails />
          ) : (
            <>
              <Summary />
              <WathcedList />
            </>
          )}
        </Box>
      </div>
    </>
  );
}

export default Homepage;
