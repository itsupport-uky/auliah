import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

import './styles/globals.css';

import { AudioProvider } from './context/AudioContext';
import weddingData from './data/weddingData';

ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AudioProvider
          src={weddingData.music.src}
        >
          <App />
        </AudioProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);