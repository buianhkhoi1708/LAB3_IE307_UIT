import {
  Button,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
} from "react-native";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { useSQLiteContext } from "expo-sqlite";
import AppText from "../components/AppText";
import { Ionicons } from "@expo/vector-icons";
import AppButton from "../components/AppButton";
import { useNavigation } from "@react-navigation/native";
import AppSafeView from "../components/AppSafeView";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useStore } from "../store/useStore";
import { useAppTheme } from "../store/useAppTheme";

interface Note {
  id: number;
  title: string;
  content: string;
}

const HomeScreen = () => {
  const colors = useAppTheme();
  const fontSize = useStore((state) => state.fontSize);

  const db = useSQLiteContext();
  const [notes, setNotes] = useState<Note[]>([]);

  const getAllNotes = async () => {
    const result = await db.getAllAsync<Note>("SELECT * FROM notes");
    setNotes(result);
  };

  const handleDeleteNote = async (id: number) => {
    await db.runAsync("DELETE FROM notes WHERE id = $id", { $id: id });
  };

  useLayoutEffect(
    useCallback(() => {
      getAllNotes();
    }, [])
  );

  const navigation = useNavigation();

  return (
    <AppSafeView
      style={[styles.contentContainer, { backgroundColor: colors.bgColor }]}
    >
      <AppText
        variant="bold"
        style={[
          styles.title,
          { fontSize: fontSize, color: colors.primary_text },
        ]}
      >
        My Note App
      </AppText>
      <View style={styles.container1}>
        <AppText
          variant="medium"
          style={[
            styles.title1,
            { fontSize: fontSize, color: colors.primary_text },
          ]}
        >
          All notes
        </AppText>
        <AppButton
          style={styles.button}
          onPress={() => {
            navigation.navigate("AddNoteScreen");
          }}
        >
          <Ionicons name="add" size={25} />
        </AppButton>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {notes.map((note, index) => (
          <View style={styles.todoItemContainer} key={index}>
            <Pressable
              style={styles.container2}
              onPress={() =>
                navigation.navigate("EditNoteScreen", { note: note })
              }
            >
              <AppText
                variant="bold"
                style={[
                  styles.text1,
                  { fontSize: fontSize, color: colors.primary_text },
                ]}
              >{`${note.title}`}</AppText>
              <AppText
                variant="medium"
                style={[
                  styles.text2,
                  { fontSize: fontSize, color: colors.primary_text },
                ]}
              >{`${note.content}`}</AppText>
            </Pressable>
            <AppButton onPress={() => handleDeleteNote(note.id)}>
              <FontAwesome name="trash" size={30} color={colors.primary_text} />
            </AppButton>
          </View>
        ))}
      </ScrollView>
    </AppSafeView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  contentContainer: {},
  todoItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    width: "95%",
    alignSelf: "center",
  },
  title: {
    alignSelf: "center",
    fontSize: 30,
    marginTop: 10,
  },
  title1: {
    fontSize: 23,
  },
  container1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginTop: 10,
  },

  container2: {
    paddingHorizontal: 15,
    width: '80%',
  },

  text1: {},
  text2: {
    fontSize: 16,
    marginTop: 6,
  },
  button: {
    backgroundColor: "orange",
    height: 50,
    width: 50,
  },
});
