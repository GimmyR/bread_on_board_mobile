import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Navbar from "./components/Navbar";
import HomeHeader from "./components/HomeHeader";

const Home = function({ navigation }) {
    return(
        <SafeAreaView style={styles.container}>
            <HomeHeader/>
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
    }
});

export default Home;