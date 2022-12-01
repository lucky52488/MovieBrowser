const Search = ({ searchText}) => {
  return (
    <>
      <div className="container my-3">
        <form className="d-flex" role="search">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchText}
            // onChange={updateSearchText}
          />
        </form>
      </div>
    </>
  );
};

export default Search;
