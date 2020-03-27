import React from 'react';

export default function NewIncident(){
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img alt="Be The Hero Logo" />

          <h2>Register New Incident</h2>
          <p>
            Relate the incident in detail to help you find a hero to solve it.
          </p>
          <a className="back-icon-link" href="/">
            Return Home
          </a>
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