import React from "react";
import { Button, ScrollView, Text } from "react-native";

const ProfileView = function({ setUser }) {
    const logout = function() {
        fetch("http://192.168.88.16:8000/api/user/logout")
            .then(response => response.json()
            .then(res => {
                if(res.error <= 0)
                    setUser(res.data);
                else console.log(res);
            }).catch(error => console.log(error)));
    };

    return (
        <ScrollView>
            <Button title="logout" onPress={logout}/>
        </ScrollView>
    );
};

export default ProfileView;