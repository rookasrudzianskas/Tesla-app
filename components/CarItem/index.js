import React from 'react';
import {View, Text, ImageBackground, Image} from "react-native";
import modelX from "../../assets/images/ModelX.jpeg";
import {StatusBar} from "expo-status-bar";
import styles from "./styles";
import StyledButton from "../StyledButton";
import cars from "../CarsList/cars";

const CarItem = (props) => {

    const {name, tagline, image, taglineCTA} = props.car;
    console.log(name);
    console.log(tagline);
    console.log(taglineCTA);

    return (
            <View style={styles.carContainer}>
                {/*<ImageBackground source={image} style={styles.image}>*/}
                    <View style={styles.titles}>
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.subtitle}>{tagline}<Text style={styles.subtitleCTA}>{" "}{taglineCTA}</Text></Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <StyledButton type="primary" content={"Custom Order"} onPress={() => console.log("")} />
                        <StyledButton type="secondary" content={"Existing Inventory"} onPress={() => console.log("")} />
                    </View>
                {/*</ImageBackground>*/}
            </View>
    );
};

export default CarItem;
