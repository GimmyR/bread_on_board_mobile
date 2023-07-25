import React, { useState } from "react";
import { Modal, ScrollView, StyleSheet, Text, View } from "react-native";
import UsernameInput from "./UsernameInput";
import PasswordInput from "./PasswordInput";
import TextButton from "./TextButton";

const Login = function({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = function() {
        const user = { username: username, password: password };
        fetch("http://192.168.88.16:8000/api/user/login", {
            method: "POST",
            body: JSON.stringify(user)
        }).then(response => response.json()
            .then(res => {
                if(res.error <= 0)
                    setUser(res.data);
                else console.log(res);
            }).catch(error => console.log(error)));
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.usernameView}>
                <Text style={styles.usernameText}>Username</Text>
                <UsernameInput value={username} onChangeText={setUsername}/>
            </View>
            <View style={styles.passwordView}>
                <Text style={styles.passwordText}>Password</Text>
                <PasswordInput value={password} onChangeText={setPassword}/>
            </View>
            <TextButton title="Login" onPress={login} style={styles.loginTextButton} titleStyle={styles.loginTitleTextButton} pressedStyle={styles.pressedLoginTextButton}/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    },

    usernameView: {
        marginTop: 10,
        marginBottom: 10
    },

    usernameText: {
        color: "#5F9F5A",
        fontWeight: "bold",
        marginBottom: 5
    },

    passwordView: {
        marginBottom: 20
    },

    passwordText: {
        color: "#5F9F5A",
        fontWeight: "bold",
        marginBottom: 5
    },

    loginTextButton: {
        backgroundColor: "#5F9F5A"
    },

    loginTitleTextButton: {
        color: "#FFE16F"
    },

    pressedLoginTextButton: {
        backgroundColor: "#599155"
    }
});

export default Login;