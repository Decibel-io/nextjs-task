import { createContext, useContext } from 'react';

const AuthContext = createContext({ token: '' });
export const AuthContextContainer = AuthContext.Provider;
export const useAuthContext = () => useContext(AuthContext);
