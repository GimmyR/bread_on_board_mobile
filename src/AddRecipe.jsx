import React, { useEffect, useState } from "react";
import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Navbar from "./components/Navbar";
import AddRecipeHeader from "./components/AddRecipeHeader";
import TitleInput from "./components/TitleInput";
import ImageInput from "./components/ImageInput";
import TextButton from "./components/TextButton";
import IngredientInput from "./components/IngredientInput";
import InstructionInput from "./components/InstructionInput";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { serverURL } from "./helpers";
import axios from "axios";

const AddRecipe = function({ navigation }) {
    const [recipeTitle, setRecipeTitle] = useState("");
    const [recipeImage, setRecipeImage] = useState(null);
    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState([]);
    const [saveRecipeLoading, setSaveRecipeLoading] = useState(false);

    const addIngredient = function() {
        ingredients.push({ description: "" });
        setIngredients([...ingredients]);
    };

    const addInstruction = function() {
        instructions.push({ details: "" });
        setInstructions([...instructions]);
    };

    const editIngredient = function(index, value) {
        ingredients[index].description = value;
        setIngredients([...ingredients]);
    };

    const editInstruction = function(index, value) {
        instructions[index].details = value;
        setInstructions([...instructions]);
    };

    const removeIngredient = function(index) {
        ingredients.splice(index, 1);
        setIngredients([...ingredients]);
    };

    const removeInstruction = function(index) {
        instructions.splice(index, 1);
        setInstructions([...instructions]);
    };

    const createFormData = function(token) {
        const data = new FormData();

        data.append("_token", token);
        data.append("title", recipeTitle);

        if(recipeImage) {
            data.append("image", {
                name: recipeImage.fileName,
                type: recipeImage.type,
                uri: Platform.OS === "ios" ? recipeImage.uri.replace("file://", "") : recipeImage.uri
            });
        }

        data.append("ingredients", JSON.stringify(ingredients));
        data.append("instructions", JSON.stringify(instructions));

        return data;
    };

    const saveRecipe = function() {
        setSaveRecipeLoading(true);

        axios.get(serverURL + "/api/user/csrf-token")
            .then(response1 => {
                axios.post(serverURL + "/api/add-recipe", createFormData(response1.data), {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }).then(response2 => {

                    setSaveRecipeLoading(false);
                    if(!response2.data.error)
                        navigation.push("Recipe", { recipe: response2.data.data });
                    else console.log("ERROR3: ", response2.data);
                    
                }).catch(error2 => console.log("ERROR2: ", error2));
            }).catch(error1 => console.log("ERROR1: ", error1));
    };

    const checkAuth = function() {
        fetch(serverURL + "/user/auth")
            .then(response => response.json()
            .then(res => {
                if(!res.error) {
                    if(res.data == null)
                        navigation.push("Profile", { redirectTo: "Add Recipe" });
                } else console.log(res);
            }).catch(error => console.log(error)));
    };

    useEffect(() => checkAuth(), []);

    return (
        <SafeAreaView style={styles.container}>
            <AddRecipeHeader/>
            <ScrollView style={styles.scrollView}>
                <View style={styles.titleView}>
                    <Text style={styles.labelText}>Recipe Title</Text>
                    <TitleInput value={recipeTitle} onChangeText={setRecipeTitle}/>
                </View>
                <View style={styles.imageView}>
                    <Text style={styles.labelText}>Recipe Image</Text>
                    <ImageInput value={recipeImage} onChangeText={setRecipeImage}/>
                </View>
                <View style={styles.addIngredientView}>
                    {ingredients.map((ingredient, index) => 
                    <IngredientInput key={index} array={ingredients} index={index} onChangeText={editIngredient} remove={() => removeIngredient(index)} placeholder={ "Ingredient #" + (index + 1) } style={styles.ingredientInput}/>)}
                    <TextButton style={styles.addButton} onPress={addIngredient}>
                        <FontAwesomeIcon icon={faPlus} color={styles.addButtonTitle.color} size={15} style={styles.addButtonIcon}/>
                        <Text style={styles.addButtonTitle}>Add ingredient</Text>
                    </TextButton>
                </View>
                <View style={styles.addInstructionView}>
                    {instructions.map((instruction, index) => 
                    <InstructionInput key={index} array={instructions} index={index} onChangeText={editInstruction} remove={() => removeInstruction(index)} placeholder={ "Instruction #" + (index + 1) } style={styles.instructionInput}/>)}
                    <TextButton style={styles.addButton} onPress={addInstruction}>
                        <FontAwesomeIcon icon={faPlus} color={styles.addButtonTitle.color} size={15} style={styles.addButtonIcon}/>
                        <Text style={styles.addButtonTitle}>Add instruction</Text>
                    </TextButton>
                </View>
            </ScrollView>
            <View style={styles.saveRecipeView}>
                <TextButton style={styles.saveRecipe} pressedStyle={styles.saveRecipePressed} onPress={saveRecipe} loading={saveRecipeLoading} loadingColor={styles.saveRecipeTitle.color}>
                    <Text style={styles.saveRecipeTitle}>Save Recipe</Text>
                </TextButton>
            </View>
            <Navbar navigation={navigation} active="add-recipe"/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    scrollView: {
        paddingHorizontal: 10
    },

    titleView: {
        marginTop: 5,
        marginBottom: 10
    },

    labelText: {
        color: "#5F9F5A",
        fontWeight: "bold",
        marginBottom: 5,
        marginLeft: 3
    },

    imageView: {
        marginBottom: 20
    },

    addButton: {
        backgroundColor: "#878787"
    },

    addButtonIcon: {
        marginRight: 3
    },

    addButtonTitle: {
        textTransform: "uppercase",
        fontWeight: "bold",
        color: "white"
    },

    addIngredientView: {
        marginBottom: 20
    },

    ingredientInput: {
        marginBottom: 10
    },

    instructionInput: {
        marginBottom: 10
    },

    addInstructionView: {
        marginBottom: 120
    },

    saveRecipeView: {
        position: "absolute",
        bottom: 60,
        left: 0,
        right: 0,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderTopColor: "#D8D8D8",
        backgroundColor: "white"
    },

    saveRecipe: {
        backgroundColor: "#5F9F5A"
    },

    saveRecipeTitle: {
        textTransform: "uppercase",
        fontWeight: "bold",
        color: "#FFE16F"
    },

    saveRecipePressed: {
        backgroundColor: "#548750"
    }
});

export default AddRecipe;