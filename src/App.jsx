import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    if (isAuthenticated || loggedIn) {
      localStorage.setItem('loggedIn', 'true');
    } else {
      localStorage.removeItem('loggedIn');
    }
  }, [isAuthenticated]);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Oops... {error.message}</div>;
  // }

  const handleLogin = () => {
    loginWithRedirect();
    localStorage.setItem('loggedIn', 'true');
  };

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
    localStorage.removeItem('loggedIn');
  };

  if (isAuthenticated) {
    return (
      <div className='App'>
        <Dashboard />
      </div>
    );
  } else {
    return <button onClick={handleLogin} type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
    ;
  }
}

export default App;
