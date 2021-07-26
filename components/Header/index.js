import React from 'react';
import {Image, View} from "react-native";
import styles from "./style";

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
            <Image style={styles.menu} source={require('../../assets/images/menu.png')} />
        </View>
    );
};

export default Header;
