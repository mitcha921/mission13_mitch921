import React from 'react';
function Podcasts() {
  return (
    <>
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
          Click <a href="https://baconsale.com">here</a> to listen to my
          podcast, Baconsale!
        </p>
      </div>
    </>
  );
}

export default Podcasts;
