import React from "react";
import { Pressable, Text } from "react-native";

const Link = function({ title, style, onPress }) {
    return (
        <Pressable onPress={onPress}>
            <Text style={style}>
                {title}
            </Text>
        </Pressable>  
    );
};

export default Link;