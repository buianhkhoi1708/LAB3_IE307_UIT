import { StyleSheet, Alert, View } from "react-native";
import React, { useState } from "react";
import { AppDarkColor, AppLightColor } from "../styles/color";
import AppSafeView from "../components/AppSafeView";
import { useSQLiteContext } from "expo-sqlite";
import { useNavigation } from "@react-navigation/native";
import AppButton from "../components/AppButton";
import Entypo from "@expo/vector-icons/Entypo";
import { AppTextInput } from "../components/AppTextInput";
import { useAppTheme } from "../store/useAppTheme";
import { useStore } from "../store/useStore";

const showAlert = () =>
  Alert.alert(
    'Warning',
    'Please enter a title!',
  );


const AddNoteScreen = () => {
  const colors = useAppTheme();
  const fontSize = useStore((state) => state.fontSize);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const db = useSQLiteContext();
  const navigation = useNavigation();

  const handleSavePress = async () => {
    try {
      if (title === '') {
        showAlert();
        return;
      }
      await db.runAsync("INSERT INTO notes (title, content) VALUES (?, ?)", [
        title,
        content,
      ]);
      navigation.goBack();
      console.log("Saving note successfully.");
    } catch (error) {
      console.error("Saving note error: ", error);
    }
  };

  const handleCanclePress = () => {
        navigation.goBack();
  };

  return (
    <AppSafeView
      style={[{ backgroundColor: colors.bgColor }]}
    >
      <AppTextInput
        text="Enter your title"
        value={title}
        onText={(text) => setTitle(text)}
        style={[{ color: colors.primary_text, fontSize: fontSize }, styles.textinput1]}
      />
      <AppTextInput
        text="Enter your content"
        value={content}
        onText={(text) => setContent(text)}
        style={[styles.textinput, { color: colors.primary_text, fontSize: fontSize}]}
      />

      <View style={styles.container1}>
        <AppButton onPress={handleSavePress} style={[styles.but, styles.but1]}>
          <Entypo name="check" size={24} color={AppDarkColor.iconColor} />
        </AppButton>

        <AppButton
          onPress={handleCanclePress}
          style={[styles.but, styles.but2]}
        >
          <Entypo name="cross" size={24} color={AppDarkColor.iconColor} />
        </AppButton>
      </View>
    </AppSafeView>
  );
};

export default AddNoteScreen;

const styles = StyleSheet.create({
  container1: {
    flexDirection: "row",
    marginTop: 10,
    gap: 10,
    justifyContent: "center",
  },
  textinput: {
    height: 200,
  },
  textinput1: {
    height: 100,
  },

  but: {
    height: 65,
    width: 65,
  },
  but1: {
    backgroundColor: AppLightColor.button2Color,
  },
  but2: {
    backgroundColor: AppLightColor.button1Color,
  },
});
