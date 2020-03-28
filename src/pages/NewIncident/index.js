import React from 'react';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';

import heroesLogo from '../../assets/logo.svg';

import './new_incident.css'


export default function NewIncident(){
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={heroesLogo} alt="Be The Hero Logo" />

          <h2>Register New Incident</h2>
          <p>
            Relate the incident in detail to help you find a hero to solve it.
          </p>
          <Link className="back-icon-link" to="/">
            <FiArrowLeft size={16} color="#e02041" /> Return Home
          </Link>
        </section>

        <form>
          <input placeholder="Incident title" />
          <textarea placeholder="Description" />
          <input placeholder="Amount (in USD)" />

          <button className="button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}