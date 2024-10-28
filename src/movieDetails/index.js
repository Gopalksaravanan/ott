import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams(); 
  const trailerKey = 'yXVVBRLT3NY'; 

  const movie = {
    title: 'Anbe Sivam',
    release_date: '2003-07-16',
    overview: ' The film tells the story of Nallasivam and Anbarasu, two men of contrasting personalities who undertake an unexpected journey from Bhubaneswar to Chennai.',
  };

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      {/* YouTube Trailer in the Background */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          overflow: 'hidden',
        }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&loop=1&playlist=${trailerKey}`}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Movie Trailer"
          style={{
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Movie Details Overlay */}
      <div
        style={{
          position: 'absolute',
          bottom: '0%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          left: '50%',
          padding: '20px',
          borderRadius: '10px',
          width: '60%',
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '20px',opacity: 0.6 }}>{movie.title}</h1>
        <p style={{ fontSize: '1.2rem', margin: '10px 0',opacity: 0.6 }}>
        Release Date: {movie.release_date}
        </p>
        <p style={{ fontSize: '1.2rem', margin: '10px 0',opacity: 0.6 }}>
          Overview: {movie.overview}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
