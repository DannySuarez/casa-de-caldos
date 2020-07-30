import React, { createContext, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useFirebase } from '../firebase/FirebaseContext';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState();
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const firebase = useFirebase();

  useEffect(() => {
    setLoading(true);
    firebase.verifyAuth(user => {
      if(user) {
        setUser(user.email);
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
    
  }, []);

  const login = (email, password) => {
    setLoading(true);
    setAuthError(null);
    firebase.signInUser(email, password)
      .then(() => {
        setLoading(false);
        setUser(true);
        history.push('/vieworders');
      })
      .catch(error => {
        setAuthError(error.message);
        setLoading(false);
      });
  };

  return (
    <SessionContext.Provider value={{ user, login, authError, loading }}>
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

export const useSessionLoading = () => {
  const { loading } = useContext(SessionContext);
  return loading;
};

SessionProvider.propTypes = {
  children: PropTypes.object.isRequired
};
