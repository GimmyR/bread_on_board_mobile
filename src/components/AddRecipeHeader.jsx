import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AddRecipeHeader = function() {
    return (
        <View style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.titleText}>Add Recipe</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#5F9F5A",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 50
    },

    titleView: {},

    titleText: {
        fontWeight: "bold",
        fontSize: 25,
        color: "#FFE16F"
    }
});

export default AddRecipeHeader;