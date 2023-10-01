import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "./IconButton";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SearchInput from "./SearchInput";

const HomeHeader = function({ searchRecipe, getAllRecipes }) {
    const [isSearching, setIsSearching] = useState(false);

    const icon = { size: 23, color: "white" };

    const closeSearch = function() {
        getAllRecipes();
        setIsSearching(false);
    };

    return (
        <View style={styles.container}>
            {isSearching ?
            <SearchInput searchRecipe={searchRecipe} closeSearch={closeSearch}/> :
            <>
                <View style={styles.brandView}>
                    <Text style={styles.brandText}>Bread on Board</Text>
                </View>
                <View style={styles.searchView}>
                    <IconButton icon={faMagnifyingGlass} size={icon.size} color={icon.color} onPress={() => setIsSearching(true)}/>
                </View>
            </>}
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

    brandView: {
        flex: 4,
        paddingHorizontal: 20
    },

    brandText: {
        fontWeight: "bold",
        fontSize: 25,
        color: "#FFE16F"
    },

    searchView: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingHorizontal: 20
    }
});

export default HomeHeader;