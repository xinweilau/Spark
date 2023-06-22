export interface AuthContextData {
    isUserAuthenticated: boolean;
    selectedCategory: string;
    selectCategory: (category: string) => void;
    logInUser: () => void;
    signOut: () => void;
}
