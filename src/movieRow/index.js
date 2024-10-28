import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const MovieRow = ({ title, content, addToWatchlist, removeFromWatchlist, isWatchlist, watchlist }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleMovies = 5; // Number of visible posters at once
  const [hoveredMovie, setHoveredMovie] = useState("");
  const navigate = useNavigate();
  const trailerKey = 'yXVVBRLT3NY'; 

  const handleNext = () => {
    if (currentIndex < content.length - visibleMovies) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div
      style={{
        padding: '10px',
        backgroundColor: 'black',
        position: 'relative',
      }}
    >
      <h2 style={{ color: 'white', margin: 10 }}>{title}</h2>
      {/* Movie Posters Container */}
      <div
        style={{
          display: 'flex',
          overflow: 'hidden', // Hide the extra posters
          width: `${visibleMovies * 270}px`,
        }}
      >
        <div
          style={{
            display: 'flex',
            transition: 'transform 0.3s ease',
            transform: `translateX(-${currentIndex * 270}px)`, // Move posters based on index
          }}
        >
          {content.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredMovie(index)}
              onMouseLeave={() => setHoveredMovie("")}
              style={{
                position: 'relative',
                minWidth: '250px',
                maxWidth: '250px',
                margin: '5px',
              }}
            >
              <img
                src={item.poster}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  transition: 'transform 0.3s',
                  transform: hoveredMovie === index ? 'scale(1.05)' : 'scale(1)',
                }}
              />
              {hoveredMovie === index && (
                <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                 <div style={{ height: '50%', position: 'relative' }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&loop=1&playlist=${trailerKey}`}
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title="Movie Trailer"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  </div>
                  <div style={{
                    height: '50%',
                    backgroundColor: 'black',
                    color: 'white',
                    padding: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                  <button
                    onClick={() => navigate(`/movie/${item.id}`)} // Use navigate here
                    style={{
                      position: 'absolute',
                      left: '40%',
                      transform: 'translateX(-50%)',
                      backgroundColor: '#e50914',
                      color: 'white',
                      padding: '10px 20px',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      zIndex: 2,
                    }}
                  >
                    Watch Now
                  </button>
                  {isWatchlist ? (<button
                    onClick={() => removeFromWatchlist(item.id)}
                    style={{
                      position: 'absolute',
                      right: '15%',
                      backgroundColor: '#4CAF50',
                      color: 'white',
                      padding: '10px 20px',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      zIndex: 2,
                    }}
                  >
                    -
                  </button>) : (
                    <button
                      onClick={() => addToWatchlist(item)}
                      style={{
                        position: 'absolute',
                        right: '15%',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        zIndex: 2,
                      }}
                    >
                      +
                    </button>
                  )}
                  <div style={{marginTop:'25px'}}>
                   <h4 style={{ fontSize: '1rem', marginBottom: '8px',marginTo:'50px' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.8rem', marginBottom: '8px' }}>{item.releaseYear} | {item.duration} | {item.languages}</p>
                    <p style={{ fontSize: '0.7rem',  marginBottom: '10px' }}>
                      {item.overview}
                    </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Left Arrow */}
      {currentIndex > 0 && (
        <button
          onClick={handlePrev}
          style={{
            position: 'absolute',
            left: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            border: 'none',
            color: 'white',
            padding: '10px',
            cursor: 'pointer',
          }}
        >
          ◀
        </button>
      )}

      {/* Right Arrow */}
      {currentIndex < content.length - visibleMovies && (
        <button
          onClick={handleNext}
          style={{
            position: 'absolute',
            right: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            border: 'none',
            color: 'white',
            padding: '10px',
            cursor: 'pointer',
          }}
        >
          ▶
        </button>
      )}
    </div>
  );
};

export default MovieRow;
