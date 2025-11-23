import React, { useState } from "react";
import { StyleSheet, TextInput, View, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSQLiteContext } from "expo-sqlite";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import AppSafeView from "../components/AppSafeView";
import { AppTextInput } from "../components/AppTextInput";
import Entypo from "@expo/vector-icons/Entypo";
import { useAppTheme } from "../store/useAppTheme";
import { useStore } from "../store/useStore";

const EditNoteScreen = () => {
  const colors = useAppTheme();
  const fontSize = useStore((state) => state.fontSize);
  // Dùng <any> để bỏ qua kiểm tra kiểu dữ liệu rắc rối
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const db = useSQLiteContext();

  // Lấy dữ liệu ghi chú cũ được gửi từ HomeScreen
  const { note } = route.params;

  // Điền sẵn dữ liệu cũ vào ô nhập
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleUpdate = async () => {
    // Kiểm tra không được để trống
    if (!title || !content) {
      Alert.alert("Thông báo", "Vui lòng nhập đầy đủ tiêu đề và nội dung");
      return;
    }

    try {
      // Chạy lệnh SQL Update
      await db.runAsync(
        "UPDATE notes SET title = ?, content = ? WHERE id = ?",
        [title, content, note.id]
      );

      // Lưu xong thì quay về Home
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
        style={[{ color: colors.primary_text, fontSize: fontSize }]}
      />
      <AppTextInput
        value={content}
        text="Content is here"
        onText={setContent}
        style={[{ color: colors.primary_text, fontSize: fontSize }]}
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
    padding: 20,
    backgroundColor: "white",
  },
  titleInput: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#e0e0e0",
  },
  contentInput: {
    fontSize: 18,
    flex: 1,
    color: "#333",
  },
  saveButton: {
    backgroundColor: "orange", // Màu giống nút Add ở Home
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },

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
