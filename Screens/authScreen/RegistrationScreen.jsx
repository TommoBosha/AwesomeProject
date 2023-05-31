import { useState } from "react";
import {
  TextInput,
  View,
  ImageBackground,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "../../image/icon.svg.js";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Screens.styles.js";


 function RegistrationScreen() {
  const navigation = useNavigation();
  const [passwordShow, setPasswordShow] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
   const [focusedInput, setFocusedInput] = useState(null);
     const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const keyboardHiden = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const isInputFocus = (inputName) => {
    setIsShowKeyboard(true);
    setFocusedInput(inputName);
  };

  const isInputBlur = () => {
    setIsShowKeyboard(false);
    setFocusedInput(null);
  };

   const isInputFocused = (inputName) => focusedInput === inputName;
   
    const onSubmit = () => {
      console.log(login, email, password);
      navigation.navigate("Home");
    setLogin("");
    setEmail("");
    setPassword("");
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHiden}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.bgImage}
          source={require("../../image/bg.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.wrapper}>
              <View style={styles.avatar}>
                <Image
                  source={require("../../image/rectangle.jpg")}
                  style={styles.avatarImage}
                />
                <Pressable
                  style={styles.buttonIcon}
                >
                  <Icon />
                </Pressable>
              </View>
              <Text style={styles.title}>Реєстрація</Text>
              <View
                style={{
                  ...styles.form,
                  marginBottom: isShowKeyboard ? -110 : 78,
                }}
              >
                <View style={{ marginBottom: 16 }}>
                  <TextInput
                    style={[
                      styles.input,
                      isInputFocused("login") && styles.inputFocus,
                    ]}
                    placeholder="Логін"
                    onFocus={() => isInputFocus("login")}
                    onBlur={isInputBlur}
                    onChangeText={(value) =>
                     setLogin(value)
                    }
                    value={login}
                  />
                </View>
                <View style={{ marginBottom: 16 }}>
                  <TextInput
                    style={[
                      styles.input,
                      isInputFocused("email") && styles.inputFocus,
                    ]}
                    placeholder="Адреса електронної пошти"
                    onFocus={() => isInputFocus("email")}
                    onBlur={isInputBlur}
                    onChangeText={(value) =>
                      setEmail(value)
                    }
                    value={email}
                  />
                </View>
                <View style={{ marginBottom: 43 }}>
                  <TextInput
                    style={[
                      styles.input,
                      isInputFocused("password") && styles.inputFocus,
                    ]}
                    placeholder="Пароль"
                    secureTextEntry={passwordShow}
                    onFocus={() => isInputFocus("password")}
                    onBlur={isInputBlur}
                    onChangeText={(value) =>
                      setPassword(value)
                    }
                    value={password}
                  />
                  <Pressable
                    onPress={() => setPasswordShow(!passwordShow)}
                    style={styles.btnPassword}
                  >
                    {passwordShow ? (
                      <Text style={styles.passwordText}>Показати</Text>
                    ) : (
                      <Text style={styles.passwordText}>Приховати</Text>
                    )}
                  </Pressable>
                </View>
                <Pressable style={styles.button}  onPress={onSubmit}>
                  <Text style={styles.buttonText}>Зареєстуватися</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate("Login")}>
                <Text style={styles.text}>Вже є акаунт? Увійти</Text>
                </Pressable>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default RegistrationScreen;

