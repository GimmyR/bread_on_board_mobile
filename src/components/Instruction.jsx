import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CheckBox from "./CheckBox";

const Instruction = function({ instruction }) {
    const [checked, setChecked] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.checkBoxView}>
                <CheckBox value={checked} setValue={setChecked} color="#000000" checkedColor="#797979" size={20}/>
            </View>
            <View style={styles.instructionDetailsView}>
                <Text style={checked ? styles.instructionDetailsTextChecked : styles.instructionDetailsText}>{instruction.instructionDetails}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5
    },

    checkBoxView: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center"
    },

    instructionDetailsView: {
        flex: 7,
        paddingRight: 15
    },

    instructionDetailsText: {
        color: "black"
    },

    instructionDetailsTextChecked: {
        color: "#797979",
        textDecorationLine: "line-through"
    }
});

export default Instruction;