import React, { useEffect, useState } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import TextButton from "./TextButton";

const ProfileView = function({ user, setUser, profileId }) {
    const [profile, setProfile] = useState(null);

    const logout = function() {
        fetch("http://192.168.88.16:8000/api/user/logout")
            .then(response => response.json()
            .then(res => {
                if(res.error <= 0)
                    setUser(res.data);
                else console.log(res);
            }).catch(error => console.log(error)));
    };

    const getProfile = function() {
        if(profileId == undefined || profileId == null)
            setProfile({...user});
        else fetch("http://192.168.88.16:8000/api/profile/" + profileId)
                .then(response => response.json()
                .then(res => {
                    if(res.error <= 0)
                        setProfile(res.data);
                    else console.log(res);
                }).catch(error => console.log(error)));
    };

    useEffect(() => getProfile(), []);

    if(profile != null)
        return (
            <ScrollView style={styles.container}>
                <View style={styles.informationsView}>
                    <View style={styles.pictureView}>
                        {profile.userImage == null ?
                        <Text style={styles.initialText}>{profile.userName.charAt(0).toUpperCase()}</Text> :
                        <Image source={{ uri: "http://192.168.88.16:8000/images/user_accounts/" + profile.userImage }}/>}
                    </View>
                    <View style={styles.usernameView}>
                        <Text style={styles.usernameText}>{profile.userName}</Text>
                        {user.userId == profile.userId ?
                        <TextButton title="Logout" style={styles.textButton} titleStyle={styles.titleTextButton} pressedStyle={styles.pressedTextButton} onPress={logout}/> :
                        <TextButton title="Follow" style={styles.textButton} titleStyle={styles.titleTextButton} pressedStyle={styles.pressedTextButton}/>}
                    </View>
                </View>
                
                {user.userId == profile.userId &&
                <View style={styles.navView}>

                </View>}
                
                <View style={styles.recipesView}>

                </View>
            </ScrollView>
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
        color: "#696969",
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 5,
        width: 100,
        textAlign: "center"
    },

    textButton: {
        backgroundColor: "#5F9F5A",
        width: 100,
        paddingVertical: 7,
        marginBottom: 10
    },

    titleTextButton: {
        color: "#FFFFFF"
    },

    pressedTextButton: {
        backgroundColor: "#4F824B"
    },

    navView: {

    },

    recipesView: {

    }
});

export default ProfileView;