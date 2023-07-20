import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState } from "react";
import { Pressable } from "react-native";

const CheckBox = function({ value, setValue, color, checkedColor, size }) {
    return (
        <Pressable onPress={() => setValue(!value)}>
            <FontAwesomeIcon icon={value ? faCircleCheck : faCircle} color={value ? checkedColor : color} size={size}/>
        </Pressable>
    );
};

export default CheckBox;