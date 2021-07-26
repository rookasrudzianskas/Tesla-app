import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    carContainer: {
        width: "100%",
        height: "100%",
        zIndex: 4,
    },
    titles: {
        marginTop: "30%",
        width: "100%",
        alignItems: "center",
    },
    title: {
        fontSize: 40,
        fontWeight: '500',
    },
    subtitle: {
        fontSize: 16,
        color: "#5c5e62",
    },
    image: {
        width: "100%",
        resizeMode: "cover",
        position: "absolute",
        flex: 1,
        zIndex: -1,
    },
    buttonContainer: {
      position: "absolute",
        bottom: 50,
        width: "100%",
    },
    subtitleCTA: {
      color: "#403e3e",
      textDecorationLine: "underline",
    },
});

export default styles;

