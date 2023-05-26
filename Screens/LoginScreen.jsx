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
// import Icon from "../image/icon.svg.js";
import { styles } from "./Screens.styles.js";


 function LoginScreen() {
  const [passwordShow, setPasswordShow] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

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

  return (
    <TouchableWithoutFeedback onPress={keyboardHiden}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.bgImage}
          source={require("../image/bg.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.wrapperLogin}>
              {/* <View style={styles.avatar}>
                <Image
                  source={require("../image/rectangle.jpg")}
                  style={styles.avatarImage}
                />
                <Pressable
                  style={styles.buttonIcon}
                >
                  <Icon />
                </Pressable>
              </View> */}
              <Text style={styles.title}>Увійти</Text>
              <View
                style={{
                  ...styles.form,
                  marginBottom: isShowKeyboard ? -110 : 78,
                }}
              >
                {/* <View style={{ marginBottom: 16 }}>
                  <TextInput
                    style={[
                      styles.input,
                      isInputFocused("login") && styles.inputFocus,
                    ]}
                    placeholder="Логін"
                    onFocus={() => isInputFocus("login")}
                    onBlur={isInputBlur}
                  />
                </View> */}
                <View style={{ marginBottom: 16 }}>
                  <TextInput
                    style={[
                      styles.input,
                      isInputFocused("email") && styles.inputFocus,
                    ]}
                    placeholder="Адреса електронної пошти"
                    onFocus={() => isInputFocus("email")}
                    onBlur={isInputBlur}
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
                <Pressable style={styles.button} activeOpacity={0.8}>
                  <Text style={styles.buttonText}>Увійти</Text>
                </Pressable>
                
                <Text style={styles.textLogin}>Немає акаунту? Зареєструватися</Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default LoginScreen;