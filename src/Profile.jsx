import React from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";
import Navbar from "./components/Navbar";
import ProfileHeader from "./components/ProfileHeader";

const Profile = function({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ProfileHeader/>
            <Navbar navigation={navigation} active="profile"/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    text: {
        color: "blue"
    }
});

export default Profile;