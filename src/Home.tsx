import React from 'react';

function Home() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: '50vh' }}
    >
      <p
        style={{
          fontSize: '2.5rem',
          fontFamily: 'Arial, sans-serif',
          textAlign: 'center',
        }}
      >
        Welcome to my site! Click on the navigation options to view my podcast
        or my movie collection.
      </p>
    </div>
  );
}

export default Home;
