import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import {BrowserRouter as Router} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <Auth0Provider
    domain="dev-iax32fo44oyymg50.us.auth0.com"
    clientId="ilF4DV3lk7DCWa3CBu0ydV4wPbHkWiiZ"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
      <App />
    </Auth0Provider>
    </Router>
  </React.StrictMode>,
)
