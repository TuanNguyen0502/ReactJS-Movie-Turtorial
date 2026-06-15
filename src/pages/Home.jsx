import { useState } from "react";
import "../css/Home.css";
import MovieCard from "../components/MovieCard";

function Home() {
  const movies = [
    {
      id: 1,
      title: "John Wick 4",
      releaseDate: "2025",
      url: "https://example.com/movie-poster.jpg",
    },
    {
      id: 2,
      title: "John Wick 2",
      releaseDate: "2023",
      url: "https://example.com/movie-poster.jpg",
    },
    {
      id: 3,
      title: "John Wick 3",
      releaseDate: "2024",
      url: "https://example.com/movie-poster.jpg",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
