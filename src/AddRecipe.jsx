import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Navbar from "./components/Navbar";
import AddRecipeHeader from "./components/AddRecipeHeader";

const AddRecipe = function({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <AddRecipeHeader/>
            <Navbar navigation={navigation} active="add-recipe"/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    text: {
        color: "black"
    }
});

export default AddRecipe;