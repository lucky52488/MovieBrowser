import Hero from "./Hero";
import MovieCard from "./MovieCard";
import Search from "./search";

const SearchView = ({searchText, searchResults}) => { 

  const title = `You are Searching for ${searchText}`;

  const resultHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  });

  const notFound = () => {
    if (resultHtml.length === 0) {
      return <h2>No Match Found</h2>;
    }
  };

  return (
    <div>
      <Hero text={title} />
      <Search searchText={searchText}/>
      {resultHtml && (
        <div className="container">
          <div className="row">
            {resultHtml}
            {notFound()}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchView;
