import React from "react";
import { StyleSheet, View } from "react-native";
import { faHouse, faCirclePlus, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import IconButton from "./IconButton";

const Navbar = function({ navigation, active }) {
    const iconColor = "white";
    const iconColorActive = "#FFE16F";
    const iconSize = 38;

    return (
        <View style={styles.container}>
            <IconButton icon={faHouse} color={active == "home" ? iconColorActive : iconColor} size={iconSize} onPress={() => navigation.push("Home")}/>
            <IconButton icon={faCirclePlus} color={active == "add-recipe" ? iconColorActive : iconColor} size={iconSize} onPress={() => navigation.push("Add Recipe")}/>
            <IconButton icon={faCircleUser} color={active == "profile" ? iconColorActive : iconColor} size={iconSize} onPress={() => navigation.push("Profile")}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#5F9F5A",
        height: 60,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0
    }
});

export default Navbar;