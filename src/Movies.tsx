import { useState } from 'react';
import data from './MovieData.json';

const movieData = data.MovieData;

function MovieList() {
  const [listOfMovies, setListOfMovies] = useState(movieData);

  const addMovie = () => {
    setListOfMovies([
      ...movieData,
      {
        Category: 'Action/Adventure',
        Title: 'Dungeons and Dragons: Honor Among Thieves',
        Year: 2023,
        Director: 'John Francis Daley and Jonathan Goldstein',
        Rating: 'PG-13',
        Edited: 'No',
      },
    ]);
  };

  return (
    <>
      <br></br>
      <br></br>
      <div>
        <p
          style={{
            fontSize: '2.5rem',
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center',
          }}
        >
          Movie Collection
        </p>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {listOfMovies.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ textAlign: 'center' }}>
        <button className="btn btn-primary" onClick={addMovie}>
          Add Movie
        </button>
      </div>
    </>
  );
}

export default MovieList;
