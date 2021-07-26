import React from 'react';
import {Text, View, Pressable} from "react-native";
import styles from "./style";

const StyledButton = (props) => {

    const type = props.type;

    const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
    const textColor = type === "primary" ? "white" : "#171A20";

    return (
        <View style={styles.container}>
            <Pressable style={[styles.button, {backgroundColor: backgroundColor}]} onPress={() => {console.log("Pressed")}}>
                <Text style={[styles.text, {color: textColor}]}>Custom Order</Text>
            </Pressable>
        </View>
    );
};

export default StyledButton;
