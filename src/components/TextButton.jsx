import React, { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const TextButton = function({ title, onPress, style, titleStyle, pressedStyle }) {
    const [pressed, setPressed] = useState(false);

    return (
        <Pressable 
            onPress={onPress} 
            onPressIn={() => setPressed(true)} 
            onPressOut={() => setPressed(false)} 
            style={[ styles.pressable, style, pressed && pressedStyle ]}>

            <Text style={[ styles.text, titleStyle ]}>{title}</Text>
            
        </Pressable>
    );
};

const styles = StyleSheet.create({
    pressable: {
        borderRadius: 3,
        paddingHorizontal: 10,
        paddingVertical: 12
    },

    text: {
        textAlign: "center",
        textTransform: "uppercase",
        fontWeight: "bold"
    }
});

export default TextButton;