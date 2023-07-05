import { createContext, useContext } from 'react';

const AuthContext = createContext({});
export const AuthContextContainer = AuthContext.Provider;
export const useAuthContext = () => useContext(AuthContext);
