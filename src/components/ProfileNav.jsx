import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Link from "./Link";

const ProfileNav = function({ getRecipes, getFavorites }) {
    const [isActive, setIsActive] = useState({ myRecipes: true, myFavorites: false });

    const pressMyRecipes = function() {
        isActive.myRecipes = true;
        isActive.myFavorites = false;
        setIsActive({...isActive});
        getRecipes();
    };

    const pressMyFavorites = function() {
        isActive.myRecipes = false;
        isActive.myFavorites = true;
        setIsActive({...isActive});
        getFavorites();
    };

    useEffect(() => {
        if(isActive.myRecipes && !isActive.myFavorites)
            getRecipes();
        else if(!isActive.myRecipes && isActive.myFavorites)
            getFavorites();
    }, []);

    return (
        <View style={styles.container}>
            <Link title="My Recipes" style={[ styles.myRecipes, isActive.myRecipes && styles.activeLink ]} onPress={pressMyRecipes}/>
            <Link title="My Favorites" style={[ styles.myFavorites, isActive.myFavorites && styles.activeLink ]} onPress={pressMyFavorites}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },

    myRecipes: {
        color: "black",
        fontWeight: "bold"
    },

    myFavorites: {
        color: "black",
        fontWeight: "bold"
    },

    activeLink: {
        borderBottomWidth: 3,
        borderBottomColor: "#5F9F5A",
        paddingBottom: 5
    }
});

export default ProfileNav;