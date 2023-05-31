import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useRoute } from "./router";



export default function App() {
  const routing = useRoute();
  const [fonts] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fonts) {
    return null;
  }

  return (
    <>
      <NavigationContainer>{routing}</NavigationContainer>

    </>
  );
}
