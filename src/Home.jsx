import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = function() {
    return(
        <View>
            <Text style={styles.text}>Hello, Gimmy !</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: "#A91515"
    }
});

export default Home;