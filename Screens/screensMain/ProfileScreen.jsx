import React from "react";
import { View, ImageBackground, Text, StyleSheet } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../image/bg.jpg")}
        style={styles.background}
        resizeMode="cover"
      >
        <Text>ProfileScreen</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    width: "100%",
    height: "100%",
  },
});

export default ProfileScreen;
