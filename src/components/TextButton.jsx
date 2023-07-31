import React, { useState } from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text } from "react-native";

const TextButton = function({ onPress, style, pressedStyle, loading = false, loadingColor, children }) {
    const [pressed, setPressed] = useState(false);

    return (
        <Pressable 
            onPress={onPress} 
            onPressIn={() => setPressed(true)} 
            onPressOut={() => setPressed(false)} 
            style={[ styles.pressable, style, pressed && pressedStyle ]}>

            {loading ?
            <ActivityIndicator color={loadingColor}/> :
            children}
            
        </Pressable>
    );
};

const styles = StyleSheet.create({
    pressable: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,
        paddingHorizontal: 10,
        paddingVertical: 12
    }
});

export default TextButton;