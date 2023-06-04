import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 16,
    },
    userContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 32,
        marginTop: 32,
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 16,
        marginRight: 8,
    },
    userName: {
        fontFamily: "Roboto-Medium",
        fontWeight: 700,
        fontStyle: "normal",
        fontSize: 13,
        lineHeight: 15,
        color: "#212121",
    },
    userEmail: {
        fontFamily: "Roboto-Regular",
        fontStyle: "normal",
        fontSize: 11,
        lineHeight: 13,
        color: "#212121",
    },
    itemPhoto: {
        width: "100%",
        height: 240,
        borderRadius: 8,
        marginBottom: 8,
    },
    itemTitle: {
        marginBottom: 11,
        fontFamily: "Roboto-Medium",
        fontStyle: "normal",
        fontSize: 16,
        lineHeight: 19,
        color: "#212121",
    },
    commentsAmount: {
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        lineHeight: 19,
        color: "#212121",
    },
    description: {
        paddingBottom: 34,
        flexDirection: "row",
    },
    comments: {
        marginRight: 31,
        flexDirection: "row",
        alignItems: "center",
    },
    location: {
        marginLeft: "auto",
        flexDirection: "row",
        alignItems: "center",
    },
});