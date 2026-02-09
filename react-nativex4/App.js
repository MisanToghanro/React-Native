

import {NavigationContainer} from "@react-navigation/native";
import AuthStack from './navigation/AuthStack';
import AppStack from './navigation/AppStack';
import AuthContextProvider from './store/auth-context';

import LoadingSpinner from './components/LoadingSpinner';
import { useAuthContext } from "./store/auth-context";


export default function App() {

  const RootNavigation = () => {
  const {isAuthenticated, isLoading} = useAuthContext();

  if (isLoading){
    return(
      <LoadingSpinner/>
    )
  }

  return(
    isAuthenticated ? <AppStack/> : <AuthStack/>
  )
  }

 return(
  <AuthContextProvider>
    <NavigationContainer>
     <RootNavigation/>
  </NavigationContainer>
  </AuthContextProvider>

 )

}

