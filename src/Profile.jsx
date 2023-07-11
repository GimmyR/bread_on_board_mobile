import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Navbar from "./components/Navbar";

const Profile = function({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Profile is here.</Text>
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