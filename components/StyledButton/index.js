import React from 'react';
import {Text, View, Pressable} from "react-native";
import styles from "./style";

const StyledButton = (props) => {

    const type = props.type;

    const backgroundColor = type === "primary" ? "black" : "white";
    const textColor = type === "primary" ? "white" : "black";

    return (
        <View style={styles.container}>
            <Pressable style={[styles.button, {backgroundColor: backgroundColor}]} onPress={() => {console.log("Pressed")}}>
                <Text style={[styles.text, {color: textColor}]}>Custom Order</Text>
            </Pressable>
        </View>
    );
};

export default StyledButton;
