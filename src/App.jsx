import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import { StatusBar } from "react-native";
import AddRecipe from "./AddRecipe";
import Profile from "./Profile";
import Navbar from "./components/Navbar";
import Recipe from "./Recipe";

const Stack = createNativeStackNavigator();

const App = function() {
    const screenOptions = { animationTypeForReplace: "push", animation: "none" };

    return (
        <NavigationContainer>
            <StatusBar animated={true} backgroundColor="#5F9F5A" barStyle="light-content" showHideTransition="fade" hidden={false}/>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} options={screenOptions}/>
                <Stack.Screen name="Add Recipe" component={AddRecipe} options={screenOptions}/>
                <Stack.Screen name="Profile" component={Profile} options={screenOptions}/>
                <Stack.Screen name="Recipe" component={Recipe} options={screenOptions}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;