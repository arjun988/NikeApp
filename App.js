import { StatusBar } from "expo-status-bar";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import Navigation from "./src/navigation";
import {Provider} from 'react-redux'
import { store } from "./src/store";
export default function App() {

  return (
    <Provider store={store}>
  <Navigation/>

   
    </Provider>
  );
}

