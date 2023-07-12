import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "./IconButton";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const HomeHeader = function() {
    const icon = { size: 23, color: "white" };

    const onPress = function() {
        console.log("SEARCHING...");
    };

    return (
        <View style={styles.container}>
            <View style={styles.brandView}>
                <Text style={styles.brandText}>Bread on Board</Text>
            </View>
            <View style={styles.searchView}>
                <IconButton icon={faMagnifyingGlass} size={icon.size} color={icon.color} onPress={onPress}/>
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