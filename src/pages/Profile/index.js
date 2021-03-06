import React, { useEffect, useState } from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api'

import heroesLogo from '../../assets/logo.svg';

import './profile.css';

export default function Profile(){
  const history = useHistory();
  
  const ongName = localStorage.getItem('ngoName');
  const [incidents, setIncidents] = useState([]);

  useEffect(() =>{
    const ngoID = localStorage.getItem('ngoID');
    api.get(`/ngos/${ngoID}/incidents`, {
      headers: {
        Authorization: ngoID
      }
    }).then( response => {
      setIncidents(response.data); 
    });
  }, []);

  async function handleDeleteIncident(id){
    try {
      api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: localStorage.getItem('ngoID'),
        }
      });

      setIncidents(incidents.filter( incident =>
        incident.id !== id
      ));

    } catch (error) {
      alert('Sorry, something went wrong and we were not able to delete this. Please, try again.')
    }
  }

  function handleSignOut(){
    localStorage.clear();
    history.push('/');
  }

  return(
    <div className="profile-container">
      <header>
        <img src={heroesLogo} alt="Be The Hero Logo" />
        <span>Welcome, {ongName}!</span>

        <Link className="button" to="/incidents/new">
          Add new Incident
        </Link>

        <button onClick={handleSignOut} type="button">
          <FiPower size={18} color="#e02041" /> 
        </button>
      </header>

      <h2>Registered Incidents</h2>
      <ul>
        { incidents.map( incident => {
          return (
            <li key={incident.id}>
              <strong>Incident</strong>
              <p>{incident.title}</p>

              <strong>Description</strong>
              <p>{incident.description}</p>

              <strong>Value</strong>
              <p>
                {Intl.NumberFormat('en-us',
                { style: 'currency', currency: 'BRL'}).format(incident.value)}
              </p>

              <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
                <FiTrash2 size={20} color="#a8a8b3"/>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}