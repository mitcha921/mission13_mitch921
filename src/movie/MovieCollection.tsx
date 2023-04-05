import React, { useState, useEffect } from 'react';
import { Movie } from '../types/movie';

function MovieCollection() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    fetch('https://localhost:4000/movie')
      .then((response) => response.json())
      .then((data) => {
        // Filter movie records where the "Edited" field is "Yes"
        const editedMovies = data.filter(
          (movie: { edited: string }) => movie.edited === 'Yes',
        );
        editedMovies.sort((a: { title: any }, b: { title: any }) =>
          a.title > b.title ? 1 : -1,
        );

        setMovieData(editedMovies);
      });
  }, []);

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
              <th>MovieId</th>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
              <th>Lent To</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {movieData.map((m) => (
              <tr key={m.movieId}>
                <td>{m.movieId}</td>
                <td>{m.title}</td>
                <td>{m.year}</td>
                <td>{m.director}</td>
                <td>{m.rating}</td>
                <td>{m.category}</td>
                <td>{m.edited}</td>
                <td>{m.lentTo}</td>
                <td>{m.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ textAlign: 'center' }}>
        {/* <button className="btn btn-primary" onClick={addMovie}>
          Add Movie
        </button> */}
      </div>
    </>
  );
}

export default MovieCollection;
