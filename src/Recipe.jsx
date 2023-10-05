import React, { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView, StyleSheet, View } from "react-native";
import Navbar from "./components/Navbar";
import RecipeHeader from "./components/RecipeHeader";
import RecipeView from "./components/RecipeView";
import { serverURL } from "./helpers";

const Recipe = function({ navigation, route }) {
    const [recipe, setRecipe] = useState(null);

    const getRecipe = function() {
        fetch(serverURL + "/api/recipe/" + route.params.recipe)
            .then(response => response.json()
            .then(res => {
                if(!res.error)
                    setRecipe(res.data);
                else console.log(res);
            }).catch(error => console.log(error)));
    };

    useEffect(() => getRecipe(), []);

    return (
        <SafeAreaView style={styles.container}>
            <RecipeHeader navigation={navigation} recipe={recipe}/>
            {recipe == null && <View style={styles.activityIndicatorView}>
                <ActivityIndicator size="large" color="#5F9F5A"/>    
            </View>}
            {recipe != null && <RecipeView recipe={recipe}/>}
            <Navbar navigation={navigation}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E7E7E7"
    },

    activityIndicatorView: {
        paddingTop: 20
    }
});

export default Recipe;