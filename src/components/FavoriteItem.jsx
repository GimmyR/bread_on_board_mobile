import React, { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Link from "./Link";
import IconButton from "./IconButton";
import { faHeart as faHeartR } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartS } from "@fortawesome/free-solid-svg-icons";

const FavoriteItem = function({ recipe, navigation, refreshFavorites }) {
    const [isFavorite, setIsFavorite] = useState(false);

    const source = { uri: "http://192.168.88.16:8000/images/recipes/" + recipe.recipeImage };

    const onPressRecipe = function() {
        navigation.push("Recipe", { recipe: recipe.recipeId });
    };

    const onPressAuthor = function() {
        navigation.push("Profile", { profile: recipe.recipeAuthor.userId });
    };

    const addFavorite = function() {
        fetch("http://192.168.88.16:8000/api/" + (isFavorite ? "remove-favorite" : "add-favorite") + "/" + recipe.recipeId)
            .then(response => response.json()
            .then(res => {
                if(res.error <= 0) {
                    setIsFavorite(!isFavorite);
                    refreshFavorites();
                } else console.log(res);
            }).catch(error => console.log(error)));
    };

    const checkFavorite = function() {
        fetch("http://192.168.88.16:8000/api/is-favorite/" + recipe.recipeId)
            .then(response => response.json()
            .then(res => {
                if(res.error <= 0)
                    setIsFavorite(res.data);
            }).catch(error => console.log(error)));
    };

    useEffect(() => checkFavorite(), []);
    
    return (
        <View style={styles.container}>
            <Pressable onPress={onPressRecipe}>
                <View style={styles.recipeTitleView}>
                    <Text style={styles.recipeTitleText} numberOfLines={1}>{recipe.recipeTitle}</Text>
                </View>
                <View>
                    <Image source={source} style={styles.recipeImage}/>
                </View>
            </Pressable>
            <View style={styles.recipeFavoriteAuthorView}>
                <View style={styles.recipeFavoriteView}>
                    {isFavorite ?
                    <IconButton icon={faHeartS} color="#5F9F5A" size={20} onPress={addFavorite}/> :
                    <IconButton icon={faHeartR} color="#000000" size={20} onPress={addFavorite}/>}
                </View>
                <View style={styles.recipeAuthorView}>
                    <Text style={styles.recipeByText}>by</Text>
                    <Link title={recipe.recipeAuthor.userName} style={styles.recipeAuthorText} onPress={onPressAuthor}/>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 150,
        backgroundColor: "white"
    },

    recipeTitleView: {
        paddingHorizontal: 10,
        paddingVertical: 5
    },

    recipeTitleText: {
        color: "#5F9F5A",
        fontWeight: "bold",
        fontSize: 17
    },

    recipeImage: {
        height: 100
    },

    recipeFavoriteAuthorView: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 5
    },

    recipeFavoriteView: {
        flex: 1,
        paddingLeft: 10
    },

    recipeAuthorView: {
        flex: 6,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: "row",
        justifyContent: "flex-end"
    },

    recipeByText: {
        fontStyle: "italic",
        fontSize: 12,
        color: "#7B7B7B"
    },

    recipeAuthorText: {
        color: "#B69100",
        marginLeft: 5,
        fontWeight: "bold",
        fontSize: 12
    }
});

export default FavoriteItem;