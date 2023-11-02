// src/App.js
import React, { useEffect } from 'react';
import userManager from './authService';

function App() {
  useEffect(() => {
    // Check if we're in the callback
    console.log(window.location.pathname)
    if (window.location.pathname === '/loginresponse') {
        userManager.signinRedirectCallback().then(user => {
        window.location.pathname = '/';
      }).catch(err => {
        console.log(err);
      });
    }
  }, []);

  const login = () => {
    userManager.signinRedirect();
  };

  const logout = () => {
    userManager.signoutRedirect();
  };

  return (
    <div className="App">
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default App;
