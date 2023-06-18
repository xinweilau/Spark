import React, { createContext, useState, useContext, ReactNode } from 'react';
import { AuthContextData } from '../types/AuthContext';

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }: { children: ReactNode }) => {
    // TODO: replace with actual AuthData
    const [isUserAuthenticated, setIsUserAuthenticated] = useState<boolean>(false);

    // TODO: replace with a call to service that will authenticate and return user data
    const logInUser = () => {
        setIsUserAuthenticated(true);
    };

    const signOut = async () => {
        setIsUserAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{
            isUserAuthenticated,
            logInUser,
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    );
};

interface AuthProviderProps {
    children: ReactNode;
}
