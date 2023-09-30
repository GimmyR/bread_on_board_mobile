import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import TextButton from "./TextButton";
import DocumentPicker from "react-native-document-picker";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import { launchImageLibrary } from "react-native-image-picker";
import RNFS from "react-native-fs";

const ImageInput = function({ value, onChangeText, style }) {
    const [filename, setFilename] = useState("");

    const pickImage = function() {
        /*DocumentPicker.pick({ presentationStyle: "fullScreen", type: [ DocumentPicker.types.images ] })
            .then(response => {
                setFilename(response[0].name);

                const xhr = new XMLHttpRequest();
                xhr.onload = function() {
                    const reader = new FileReader();
                    reader.onloadend = function() {
                        onChangeText(reader.result);
                    }; reader.readAsDataURL(xhr.response);
                };

                xhr.open("GET", response[0].uri);
                xhr.responseType = "blob";
                xhr.send();
            }).catch(error => console.log(error));*/

        launchImageLibrary({
            title: 'Choose an Image',
            base64: true
        }, response => {
            /*RNFS.readFile(response.assets[0].uri, "base64")
                .then(res => onChangeText(res));*/
            setFilename(response.assets[0].fileName);
            onChangeText(response.assets[0]);
        });
    };

    return (
        <View style={styles.container}>
            <TextInput value={filename} onChangeText={setFilename} style={[ styles.textInput, style ]} editable={false}/>
            <TextButton style={styles.button} pressedStyle={styles.pressedButton} onPress={pickImage}>
                <FontAwesomeIcon icon={faFolderOpen} color={styles.buttonTitle.color} size={15}/>
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