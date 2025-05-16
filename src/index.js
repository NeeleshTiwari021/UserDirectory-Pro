import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createContext } from 'react';
import UserStore from './stores/userStore';
import './styles/global.css';

export const Context = createContext({ userStore: null }); // Export the context

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{ userStore: new UserStore() }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);