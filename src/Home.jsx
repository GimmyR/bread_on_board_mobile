import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Navbar from "./components/Navbar";

const Home = function({ navigation }) {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Home is here.</Text>
            <Navbar navigation={navigation} active="home"/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    text: {
        color: "#A91515"
    }
});

export default Home;