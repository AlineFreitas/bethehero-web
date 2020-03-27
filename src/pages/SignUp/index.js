import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import heroesLogo from '../../assets/logo.svg';

import './sign_up.css';

export default function SignUp() {
  console.log("welcome");

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

        <form>
          <input placeholder="NGO's name" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="Whatsapp" />

          <div className="inline-input-group">
            <input placeholder="City" />
            <input placeholder="UF" style={{ width: 80 }} />
          </div>

          <button className="button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}