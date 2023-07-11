import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();

const App = function() {
    return (
        <NavigationContainer>
            <StatusBar animated={true} backgroundColor="#61dafb" barStyle="dark-content" showHideTransition="fade" hidden={false}/>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ title: "Welcome" }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;