import React, { createContext, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useFirebase } from '../firebase/FirebaseContext';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [authError, setAuthError] = useState();
  const history = useHistory();
  const firebase = useFirebase();

  useEffect(() => {
    firebase.verifyAuth(user => {
      if(user) {
        setUser(user.email);
        history.push('/vieworders');
      }
    });
    
  }, []);

  const login = (email, password) => {
    setAuthError(null);
    return firebase.signInUser(email, password).catch(error => {
      setAuthError(error.message);    
    });

  };

  return (
    <SessionContext.Provider value={{ user, login, authError }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSessionUser = () => {
  const { user } = useContext(SessionContext);
  return user;
};

export const useHasSession = () => {
  const user = useSessionUser();
  return !!user;
};

export const useLogin = () => {
  const { login, authError } = useContext(SessionContext);
  return { login, authError };
};

export const useAuthError = () => {
  const { authError } = useContext(SessionContext);
  return authError;
};

SessionProvider.propTypes = {
  children: PropTypes.object.isRequired
};
