import React from 'react';
import {Text, View, Pressable} from "react-native";
import styles from "./style";

const StyledButton = (props) => {

    const type = props.type;

    const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
    const textColor = type === "primary" ? "white" : "#171A20";
    const onPress = props.onPress;
    const content = props.content;

    return (
        <View style={styles.container}>
            <Pressable style={[styles.button, {backgroundColor: backgroundColor}]} onPress={() => onPress()}>
                <Text style={[styles.text, {color: textColor}]}>{content}</Text>
            </Pressable>
        </View>
    );
};

export default StyledButton;
