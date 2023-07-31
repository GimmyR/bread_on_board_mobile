import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Navbar from "./components/Navbar";
import HomeHeader from "./components/HomeHeader";
import RecipeItem from "./components/RecipeItem";

const Home = function({ navigation }) {
    const [search, setSearch] = useState(null);
    const [recipes, setRecipes] = useState([]);

    const getAllRecipes = function() {
        fetch("http://192.168.88.16:8000/api/recipes", {
            method: "POST",
            body: JSON.stringify({ search: search })
        }).then(response => response.json()
            .then(res => {
                if(res.error <= 0) {
                    setRecipes(res.data);
                } else console.log(res);
            }).catch(error => console.log(error)));
    };

    useEffect(() => getAllRecipes(), [search]);

    return(
        <SafeAreaView style={styles.container}>
            <HomeHeader search={search} setSearch={setSearch} getRecipes={getAllRecipes}/>
            <ScrollView style={styles.scrollView}>
                <View style={styles.recipesView}>
                    {recipes.map(recipe => <RecipeItem key={recipe.recipeId} recipe={recipe} navigation={navigation}/>)}
                </View>
            </ScrollView>
            <Navbar navigation={navigation} active="home"/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E7E7E7"
    },

    text: {
        color: "#A91515"
    },

    scrollView: {
        paddingVertical: 20,
        paddingHorizontal: 20
    },

    recipesView: {
        flexDirection: "row",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        columnGap: 20,
        rowGap: 20
    }
});

export default Home;