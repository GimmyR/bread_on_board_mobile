import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "./IconButton";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const RecipeHeader = function({ navigation }) {
    const icon = { size: 23, color: "white" };

    const goBack = function() {
        navigation.push("Home");
    };

    return (
        <View style={styles.container}>
            <View style={styles.backView}>
                <IconButton icon={faArrowLeft} size={icon.size} color={icon.color} onPress={goBack}/>
            </View>
            <View style={styles.titleView}>
                <Text style={styles.titleText}>Recipe</Text>
            </View>
            <View style={styles.blankView}></View>
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
        flex: 1
    }
});

export default RecipeHeader;