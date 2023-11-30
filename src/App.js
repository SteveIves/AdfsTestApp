// src/App.js

import React, { useEffect } from 'react';
import userManager from './authService';

function App() {
  useEffect(() => {

  //   userManager.getUser().then(user => {
  //     if (user) {
  //         console.log('User:', user);
  //         console.log('ID Token:', user.id_token);
  //         console.log('Access Token:', user.access_token);
  //         console.log('User profile:', user.profile);
  //     } else {
  //         console.log('User not logged in');
  //     }
  // }).catch(error => {
  //     console.error('Error getting user:', error);
  // });

    // // Check if we're in the callback
    // console.log(window.location.pathname)

    if (window.location.pathname === '/login') {
      userManager.signinRedirectCallback().then(user => {
        window.location.pathname = '/';
      }).catch(err => {
        console.log(err);
      });
    }

    if (window.location.pathname === '/logout') {
      console.log('We hit /logout');
      userManager.signoutRedirectCallback().then(user => {
        console.log('redirecting to /');
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
