

import { createContext, useContext, useState } from "react";
import Toast from 'react-native-toast-message';

//create context
 const FavContext = createContext();

//create a provider
export const FavContextProvider = ({children}) => {
    const [favMeal, setFavMeal] = useState([]);

    //add meal to fav
    const addFav = (meal) => {
        setFavMeal((currentFavs) => {

            const exists = currentFavs.some((item) => item.id === meal.id);
            if (exists) return currentFavs;

      Toast.show({
      type: 'success',
      text1: `${meal.title} added to favorites!`,
      position: 'bottom',
    });
           return [...currentFavs, { ...meal }];
           
        })
    }

    const removeFav = (id) => {
  setFavMeal((currentFavs) => {
    const removedMeal = currentFavs.find((meal) => meal.id === id);

    if (removedMeal) {
      Toast.show({
        type: 'info',
        text1: `${removedMeal.title} removed from favorites!`,
        position: 'bottom',
      });
    }

    // Return the filtered array
    return currentFavs.filter((meal) => meal.id !== id);
  });
};
    

    //check if a meal is already a favourite
    const addedFav = (id) => {
       return favMeal.some((meal) => meal.id === id);
    }

    //now toggle between add /reove from fav
    const toggleFav = (meal) => {
       const isFav = favMeal.some((item) => item.id === meal.id);

    if (isFav) {
      removeFav(meal.id);
    } else {
      addFav(meal);
    }
    }
    return(
        <FavContext.Provider value={{
        favMeal,
         addFav,
         removeFav,
         addedFav,
         toggleFav}}>
          {children}
        </FavContext.Provider>
    )
};

//create a custom hook to use the favcontext
export const useFavContext = () => {
    return(
    useContext(FavContext)
    )
    
}