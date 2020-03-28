import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import heroesLogo from '../../assets/logo.svg';

import './new_incident.css'


export default function NewIncident(){
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const ngoID = localStorage.getItem('ngoID');

  const history = useHistory();

  async function handleCreateIncident(event){
    event.preventDefault();

    const data = {
      title,
      description,
      value
    }

    try {
      await api.post('/incidents', data, {
        headers: {
          Authorization: ngoID,
        }
      });

      history.push('/profile');

    } catch(error) {
      alert('Something went wrong');
    }
  }

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

        <form onSubmit={handleCreateIncident}>
          <input
            value={title}
            onChange={ (event) => setTitle(event.target.value)}
            placeholder="Incident title"
          />
          <textarea
            value={description}
            onChange={ (event) => setDescription(event.target.value)}
            placeholder="Description"
          />
          <input
            value={value}
            onChange={ (event) => setValue(event.target.value)}
            placeholder="Amount (in BRL)"
          />

          <button className="button">
            Register
          </button>

          <button className="button" onClick={() => history.goBack()}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}