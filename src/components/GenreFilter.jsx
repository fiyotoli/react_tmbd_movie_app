import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const GenreFilter = ({ setSelectedGenre }) => {
  const [genres, setGenres] = useState([]);
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    fetchGenres();
  }, []);

  const fetchGenres = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`);
    const data = await response.json();
    setGenres(data.genres);
  };

  const buttonStyle = {
    border: 'none', // Remove border
    marginRight: '0.5rem', // Spacing between buttons
    marginBottom: '0.5rem', // Spacing below buttons
    backgroundColor: '#343a40', // Default background color (dark)
    color: 'white', // Text color
    transition: 'background-color 0.3s ease', // Smooth transition for hover effect
  };

  const hoverStyle = {
    backgroundColor: '#28a745', // Success color on hover
    color: 'white', // Keep text color white on hover
  };

  return (
    <div className="mb-3 container">
      <Button
        style={{ ...buttonStyle, backgroundColor: '#28a745' }} // Success color for "All" button
        onClick={() => setSelectedGenre('all')}
      >
        All
      </Button>
      {genres.map(genre => (
        <Button
          key={genre.id}
          onClick={() => setSelectedGenre(genre.id)}
          style={buttonStyle}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor} // Change background on hover
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor} // Reset background when not hovering
        >
          {genre.name}
        </Button>
      ))}
    </div>
  );
};

export default GenreFilter;
