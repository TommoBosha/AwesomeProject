import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";

import { useFonts } from 'expo-font';


export default function App() {
  const [fonts] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  });

  if (!fonts) {
    return null;
  }

  return (
    <>

      {/* <RegistrationScreen /> */}
      <LoginScreen />

    </>
  );
}


