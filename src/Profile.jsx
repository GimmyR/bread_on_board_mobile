import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Navbar from "./components/Navbar";
import ProfileHeader from "./components/ProfileHeader";
import Login from "./components/Login";
import ProfileView from "./components/ProfileView";
import { serverURL } from "./helpers";

const Profile = function({ navigation, route }) {
    const [user, setUser] = useState(null);
    const [profileId, setProfileId] = useState(null);

    const isAuth = function() {
        if(route.params != undefined)
            setProfileId(route.params.profile);
            
        fetch(serverURL + "/user/auth")
            .then(response => response.json()
            .then(res => {
                if(res.error <= 0)
                    setUser(res.data);
                else console.log(res);
            }).catch(error => console.log(error)));
    };

    useEffect(() => isAuth(), []);

    return (
        <SafeAreaView style={styles.container}>
            <ProfileHeader/>
            {user != null ? 
            <ProfileView user={user} setUser={setUser} profileId={profileId} navigation={navigation}/> :
            <Login setUser={setUser} navigation={navigation} route={route}/>}
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