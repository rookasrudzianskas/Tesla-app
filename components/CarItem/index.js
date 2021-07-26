import React from 'react';
import {View, Text, ImageBackground} from "react-native";
import modelX from "../../assets/images/ModelX.jpeg";
import {StatusBar} from "expo-status-bar";
import styles from "./styles";
import StyledButton from "../StyledButton";

const CarItem = (props) => {
    return (
            <View style={styles.carContainer}>
                <ImageBackground source={modelX} style={styles.image}>
                    <StatusBar style="auto" />
                    <View style={styles.titles}>
                        <Text style={styles.title}>Model S</Text>
                        <Text style={styles.subtitle}>Starting at $69.000</Text>
                    </View>
                    <StyledButton type="primary" />
                    <StyledButton type="secondary" />
                </ImageBackground>
            </View>
    );
};

export default CarItem;
