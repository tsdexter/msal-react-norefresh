import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { EventType, PublicClientApplication } from '@azure/msal-browser';

const pca = new PublicClientApplication({
  auth: {
    clientId: `e4e6f9cb-b875-4c0b-b9aa-f57302c4c06a`,
    // authority: 'https://login.microsoftonline.com/common',
    redirectUri:  `${window.location.protocol}//${window.location.host}`
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true
  },
  asyncPopups: true
});

pca.addEventCallback(event => {
  console.log(event)
  if (event.eventType === EventType.LOGIN_SUCCESS) {
    pca.setActiveAccount(event.payload.account);
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App msalInstance={pca} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
