import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";


const AuthContext = createContext({
    user:null,
    isAuthenticated: false,
    isLoading: true,
})

const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setUser(user);
          setIsLoading(false)
        })

        return unsubscribe;
    }, []);

    const value = {user, isAuthenticated: !!user, isLoading};

    return(
        <AuthContext.Provider value={value}>
           {children}
        </AuthContext.Provider>
    )
}

export default  AuthContextProvider;

export const useAuthContext = () => {
    return useContext(AuthContext);
};
