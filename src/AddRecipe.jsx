import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Navbar from "./components/Navbar";

const AddRecipe = function({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Add recipe here.</Text>
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