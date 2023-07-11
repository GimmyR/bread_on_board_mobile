import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Pressable } from "react-native";

const IconButton = function({ icon, color, size, onPress }) {
    return (
        <Pressable onPress={onPress}>
            <FontAwesomeIcon icon={icon} color={color} size={size}/>
        </Pressable>
    );
};

export default IconButton;