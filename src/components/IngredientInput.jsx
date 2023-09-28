import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import TextButton from "./TextButton";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const IngredientInput = function({ array, index, placeholder, onChangeText, style, remove }) {
    return (
        <View style={[styles.container, style]}>
            <TextInput value={array[index].description} onChangeText={text => onChangeText(index, text)} style={styles.textInput} placeholder={placeholder} placeholderTextColor={ "#5E5E5E" }/>
            <TextButton style={styles.textButton} onPress={remove}>
                <FontAwesomeIcon icon={faMinus} color={styles.textButtonTitle.color} size={15}/>
            </TextButton>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row"
    },

    textInput: {
        flex: 8,
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

export default IngredientInput;