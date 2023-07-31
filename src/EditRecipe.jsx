import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Navbar from "./components/Navbar";
import TitleInput from "./components/TitleInput";
import ImageInput from "./components/ImageInput";
import TextButton from "./components/TextButton";
import IngredientInput from "./components/IngredientInput";
import InstructionInput from "./components/InstructionInput";
import EditRecipeHeader from "./components/EditRecipeHeader";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const EditRecipe = function({ navigation, route }) {
    const [recipe, setRecipe] = useState({});
    const [title, setTitle] = useState(null);
    const [image, setImage] = useState({ type: null, content: null });
    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState([]);
    const [saveRecipeLoading, setSaveRecipeLoading] = useState(false);

    const addIngredient = function() {
        ingredients.push({ ingredientDescription: "" });
        setIngredients([...ingredients]);
    };

    const addInstruction = function() {
        instructions.push({ instructionDetails: "" });
        setInstructions([...instructions]);
    };

    const editIngredient = function(index, value) {
        ingredients[index].ingredientDescription = value;
        setIngredients([...ingredients]);
    };

    const editInstruction = function(index, value) {
        instructions[index].instructionDetails = value;
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

    const getIngredients = function() {
        fetch("http://192.168.88.16:8000/api/ingredients/" + route.params.recipe)
            .then(response => response.json()
            .then(res => {
                if(res.error <= 0)
                    setIngredients(res.data);
            }).catch(error => console.log(error)));
    };

    const getInstructions = function() {
        fetch("http://192.168.88.16:8000/api/instructions/" + route.params.recipe)
            .then(response => response.json()
            .then(res => {
                if(res.error <= 0)
                    setInstructions(res.data);
            }).catch(error => console.log(error)));
    };

    const getRecipe = function() {
        fetch("http://192.168.88.16:8000/api/recipe/" + route.params.recipe)
            .then(response => response.json()
            .then(res => {
                if(res.error <= 0) {
                    setRecipe(res.data);
                    getIngredients();
                    getInstructions();
                }
            }).catch(error => console.log(error)));
    };

    const saveRecipe = function() {
        setSaveRecipeLoading(true);

        const json = {
            title: title,
            image: image,
            ingredients: ingredients,
            instructions: instructions
        };

        fetch("http://192.168.88.16:8000/api/edit-recipe/" + recipe.recipeId, {
            method: "POST",
            body: JSON.stringify(json)
        }).then(response => response.json()
            .then(res => {
                setSaveRecipeLoading(false);
                if(res.error <= 0)
                    navigation.push("Recipe", { recipe: res.data });
            }).catch(error => { 
                setSaveRecipeLoading(false);
                console.log(error);
            }));
    };

    const checkAuth = function() {
        fetch("http://192.168.88.16:8000/api/user/auth")
            .then(response => response.json()
            .then(res => {
                if(res.error <= 0) {
                    if(res.data == null)
                        navigation.push("Profile", { redirectTo: "Add Recipe" });
                    else getRecipe();
                } else console.log(res);
            }).catch(error => console.log(error)));
    };

    useEffect(() => checkAuth(), []);

    return (
        <SafeAreaView style={styles.container}>
            <EditRecipeHeader navigation={navigation} recipe={recipe}/>
            <ScrollView style={styles.scrollView}>
                <View style={styles.titleView}>
                    <Text style={styles.labelText}>Recipe Title</Text>
                    <TitleInput value={recipe.recipeTitle} onChangeText={setTitle}/>
                </View>
                <View style={styles.imageView}>
                    <Text style={styles.labelText}>Recipe Image</Text>
                    <ImageInput onChangeText={setImage}/>
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
                <TextButton style={styles.saveRecipe} pressedStyle={styles.saveRecipePressed} onPress={saveRecipe} loading={saveRecipeLoading} loadingColor={saveRecipeTitle.color}>
                    <Text style={styles.saveRecipeTitle}>Save Recipe</Text>
                </TextButton>
            </View>
            <Navbar navigation={navigation}/>
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

export default EditRecipe;