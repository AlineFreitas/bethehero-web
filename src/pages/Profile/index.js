import React from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import heroesLogo from '../../assets/logo.svg';

import './profile.css';

export default function Profile(){
  return(
    <div className="profile-container">
      <header>
        <img src={heroesLogo} alt="Be The Hero Logo" />
        <span>Welcome, Lambeijinhos!</span>

        <a className="button" href="/incidents/new">Add new Incident</a>

        <button typer="button">
          <FiPower size={18} color="#e02041" /> 
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
          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"/>
          </button>
        </li>
        <li>
          <strong>Title label</strong>
          <p>title</p>

          <strong>Description label</strong>
          <p>Long text with the whole case description to touch our heroes hearts</p>

          <strong>Value label</strong>
          <p>$###,##</p>
          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"/>
          </button>
        </li>
        <li>
          <strong>Title label</strong>
          <p>title</p>

          <strong>Description label</strong>
          <p>Long text with the whole case description to touch our heroes hearts</p>

          <strong>Value label</strong>
          <p>$###,##</p>
          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"/>
          </button>
        </li>
        <li>
          <strong>Title label</strong>
          <p>title</p>

          <strong>Description label</strong>
          <p>Long text with the whole case description to touch our heroes hearts</p>

          <strong>Value label</strong>
          <p>$###,##</p>
          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"/>
          </button>
        </li>
        <li>
          <strong>Title label</strong>
          <p>title</p>

          <strong>Description label</strong>
          <p>Long text with the whole case description to touch our heroes hearts</p>

          <strong>Value label</strong>
          <p>$###,##</p>
          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"/>
          </button>
        </li>
        <li>
          <strong>Title label</strong>
          <p>title</p>

          <strong>Description label</strong>
          <p>Long text with the whole case description to touch our heroes hearts</p>

          <strong>Value label</strong>
          <p>$###,##</p>
          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"/>
          </button>
        </li>
      </ul>
    </div>
  );
}