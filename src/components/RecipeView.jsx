import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Ingredient from "./Ingredient";
import Instruction from "./Instruction";

const RecipeView = function({ recipe }) {
    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState([]);

    const source = { uri: "http://192.168.88.16:8000/images/recipes/" + recipe.recipeImage };

    const getIngredients = function() {
        fetch("http://192.168.88.16:8000/api/ingredients/" + recipe.recipeId)
            .then(response => response.json()
            .then(res => {
                if(res.error <= 0)
                    setIngredients(res.data);
                else console.log(res);
            }).catch(error => console.log(error)));
    };

    const getInstructions = function() {
        fetch("http://192.168.88.16:8000/api/instructions/" + recipe.recipeId)
            .then(response => response.json()
            .then(res => {
                if(res.error <= 0)
                    setInstructions(res.data);
                else console.log(res);
            }).catch(error => console.log(error)));
    };

    useEffect(() => {
        getIngredients();
        getInstructions();
    }, []);

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
            <View style={styles.ingredientsView}>
                <Text style={styles.ingredientsTitleText}>Ingredients</Text>
                <Text style={styles.ingredientsTwoDotsText}>:</Text>
                {ingredients.map((ingredient, index) => 
                <Ingredient key={ingredient.ingredientId} ingredient={ingredient} index={index} length={ingredients.length}/>)}
            </View>
            <View style={styles.instructionsView}>
                <View style={styles.instructionsTitleSubView}>
                    <Text style={styles.instructionsTitleText}>Instructions</Text>
                    <Text style={styles.instructionsTwoDotsText}>:</Text>
                </View>
                <View style={styles.instructionsSubView}>
                    {instructions.map(instruction => 
                    <Instruction key={instruction.instructionId} instruction={instruction}/>)}
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