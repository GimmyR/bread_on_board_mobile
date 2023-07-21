import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Navbar from "./components/Navbar";
import ProfileHeader from "./components/ProfileHeader";
import Login from "./components/Login";
import ProfileView from "./components/ProfileView";

const Profile = function({ navigation, route }) {
    const [user, setUser] = useState(null);
    const [profileId, setProfileId] = useState(null);

    const isAuth = function() {
        fetch("http://192.168.88.16:8000/api/user/auth")
            .then(response => response.json()
            .then(res => {
                if(res.error <= 0) {
                    setUser(res.data);
                    if(route.params != undefined)
                        setProfileId(route.params.profile);
                } else console.log(res);
            }).catch(error => console.log(error)));
    };

    useEffect(() => isAuth(), []);

    return (
        <SafeAreaView style={styles.container}>
            <ProfileHeader/>
            {user == null ?
            <Login setUser={setUser}/> :
            <ProfileView user={user} setUser={setUser} profileId={profileId}/>}
            <Navbar navigation={navigation} active="profile"/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Profile;