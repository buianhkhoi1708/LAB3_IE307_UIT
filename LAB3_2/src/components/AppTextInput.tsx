import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

interface AppTextInput {
    text: string;
    style?: AppTextStyle | AppTextStyle[];
    value: string;
    type?: string;
    password?: boolean;
    onText: (text: string) => void;
}

export const AppTextInput = ({text, style, value, password, onText} : AppTextInput) => {
  return (
    <View style = {[styles.container, style]}>
      <View style={styles.container1}>
        <TextInput
        value={value}
        onChangeText={onText}
        placeholder= {text}
        placeholderTextColor= {style}
        style = {[styles.textinput, style]}
        secureTextEntry = {password}
        multiline={true}
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
  },
  container1: {
    flexDirection: 'row',
    borderColor: '#b0b0b0ff',
    borderWidth: 1.5,
    borderRadius: 10,
    width: '95%',
    height: 80,
    padding: 10,
    justifyContent:'center',
 
  },
  textinput: {
    width: '100%',
    height: 'auto',
    fontSize: 18,
  }
});
