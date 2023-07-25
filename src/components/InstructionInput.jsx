import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import TextButton from "./TextButton";

const InstructionInput = function({ array, index, placeholder, onChangeText, style, remove }) {
    return (
        <View style={[styles.container, style]}>
            <TextInput value={array[index].instructionDetails} onChangeText={text => onChangeText(index, text)} style={styles.textInput} placeholder={placeholder} placeholderTextColor={ "#5E5E5E" }/>
            <TextButton title="Delete" style={styles.textButton} titleStyle={styles.textButtonTitle} onPress={remove}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row"
    },

    textInput: {
        flex: 5,
        fontSize: 13,
        color: "#5E5E5E",
        backgroundColor: "#CECECE",
        borderRadius: 3,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        paddingHorizontal: 10,
        paddingVertical: 5
    },

    textButton: {
        flex: 1,
        backgroundColor: "#FFE900",
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
    },

    textButtonTitle: {
        color: "black"
    }
});

export default InstructionInput;