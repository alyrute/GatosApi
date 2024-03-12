import React from "react";
import FavoritosScreen from "../screen/FavoritosScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoritosDetail from "../detail/FavoritosDetail";

const FavoritosStack = createNativeStackNavigator();

export default function StackFavoritos() {
  return(
  <FavoritosStack.Navigator>
    <FavoritosStack.Screen name="FavoritosScreen" component={FavoritosScreen} />
    <FavoritosStack.Screen name="FavoritosDetail" component={FavoritosDetail} />
  </FavoritosStack.Navigator>)
}