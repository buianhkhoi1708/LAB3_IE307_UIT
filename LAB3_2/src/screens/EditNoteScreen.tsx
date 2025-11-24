// Bùi Anh Khôi - 23520759
import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSQLiteContext } from "expo-sqlite";
import AppButton from "../components/AppButton";
import AppSafeView from "../components/AppSafeView";
import { AppTextInput } from "../components/AppTextInput";
import Entypo from "@expo/vector-icons/Entypo";
import { useAppTheme } from "../store/useAppTheme";
import { useStore } from "../store/useStore";
import { AppLightColor } from "../styles/color";

const EditNoteScreen = () => {
  const colors = useAppTheme();
  const fontSize = useStore((state) => state.fontSize);
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const db = useSQLiteContext();


  const { note } = route.params;


  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleUpdate = async () => {

    if (!title || !content) {
      Alert.alert("Thông báo", "Vui lòng nhập đầy đủ tiêu đề và nội dung");
      return;
    }

    try {

      await db.runAsync(
        "UPDATE notes SET title = ?, content = ? WHERE id = ?",
        [title, content, note.id]
      );


      navigation.goBack();
    } catch (error) {
      console.error("Lỗi khi cập nhật:", error);
      Alert.alert("Lỗi", "Không thể lưu thay đổi");
    }
  };

  return (
    <AppSafeView
      style={[styles.container, { backgroundColor: colors.bgColor }]}
    >
      <AppTextInput
        value={title}
        text="Title is here"
        onText={setTitle}
        style={[{ color: colors.primary_text, fontSize: fontSize }, styles.textinput]}
      />

      <AppTextInput
        value={content}
        text="Content is here"
        onText={setContent}
        style={[{ color: colors.primary_text, fontSize: fontSize }, styles.textinput1]}
      />

      <View style={styles.container1}>
        <AppButton onPress={handleUpdate} style={[styles.but, styles.but1]}>
          <Entypo name="check" size={24} color="white" />
        </AppButton>

        <AppButton onPress={handleCancel} style={[styles.but, styles.but2]}>
          <Entypo name="cross" size={24} color="white" />
        </AppButton>
      </View>
    </AppSafeView>
  );
};

export default EditNoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  container1: {
    flexDirection: "row",
    marginTop: 10,
    gap: 10,
    justifyContent: "center",
  },
    textinput: {
    height: 200,
  },
     textinput: {
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
