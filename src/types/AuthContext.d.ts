export interface AuthContextData {
    isUserAuthenticated: boolean;
    logInUser: () => void;
    signOut: () => void;
    logOutUser: () => void;
}
