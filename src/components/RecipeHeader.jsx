import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "./IconButton";
import { faArrowLeft, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const RecipeHeader = function({ navigation, recipe }) {
    const [edit, setEdit] = useState(false);

    const icon = { size: 23, color: "white" };

    const goBack = function() {
        navigation.push("Home");
    };

    const editRecipe = function() {
        navigation.push("Edit Recipe", { recipe: recipe.recipeId });
    };

    const refreshEdit = function() {
        fetch("http://192.168.88.16:8000/api/user/auth")
            .then(response => response.json()
            .then(res => {
                if(res.error <= 0) {
                    if(recipe != null && recipe.recipeAuthor.userId == res.data.userId)
                        setEdit(true);
                }
            }).catch(error => console.log(error)));
    };

    useEffect(() => refreshEdit(), [recipe]);

    return (
        <View style={styles.container}>
            <View style={styles.backView}>
                <IconButton icon={faArrowLeft} size={icon.size} color={icon.color} onPress={goBack}/>
            </View>
            <View style={styles.titleView}>
                <Text style={styles.titleText}>Recipe</Text>
            </View>
            <View style={styles.blankView}>
                {edit && <IconButton icon={faPenToSquare} size={icon.size - 3} color={icon.color} onPress={editRecipe}/>}
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

export default RecipeHeader;