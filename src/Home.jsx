import React, { useEffect, useState } from "react";
import { ActivityIndicator, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Navbar from "./components/Navbar";
import HomeHeader from "./components/HomeHeader";
import RecipeItem from "./components/RecipeItem";
import { serverURL } from "./helpers";
import axios from "axios";

const Home = function({ navigation }) {
    const [recipes, setRecipes] = useState([]);

    const [refreshing, setRefreshing] = useState(false);

    const getAllRecipes = function() {
        setRecipes([]);
        fetch(serverURL + "/api/all-recipes")
            .then(response => response.json()
            .then(res => {
                if(!res.error) {
                    setRecipes(res.data);
                } else console.log(res);
            }).catch(error => console.log("ERROR: ", error)));
    };

    const searchRecipe = function(search) {
        setRecipes([]);
        axios.get(serverURL + "/api/user/csrf-token")
            .then(res1 => {
                axios.post(serverURL + "/api/search", {
                    _token: res1.data,
                    search: search
                }).then(res2 => {
                    if(!res2.data.error)
                        setRecipes(res2.data.data);
                }).catch(error2 => console.log("ERROR2: ", error2));
            }).catch(error1 => console.log("ERROR1: ", error1));
    };

    useEffect(() => getAllRecipes(), []);

    return(
        <SafeAreaView style={styles.container}>
            <HomeHeader searchRecipe={searchRecipe} getAllRecipes={getAllRecipes}/>
            <ScrollView style={styles.scrollView} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={getAllRecipes}/>}>
                {recipes.length == 0 && <View>
                    <ActivityIndicator size="large" color="#5F9F5A"/>
                </View>}
                <View style={styles.recipesView}>
                    {recipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} navigation={navigation}/>)}
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