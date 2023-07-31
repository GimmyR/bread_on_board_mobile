import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import TextButton from "./TextButton";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const SearchInput = function({ value, onChangeText, closeSearch }) {
    return (
        <View style={styles.container}>
            <TextInput value={value} onChangeText={onChangeText} placeholder="Search recipe" placeholderTextColor="#C4C4C4" style={styles.textInput}/>
            <TextButton style={styles.textButton} pressedStyle={styles.textButtonPressed} onPress={closeSearch}>
                <FontAwesomeIcon icon={faCircleXmark} color={styles.textInput.color}/>
            </TextButton>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 7
    },

    textInput: {
        flex: 8,
        height: 35,
        backgroundColor: "white",
        color: "#8C8C8C",
        paddingHorizontal: 17,
        borderRadius: 20,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
    },

    textButton: {
        flex: 1,
        height: 35,
        backgroundColor: "white",
        borderRadius: 20,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
    },

    textButtonPressed: {
        backgroundColor: "#F5F5F5"
    }
});

export default SearchInput;