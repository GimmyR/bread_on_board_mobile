import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Link from "./Link";

const RecipeItem = function({ recipe, navigation }) {
    const source = { uri: "http://192.168.88.16:8000/images/recipes/" + recipe.recipeImage };

    const onPressRecipe = function() {
        navigation.push("Recipe", { recipe: recipe.recipeId });
    };

    const onPressAuthor = function() {
        console.log(`GO TO PROFILE: ${recipe.recipeAuthor.userName}`);
    };
    
    return (
        <View style={styles.container}>
            <Pressable onPress={onPressRecipe}>
                <View style={styles.recipeTitleView}>
                    <Text style={styles.recipeTitleText} numberOfLines={1}>{recipe.recipeTitle}</Text>
                </View>
                <View>
                    <Image source={source} style={styles.recipeImage}/>
                </View>
                <View style={styles.recipeAuthorView}>
                    <Text style={styles.recipeByText}>by</Text>
                    <Link title={recipe.recipeAuthor.userName} style={styles.recipeAuthorText} onPress={onPressAuthor}/>  
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 150,
        backgroundColor: "white"
    },

    recipeTitleView: {
        paddingHorizontal: 10,
        paddingVertical: 5
    },

    recipeTitleText: {
        color: "#5F9F5A",
        fontWeight: "bold",
        fontSize: 17
    },

    recipeImage: {
        height: 100
    },

    recipeAuthorView: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: "row",
        justifyContent: "flex-end"
    },

    recipeByText: {
        fontStyle: "italic",
        fontSize: 12,
        color: "#7B7B7B"
    },

    recipeAuthorText: {
        color: "#B69100",
        marginLeft: 5,
        fontWeight: "bold",
        fontSize: 12
    }
});

export default RecipeItem;