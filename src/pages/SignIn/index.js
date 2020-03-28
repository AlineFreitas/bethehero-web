import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api'

import heroesLogo from '../../assets/logo.svg';
import heroesBanner from '../../assets/heroes.png';

import './sign_in.css';

export default function SignIn() {

  const [id, setID] = useState('');

  async function handleSignIn(event){

    event.preventDefault();

    try {
      const response = await api.post('/sessions', { id });

      localStorage.setItem('ngoID', id);
      localStorage.setItem('ngoName', response.data.name);

    } catch(error) {
      alert('Login failed. Try again');
    }

  }
  
  return(
    <div className="signin-container">
      <section className="form">
        <img src={heroesLogo} alt="Be The Hero Logo" />

        <form onSubmit={handleSignIn}>
          <h2>Log on</h2>
          <input
            value={id}
            onChange={ event => setID(event.target.value)}
            placeholder="Your ID"
          />
          <button className="button" type="submit">Sign In</button>
          
          <Link className="back-icon-link" to="/signup">
            <FiLogIn size={16} color="#e02041" /> I'm not registered
          </Link>
        </form>
      </section>

      <img src={heroesBanner} alt="Be The Hero" />
    </div>
  );
}