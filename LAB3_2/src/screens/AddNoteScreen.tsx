import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { AppLightColor } from "../styles/color";
import AppSafeView from "../components/AppSafeView";
import { useSQLiteContext } from "expo-sqlite";
import { useNavigation } from "@react-navigation/native";
import AppButton from "../components/AppButton";
import Entypo from "@expo/vector-icons/Entypo";
import { AppTextInput } from "../components/AppTextInput";
import { useAppTheme } from "../store/useAppTheme";
import { useStore } from "../store/useStore";

const AddNoteScreen = () => {
  const colors = useAppTheme();
  const fontSize = useStore((state) => state.fontSize);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const db = useSQLiteContext();
  const navigation = useNavigation();

  const handleSavePress = async () => {
    try {
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
      style={[styles.container, { backgroundColor: colors.bgColor }]}
    >
      <AppTextInput
        text="Enter your title"
        value={title}
        onText={(text) => setTitle(text)}
        style={[{ color: colors.primary_text, fontSize: fontSize }, styles.textinput]}
      />
      <AppTextInput
        text="Enter your content"
        value={content}
        onText={(text) => setContent(text)}
        style={[{ color: colors.primary_text, fontSize: fontSize}]}
      />

      <View style={styles.container1}>
        <AppButton onPress={handleSavePress} style={[styles.but, styles.but1]}>
          <Entypo name="check" size={24} color="white" />
        </AppButton>

        <AppButton
          onPress={handleCanclePress}
          style={[styles.but, styles.but2]}
        >
          <Entypo name="cross" size={24} color="white" />
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

  but: {
    height: 65,
    width: 65,
  },
  but1: {
    backgroundColor: "green",
  },
  but2: {
    backgroundColor: "red",
  },
});
