import React from 'react';
import {Text, View, Pressable} from "react-native";
import styles from "./style";

const StyledButton = (props) => {
    return (
        <View>
            <Pressable style={styles.button} onPress={() => {console.log("Pressed")}}>
                <Text>Custom Order</Text>
            </Pressable>
        </View>
    );
};

export default StyledButton;
