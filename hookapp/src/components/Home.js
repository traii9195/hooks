import React from 'react';
import Card from 'react-bootstrap/Card';
import './trailer.css';
import { Link } from 'react-router-dom';


const Home = () => {
  const trailers = [
    {
      title: "aquaman",
      youtubeId: "WDkg3h8PCVU"
    },
    {
      title: "bad genius ",
      youtubeId: "CLdhN4oMxCQ"
    },
    {
      title: "ghosted",
      youtubeId: "IAdCsNtEuBU"
    },
    {
      title: "Lupin",
      youtubeId: "ga0iTWXCGa0"
    },
    {
      title: "the Da vinci code",
      youtubeId: "5sU9MT8829k"
    },
    {
      title: "game of thrones ",
      youtubeId: "KPLWWIOCOOQ"
    },
    {
      title: "john wick ",
      youtubeId: "qEVUtrk8_B4"
    },
  ];

  return (
    
    <div>
      <h1>Welcome to Movie Trailers</h1>
      <Link to="/movie-list">
  <button>Go to Movie List</button>
</Link>

      <div className="card-container">
        {trailers.map((trailer, index) => (
          <Card key={index} style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{trailer.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Movie {index + 1}</Card.Subtitle>
              <Card.Text>
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${trailer.youtubeId}`}
                  title={trailer.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
