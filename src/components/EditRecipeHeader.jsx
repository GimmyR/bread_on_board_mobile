import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import IconButton from "./IconButton";
import { faArrowLeft, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { serverURL } from "../helpers";

const EditRecipeHeader = function({ navigation, recipe }) {
    const icon = { size: 23, color: "white" };

    const goBack = function() {
        navigation.push("Recipe", { recipe: recipe.id });
    };

    const removeRecipe = function() {
        axios.get(serverURL + "/api/remove-recipe/" + recipe.id)
            .then(response => {
                if(!response.data.error)
                    navigation.push("Home");
                else console.log(response.data.message);
            }).catch(error => console.log(error));
    };

    const confirmRemove = function() {
        Alert.alert("Confirmation", "Do you really wanna remove this ?", [
            { text: "No" },
            { text: "Yes", onPress: removeRecipe }
        ]);
    };

    return (
        <View style={styles.container}>
            <View style={styles.backView}>
                <IconButton icon={faArrowLeft} size={icon.size} color={icon.color} onPress={goBack}/>
            </View>
            <View style={styles.titleView}>
                <Text style={styles.titleText}>Edit Recipe</Text>
            </View>
            <View style={styles.blankView}>
                <IconButton icon={faTrashCan} size={icon.size - 2} color={icon.color} onPress={confirmRemove}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#5F9F5A",
        flexDirection: "row",
        alignItems: "center",
        height: 50
    },

    backView: {
        flex: 1,
        marginTop: 2,
        flexDirection: "row",
        justifyContent: "center"
    },

    titleView: {
        flex: 4,
        flexDirection: "row",
        justifyContent: "center"
    },

    titleText: {
        fontWeight: "bold",
        fontSize: 25,
        color: "#FFE16F"
    },

    blankView: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center"
    }
});

export default EditRecipeHeader;