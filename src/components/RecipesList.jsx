import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import RecipeItem from "./RecipeItem";

const RecipesList = function() {
    const [recipes, setRecipes] = useState([]);

    const getAllRecipes = function() {
        fetch("http://192.168.88.16:8000/api/recipes")
            .then(response => response.json()
            .then(res => {
                if(res.error <= 0) {
                    setRecipes(res.data);
                } else console.log(res);
            }).catch(error => console.log(error)));
    };

    useEffect(() => getAllRecipes(), []);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.recipesView}>
                {recipes.map(recipe => <RecipeItem key={recipe.recipeId} recipe={recipe}/>)}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20
    },

    recipesView: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    }
});

export default RecipesList;