import React from 'react';

import './sign_up.css';

export default function SignUp() {
  console.log("welcome");

  return(
    <div className="signup-container">
      <div className="content">
        <section>
          <img alt="Be The Hero Logo" />

          <h2>Sign Up</h2>

          <p>
            Sign up, then sign in to the plattaform and help people find your NGO's cases.
          </p>
          <a href="/">
            Return to Sign In
          </a>
        </section>

        <form>
          <input placeholder="NGO's name" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="Whatsapp" />
          <input placeholder="City" />
          <input placeholder="UF" />

          <button>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}