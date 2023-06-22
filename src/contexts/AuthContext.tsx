import React, { createContext, useState, useContext, ReactNode } from 'react';
import { AuthContextData } from '../types/AuthContext';

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }: { children: ReactNode }) => {
    // TODO: replace with actual AuthData
    const [isUserAuthenticated, setIsUserAuthenticated] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<string>("");


    // TODO: replace with a call to service that will authenticate and return user data
    const logInUser = () => {
        setIsUserAuthenticated(true);
    };

    const signOut = async () => {
        setIsUserAuthenticated(false);
    };

    const selectCategory = (category: string) => {
        setSelectedCategory(category)
    }

    return (
        <AuthContext.Provider value={{
            selectedCategory,
            selectCategory,
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
