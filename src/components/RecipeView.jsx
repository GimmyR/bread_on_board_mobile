import React, { useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const RecipeView = function({ recipe }) {
    const source = { uri: "http://192.168.88.16:8000/images/recipes/" + recipe.recipeImage };

    return (
        <ScrollView>
            <View style={styles.recipeImageView}>
                <Image source={source} style={styles.recipeImage}/>
                <View style={styles.byAuthorView}>
                    <Text style={styles.byText}>by</Text>
                    <Text style={styles.authorText}>{recipe.recipeAuthor.userName}</Text>
                </View>
            </View>
            <View style={styles.titleView}>
                <Text style={styles.titleText}>{recipe.recipeTitle}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    recipeImageView: {
        flex: 1
    },

    recipeImage: {
        height: 200
    },

    byAuthorView: {
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        bottom: 10,
        right: 10
    },

    byText: {
        marginRight: 5,
        fontWeight: "bold"
    },

    authorText: {
        color: "#FFCC00",
        fontWeight: "bold",
        fontSize: 17
    },

    titleView: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20
    },

    titleText: {
        color: "#5F9F5A",
        fontWeight: "bold",
        fontSize: 25,
        textDecorationLine: "underline"
    }
});

export default RecipeView;