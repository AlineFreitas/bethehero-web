import React from 'react'; 
import { Link } from 'react-router-dom';

import { FiLogIn } from 'react-icons/fi';

import heroesLogo from '../../assets/logo.svg';
import heroesBanner from '../../assets/heroes.png';

import './sign_in.css';

export default function SignIn() {
  return(
    <div className="signin-container">
      <section className="form">
        <img src={heroesLogo} alt="Be The Hero Logo" />

        <form>
          <h2>Log on</h2>
          <input placeholder="Your ID"/>
          <button className="button" type="submit">Sign In</button>
          <Link to="/signup">
            <FiLogIn size={16} color="#e02041" /> I'm not registered
          </Link>
        </form>
      </section>

      <img src={heroesBanner} alt="Be The Hero" />
    </div>
  );
}