import React from 'react';
import styles from './Stuff.module.css';
import { Link } from 'react-router-dom';

function TopBanner(props: any) {
  return (
    <>
      <div className="row">
        <div className="col-4">
          <img src="./JoelHiltonHeadshot.jpg" alt="headshot" width="200"></img>
        </div>

        <div className="col-4 align-self-center text-start">
          <h1 className={styles.h1}>Joel's Cool Site </h1>
        </div>

        <div className="col-4 d-flex align-items-center justify-content-end">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav justify-content-between">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/podcasts">
                    Podcasts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/movie-collection">
                    Movie Collection
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
