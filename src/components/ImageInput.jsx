import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import TextButton from "./TextButton";
import DocumentPicker from "react-native-document-picker";

const ImageInput = function({ value, onChangeText, title, style }) {
    const [filename, setFilename] = useState("");

    const pickImage = function() {
        DocumentPicker.pick({ presentationStyle: "fullScreen", type: [ DocumentPicker.types.images ] })
            .then(response => {
                setFilename(response[0].name);

                const xhr = new XMLHttpRequest();
                xhr.onload = function() {
                    const reader = new FileReader();
                    reader.onloadend = function() {
                        onChangeText({
                            type: response[0].type,
                            content: reader.result
                        });
                    }; reader.readAsDataURL(xhr.response);
                };

                xhr.open("GET", response[0].uri);
                xhr.responseType = "blob";
                xhr.send();
            }).catch(error => console.log(error));
    };

    return (
        <View style={styles.container}>
            <TextInput value={filename} onChangeText={setFilename} style={[ styles.textInput, style ]} editable={false}/>
            <TextButton title={title} style={styles.button} titleStyle={styles.buttonTitle} pressedStyle={styles.pressedButton} onPress={pickImage}/>
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

    button: {
        flex: 1,
        backgroundColor: "#5F9F5A",
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    },

    buttonTitle: {
        color: "#FFE16F"
    },

    pressedButton: {
        backgroundColor: "#52894E"
    }
});

export default ImageInput;