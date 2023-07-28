import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Navbar from "./components/Navbar";
import RecipeHeader from "./components/RecipeHeader";
import RecipeView from "./components/RecipeView";

const Recipe = function({ navigation, route }) {
    const [recipe, setRecipe] = useState(null);

    const getRecipe = function() {
        fetch("http://192.168.88.16:8000/api/recipe/" + route.params.recipe)
            .then(response => response.json()
            .then(res => {
                if(res.error <= 0)
                    setRecipe(res.data);
                else console.log(res);
            }).catch(error => console.log(error)));
    };

    useEffect(() => getRecipe(), []);

    return (
        <SafeAreaView style={styles.container}>
            <RecipeHeader navigation={navigation} recipe={recipe}/>
            {recipe != null && <RecipeView recipe={recipe}/>}
            <Navbar navigation={navigation}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E7E7E7"
    }
});

export default Recipe;