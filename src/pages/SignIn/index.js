import React from 'react';

import { FiLogIn } from 'react-icons/fi';

import heroesLogo from '../../assets/logo.svg';
import heroesBanner from '../../assets/heroes.png';

import './sign_in.css';

export default function SignIn() {
  return(
    <div className="signup-container">
      <section className="form">
        <img src={heroesLogo} alt="Be The Hero Logo" />

        <form>
          <h2>Log on</h2>
          <input placeholder="Your ID"/>
          <button type="submit">Sign In</button>
          <a href="/signup">
            <FiLogIn size={16} color="#e02041" /> I'm not registered
          </a>
        </form>
      </section>

      <img src={heroesBanner} alt="Be The Hero" />
    </div>
  );
}