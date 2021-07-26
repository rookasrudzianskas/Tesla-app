import React from 'react';
import {View, Text, ImageBackground} from "react-native";
import modelX from "../../assets/images/ModelX.jpeg";
import {StatusBar} from "expo-status-bar";
import styles from "./styles";
import StyledButton from "../StyledButton";

const CarItem = (props) => {

    const {name, tagline, image} = props;

    return (
            <View style={styles.carContainer}>
                <ImageBackground source={modelX} style={styles.image}>
                    <StatusBar style="auto" />
                    <View style={styles.titles}>
                        <Text style={styles.title}>Model S</Text>
                        <Text style={styles.subtitle}>Starting at $69.000</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <StyledButton type="primary" content={"Custom Order"} onPress={() => console.log("")} />
                        <StyledButton type="secondary" content={"Existing Inventory"} onPress={() => console.log("")} />
                    </View>
                </ImageBackground>
            </View>
    );
};

export default CarItem;
