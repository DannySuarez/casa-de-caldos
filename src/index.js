import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import Firebase from './components/firebase/Firebase';
import { FirebaseContext } from './components/firebase/FirebaseContext';

render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
