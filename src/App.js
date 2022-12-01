import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import SearchView from "./components/SearchView";
import MovieView from "./components/MovieView";
import NotFound from "./components/404NotFound";
import { useState, useEffect } from "react";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=1ea98ca8044bc664b541c39ffb92d3bd&language=en-US&query=${searchText}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results);
        });
    }
  }, [searchText]);

  return (
    <div>
      <NavBar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/search"
          element={
            <SearchView SearchText={searchText} searchResults={searchResults} />
          }
        />
        <Route path="/movie/:id" element={<MovieView />} />
      </Routes>
    </div>
  );
}

export default App;
