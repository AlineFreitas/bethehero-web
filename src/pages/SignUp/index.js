import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import heroesLogo from '../../assets/logo.svg';

import './sign_up.css';

export default function SignUp() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp_number, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUF] = useState('');

  async function handleSignUp(event){
    event.preventDefault();

    const data = {
      name,
      email,
      whatsapp_number,
      city,
      uf
    }

    try {
      const response = await api.post('/ngos', data);
    
      alert(`Your access ID: ${response.data.id}`);
    } catch (error) {
      alert('Something went wrong. Try again, please');
    }
  }

  return(
    <div className="signup-container">
      <div className="content">
        <section>
          <img src={heroesLogo} alt="Be The Hero Logo" />

          <h2>Sign Up</h2>
          <p>
            Sign up, then sign in to the plattaform and help people find your NGO's cases.
          </p>
          <Link className="back-icon-link" to="/">
            <FiArrowLeft size={16} color="#e02041" /> Return to Sign In
          </Link>
        </section>

        <form onSubmit={handleSignUp}>
          <input 
            value={name}
            onChange= { event => setName(event.target.value)}
            placeholder="NGO's name"
          />
          <input
            value={email}
            onChange= { event => setEmail(event.target.value)}
            type="email"
            placeholder="E-mail"
          />
          <input
            vaule={whatsapp_number}
            onChange= { event => setWhatsapp(event.target.value)}
            placeholder="Whatsapp"
          />

          <div className="inline-input-group">
            <input
              value={city}
              onChange= { event => setCity(event.target.value)}
              placeholder="City"
            />
            <input
              value={uf}
              onChange= { event => setUF(event.target.value)}
              placeholder="UF"
              style={{ width: 80 }}
            />
          </div>

          <button className="button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}