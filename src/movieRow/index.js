import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const MovieRow = ({ title,content }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleMovies = 5; // Number of visible posters at once
  const [hoveredMovie, setHoveredMovie] = useState("");
  const navigate = useNavigate();


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
        position: 'relative', // Needed for button positioning
      }}
    >
    <h2 style={{color:'white',margin:10}}>{title}</h2>
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
                margin: '5px',
              }}
            >
              <img
                src={item.poster}
                alt={item.title}
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  transition: 'transform 0.3s',
                  transform: hoveredMovie === index ? 'scale(1.05)' : 'scale(1)',
                }}
              />
               {hoveredMovie === index && (
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '8px', overflow: 'hidden' }}>
                  <img
                    src={item.hoverPoster}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                  />
                  <button
                    onClick={() => navigate(`/movie/${item.id}`)} // Use navigate here
                    style={{
                      position: 'absolute',
                      bottom: '20px',
                      left: '50%',
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
