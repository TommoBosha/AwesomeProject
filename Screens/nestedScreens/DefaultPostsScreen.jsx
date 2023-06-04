import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./Screens.styles";


const DefaultPostsScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image
          source={require("../../image/rectangle.jpg")}
          style={styles.userImage}
        />
        <View>
          <Text style={styles.userName}>ім'я Прізвище</Text>
          <Text
            style={{
              fontSize: 11,
              lineHeight: 12.89,
              color: "#212121",
              fontFamily: "Roboto-Regular",
            }}
          >
            useremail@gmail.com
          </Text>
        </View>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item.photo }} style={styles.itemPhoto} />
            <Text style={styles.itemTitle}>{item.titlePhoto}</Text>
            <View style={styles.description}>
              <View style={styles.comments}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Comments")}
                >
                  <Feather
                    name="message-circle"
                    size={24}
                    color={"#BDBDBD"}
                    style={{
                      marginRight: 9,
                    }}
                  />
                </TouchableOpacity>
                <Text style={styles.commentsAmount}>5</Text>
              </View>
              <View style={styles.location}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Map", {
                      location: item.location,
                      title: item.titlePhoto,
                      image: item.photo,
                    });
                  }}
                >
                  <Feather
                    name="map-pin"
                    size={24}
                    color="#BDBDBD"
                    style={{ marginRight: 8 }}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    ...styles.commentsAmount,
                    textDecorationLine: "underline",
                  }}
                >
                  {item.place}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default DefaultPostsScreen;