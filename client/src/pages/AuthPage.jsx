import React from 'react';

const AuthPage = () => {
  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>To shorten the link</h1>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Authorization</span>
            <div class="input-field">
              <input 
                placeholder="Enter email" 
                id="email" 
                type="text" 
                name="email"
                className="yellow-input"
              />
              <label htmlFor="email">Email</label>
            </div>
            <div class="input-field">
              <input 
                placeholder="Enter the password" 
                id="password" 
                type="password" 
                name="password"
                className="yellow-input"
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="card-action">
            <button className="btn yellow darken-4" style={{ marginRight: 10}}>Sign In</button>
            <button className="btn white black-text">Sign Up</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default AuthPage;
