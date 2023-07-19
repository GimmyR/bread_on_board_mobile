import React from "react";
import { StyleSheet, Text } from "react-native";

const Ingredient = function({ ingredient, index, length }) {
    return (
        <Text style={styles.ingredientText}>
            {ingredient.ingredientDescription}{(index < length - 1) && <Text>, </Text>}
        </Text>
    );
};

const styles = StyleSheet.create({
    ingredientText: {
        color: "#696969"
    }
});

export default Ingredient;