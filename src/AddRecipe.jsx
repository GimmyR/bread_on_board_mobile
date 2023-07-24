import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Navbar from "./components/Navbar";
import AddRecipeHeader from "./components/AddRecipeHeader";
import TitleInput from "./components/TitleInput";
import ImageInput from "./components/ImageInput";
import TextButton from "./components/TextButton";

const AddRecipe = function({ navigation }) {
    const [recipeTitle, setRecipeTitle] = useState("");
    const [recipeImage, setRecipeImage] = useState(null);

    return (
        <SafeAreaView style={styles.container}>
            <AddRecipeHeader/>
            <ScrollView style={styles.scrollView}>
                <View style={styles.titleView}>
                    <Text style={styles.labelText}>Recipe Title</Text>
                    <TitleInput value={recipeTitle} onChangeText={setRecipeTitle}/>
                </View>
                <View style={styles.imageView}>
                    <Text style={styles.labelText}>Recipe Image</Text>
                    <ImageInput value={recipeImage} onChangeText={setRecipeImage} title="browse"/>
                </View>
                <View style={styles.addIngredientView}>
                    <TextButton title="Add ingredient" style={styles.addButton} titleStyle={styles.addButtonTitle}/>
                </View>
                <View style={styles.addInstructionView}>
                    <TextButton title="Add instruction" style={styles.addButton} titleStyle={styles.addButtonTitle}/>
                </View>
                <TextButton title="Save recipe" style={styles.saveRecipe} titleStyle={styles.saveRecipeTitle}/>
            </ScrollView>
            <Navbar navigation={navigation} active="add-recipe"/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    scrollView: {
        paddingHorizontal: 10
    },

    titleView: {
        marginTop: 5,
        marginBottom: 10
    },

    labelText: {
        color: "#5F9F5A",
        fontWeight: "bold",
        marginBottom: 5,
        marginLeft: 3
    },

    imageView: {
        marginBottom: 20
    },

    addButton: {
        backgroundColor: "#878787"
    },

    addButtonTitle: {
        color: "white"
    },

    addIngredientView: {
        marginBottom: 10
    },

    addInstructionView: {
        marginBottom: 10
    },

    saveRecipe: {
        backgroundColor: "#5F9F5A"
    },

    saveRecipeTitle: {
        color: "#FFE16F"
    },
});

export default AddRecipe;