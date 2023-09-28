import React, { useState } from "react";
import { Modal, ScrollView, StyleSheet, Text, View } from "react-native";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import TextButton from "./TextButton";
import { serverURL } from "../helpers";
import axios from "axios";

const Login = function({ setUser, navigation, route }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    /*const login = function() {
        const user = { email: email, password: password };
        fetch(serverURL + "/api/user/login", {
            method: "POST",
            body: JSON.stringify(user)
        }).then(response => response.json()
            .then(res => {
                if(res.error <= 0) {
                    if(res.data != null && route.params != undefined && route.params.redirectTo != null)
                        navigation.push(route.params.redirectTo);
                    else setUser(res.data);
                } else console.log(res);
            }).catch(error => console.log(error)));
    };*/

    const handleError2 = function(error) {
        if(error.response) {
            if(error.response.data.errors.email)
                setEmailError(error.response.data.errors.email);
            if(error.response.data.errors.password)
                setPasswordError(error.response.data.errors.password);
        }
    };

    const login = function() {
        setEmailError(null);
        setPasswordError(null);

        axios.get(serverURL + "/api/user/csrf-token")
            .then(response => {
                axios.post(serverURL + "/api/user/login", {
                    _token: response.data,
                    email: email,
                    password: password
                }).then(res => {
                    if(!res.data.error) {
                        if(route.params != undefined && route.params.redirectTo != null)
                            navigation.push(route.params.redirectTo);
                        else setUser();
                    }
                }).catch(error => handleError2(error));
            }).catch(error => console.log("ERROR1: ", error));
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.emailView}>
                <Text style={styles.emailText}>Email</Text>
                <EmailInput value={email} onChangeText={setEmail}/>
                {emailError && <Text style={styles.emailError}>{emailError}</Text>}
            </View>
            <View style={styles.passwordView}>
                <Text style={styles.passwordText}>Password</Text>
                <PasswordInput value={password} onChangeText={setPassword}/>
                {passwordError && <Text style={styles.passwordError}>{passwordError}</Text>}
            </View>
            <TextButton onPress={login} style={styles.loginTextButton} pressedStyle={styles.pressedLoginTextButton}>
                <Text style={styles.loginTitleTextButton}>Login</Text>
            </TextButton>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    },

    emailView: {
        marginTop: 10,
        marginBottom: 10
    },

    emailText: {
        color: "#5F9F5A",
        fontWeight: "bold",
        marginBottom: 5
    },

    emailError: {
        color: "#79AA75",
        marginTop: 3,
        marginLeft: 10
    },

    passwordView: {
        marginBottom: 20
    },

    passwordText: {
        color: "#5F9F5A",
        fontWeight: "bold",
        marginBottom: 5
    },

    passwordError: {
        color: "#79AA75",
        marginTop: 3,
        marginLeft: 10
    },

    loginTextButton: {
        backgroundColor: "#5F9F5A"
    },

    loginTitleTextButton: {
        textTransform: "uppercase",
        fontWeight: "bold",
        color: "#FFE16F"
    },

    pressedLoginTextButton: {
        backgroundColor: "#599155"
    }
});

export default Login;