import React from "react";
import { StyleSheet, TextInput } from "react-native";

const UsernameInput = function({ value, onChangeText, style }) {
    return (
        <TextInput value={value} onChangeText={onChangeText} style={[ styles.textInput, style ]}/>
    );
};

const styles = StyleSheet.create({
    textInput: {
        fontSize: 13,
        color: "#5E5E5E",
        backgroundColor: "#CECECE",
        borderRadius: 3,
        paddingHorizontal: 10,
        paddingVertical: 5
    }
});

export default UsernameInput;