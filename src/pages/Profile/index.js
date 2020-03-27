import React from 'react';

import './profile.css';

export default function Profile(){
  return(
    <div className="profile-container">
      <header>
        <img alt="" />
        <span>Welcome, Lambeijinhos!</span>

        <a href="/incidents/new">Add new Incident</a>

        <button typer="button">
          Sign Out Placeholder
        </button>
      </header>

      <h2>Registered Incidents</h2>
      <ul>
        <li>
          <strong>Title label</strong>
          <p>title</p>

          <strong>Description label</strong>
          <p>Long text with the whole case description to touch our heroes hearts</p>

          <strong>Value label</strong>
          <p>$###,##</p>
          <button type="button">DELETE </button>
        </li>
        <li>
          <strong>Title label</strong>
          <p>title</p>

          <strong>Description label</strong>
          <p>Long text with the whole case description to touch our heroes hearts</p>

          <strong>Value label</strong>
          <p>$###,##</p>
          <button type="button">DELETE </button>
        </li>
        <li>
          <strong>Title label</strong>
          <p>title</p>

          <strong>Description label</strong>
          <p>Long text with the whole case description to touch our heroes hearts</p>

          <strong>Value label</strong>
          <p>$###,##</p>
          <button type="button">DELETE </button>
        </li>
        <li>
          <strong>Title label</strong>
          <p>title</p>

          <strong>Description label</strong>
          <p>Long text with the whole case description to touch our heroes hearts</p>

          <strong>Value label</strong>
          <p>$###,##</p>
          <button type="button">DELETE </button>
        </li>
        <li>
          <strong>Title label</strong>
          <p>title</p>

          <strong>Description label</strong>
          <p>Long text with the whole case description to touch our heroes hearts</p>

          <strong>Value label</strong>
          <p>$###,##</p>
          <button type="button">DELETE </button>
        </li>
        <li>
          <strong>Title label</strong>
          <p>title</p>

          <strong>Description label</strong>
          <p>Long text with the whole case description to touch our heroes hearts</p>

          <strong>Value label</strong>
          <p>$###,##</p>
          <button type="button">DELETE </button>
        </li>
      </ul>
    </div>
  );
}