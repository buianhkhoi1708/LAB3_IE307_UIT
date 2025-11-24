// Bùi Anh Khôi - 23520759
import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { useAppTheme } from "../store/useAppTheme";
import { AppLightColor } from "../styles/color";
import { useStore } from "../store/useStore";

interface AppTextInput {
    text: string;
    style?: AppTextStyle | AppTextStyle[];
    value: string;
    type?: string;
    password?: boolean;
    onText: (text: string) => void;
}

export const AppTextInput = ({text, style, value, password, onText} : AppTextInput) => {
  const colors = useAppTheme();
  const fontSize = useStore((state) => state.fontSize);

  return (
    <View style = {[styles.container]}>
      <View style={[styles.container1, style]}>
        <TextInput
        value={value}
        onChangeText={onText}
        placeholder= {text}
        placeholderTextColor= {colors.primary_text}
        style = {[styles.textinput, {fontSize: fontSize, color: colors.primary_text}]}
        secureTextEntry = {password}
        multiline={true}
        disableKeyboardShortcuts= {true}
        />
      </View>
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  container1: {
    flexDirection: 'row',
    borderColor: AppLightColor.borderColor,
    borderWidth: 1.5,
    borderRadius: 10,
    width: '95%',
   
    padding: 20,
    justifyContent:'center',
 
  },
  textinput: {
    width: '100%',
    height: "100%",
    
  }
});
