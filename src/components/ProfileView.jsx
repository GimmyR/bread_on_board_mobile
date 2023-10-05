import React, { useEffect, useState } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import TextButton from "./TextButton";
import ProfileNav from "./ProfileNav";
import RecipeItem from "./RecipeItem";
import FavoriteItem from "./FavoriteItem";
import { serverURL } from "../helpers";

const ProfileView = function({ user, setUser, profileId, navigation }) {
    const [profile, setProfile] = useState(null);
    const [recipes, setRecipes] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const [logoutLoading, setLogoutLoading] = useState(false);

    const logout = function() {
        setLogoutLoading(true);
        fetch(serverURL + "/user/logout")
            .then(response => response.json()
            .then(res => {
                if(!res.error) {
                    setLogoutLoading(false);
                    setUser(res.data);
                } else console.log(res);
            }).catch(error => console.log(error)));
    };

    const getProfile = function() {
        if(profileId == undefined || profileId == null)
            setProfile({...user});
        else fetch(serverURL + "/api/user/profile/" + profileId)
                .then(response => response.json()
                .then(res => {
                    if(!res.error)
                        setProfile(res.data);
                    else console.log(res);
                }).catch(error => console.log(error)));
    };

    const getRecipes = function() {
        setRecipes([]);
        setFavorites([]);

        var userId = user.id;
        if(profileId != undefined && profileId != null)
            userId = profileId;
            
        fetch(serverURL + "/recipes/" + userId)
            .then(response => response.json()
            .then(res => {
                if(!res.error)
                    setRecipes(res.data);
                else console.log(res);
            }).catch(error => console.log(error)));
    };

    const getFavorites = function() {
        setRecipes([]);
        setFavorites([]);

        fetch(serverURL + "/favorites/" + user.id)
            .then(response => response.json()
            .then(res => {
                if(!res.error)
                    setFavorites(res.data);
                else console.log(res);
            }).catch(error => console.log(error)));
    };

    useEffect(() => {
        getProfile();
        getRecipes();
    }, []);

    if(profile != null)
        return (
            <View style={styles.container}>
                <View style={styles.informationsView}>
                    <View style={styles.pictureView}>
                        {profile.image == null ?
                        <Text style={styles.initialText}>{profile.name.charAt(0).toUpperCase()}</Text> :
                        <Image src={serverURL + "/storage/" + profile.image }/>}
                    </View>
                    <View style={styles.usernameView}>
                        <Text style={styles.usernameText}>{profile.name}</Text>
                        {user.id == profile.id ?
                        <TextButton style={styles.textButton} pressedStyle={styles.pressedTextButton} onPress={logout} loading={logoutLoading} loadingColor={styles.titleTextButton.color}>
                            <Text style={styles.titleTextButton}>Logout</Text>
                        </TextButton> :
                        <TextButton style={styles.textButton} pressedStyle={styles.pressedTextButton}>
                            <Text style={styles.titleTextButton}>Follow</Text>
                        </TextButton>}
                    </View>
                </View>
                
                {user.id == profile.id &&
                <View style={styles.navView}>
                    <ProfileNav getRecipes={getRecipes} getFavorites={getFavorites}/>
                </View>}
                
                <ScrollView style={styles.recipesScrollView}>
                    <View style={styles.recipesView}>
                        {recipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} navigation={navigation}/>)}
                        {favorites.map(favorite => <FavoriteItem key={favorite.id} recipe={favorite.recipe} navigation={navigation} refreshFavorites={getFavorites}/>)}
                    </View>
                </ScrollView>
            </View>
        );
    else return null;
};

const styles = StyleSheet.create({
    container: {

    },

    informationsView: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 10
    },

    pictureView: {
        width: 80,
        height: 80,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#5F9F5A",
        borderRadius: 50
    },

    initialText: {
        fontSize: 40,
        color: "white"
    },

    usernameView: {
        paddingHorizontal: 10
    },

    usernameText: {
        color: "#000000",
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 5,
        width: 100,
        textAlign: "left"
    },

    textButton: {
        backgroundColor: "#5F9F5A",
        width: 100,
        paddingVertical: 7,
        marginBottom: 10
    },

    titleTextButton: {
        textTransform: "uppercase",
        fontWeight: "bold",
        color: "#FFFFFF"
    },

    pressedTextButton: {
        backgroundColor: "#4F824B"
    },

    navView: {

    },

    recipesScrollView: {
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

export default ProfileView;