import { Models } from 'appwrite';
import { createContext } from 'react';

// Defines the shape of the authentication context, including the current user or null if not authenticated.
interface AuthContextType {
    user: Models.User<Models.Preferences> | null;
}
export const AuthContext = createContext<AuthContextType>({
    user: null,
});
