import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Ingredient from "./Ingredient";
import Instruction from "./Instruction";
import { serverURL } from "../helpers";

const RecipeView = function({ recipe }) {
    
    return (
        <ScrollView>
            <View style={styles.recipeImageView}>
                <Image src={serverURL + "/storage/" + recipe.image} style={styles.recipeImage}/>
                <View style={styles.byAuthorView}>
                    <Text style={styles.byText}>by</Text>
                    <Text style={styles.authorText}>{recipe.user.name}</Text>
                </View>
            </View>
            <View style={styles.titleView}>
                <Text style={styles.titleText}>{recipe.title}</Text>
            </View>
            <View style={styles.ingredientsView}>
                <Text style={styles.ingredientsTitleText}>Ingredients</Text>
                <Text style={styles.ingredientsTwoDotsText}>:</Text>
                {recipe.ingredients.map((ingredient, index) => 
                <Ingredient key={ingredient.id} ingredient={ingredient} index={index} length={recipe.ingredients.length}/>)}
            </View>
            <View style={styles.instructionsView}>
                <View style={styles.instructionsTitleSubView}>
                    <Text style={styles.instructionsTitleText}>Instructions</Text>
                    <Text style={styles.instructionsTwoDotsText}>:</Text>
                </View>
                <View style={styles.instructionsSubView}>
                    {recipe.instructions.map(instruction => 
                    <Instruction key={instruction.id} instruction={instruction}/>)}
                </View>
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
        fontWeight: "bold",
        textShadowColor: "#000000",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 15
    },

    authorText: {
        color: "#FFCC00",
        fontWeight: "bold",
        fontSize: 17,
        textShadowColor: "#000000",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 10
    },

    titleView: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 10
    },

    titleText: {
        color: "#5F9F5A",
        fontWeight: "bold",
        fontSize: 25,
        textDecorationLine: "underline"
    },

    ingredientsView: {
        flexDirection: "row",
        flexWrap: "wrap",
        paddingHorizontal: 10,
        marginBottom: 20
    },

    ingredientsTitleText: {
        color: "#000000",
        textDecorationLine: "underline",
        marginRight: 2
    },

    ingredientsTwoDotsText: {
        color: "#000000",
        marginRight: 5
    },

    instructionsView: {
        
    },

    instructionsTitleSubView: {
        flexDirection: "row",
        marginBottom: 10,
        paddingHorizontal: 10
    },

    instructionsTitleText: {
        color: "#000000",
        textDecorationLine: "underline",
        marginRight: 2
    },

    instructionsTwoDotsText: {
        color: "#000000"
    },

    instructionsSubView: {
        
    }
});

export default RecipeView;