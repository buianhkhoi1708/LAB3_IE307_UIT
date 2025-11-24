// Bùi Anh Khôi - 23520759
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import HomeScreen from "../screens/HomeScreen";
import AddNoteScreen from "../screens/AddNoteScreen";
import AppButton from "../components/AppButton";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditNoteScreen from "../screens/EditNoteScreen";
import { useAppTheme } from "../store/useAppTheme";
import { useStore } from "../store/useStore";

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  HomeScreen: undefined;
  AddNoteScreen: undefined;
};

const NavButton = () => {
        const colors = useAppTheme();
const navigation = useNavigation();
  return (
    <AppButton
      onPress={() => {
        navigation.goBack();
      }}
    >
      <AntDesign name="arrow-left" size={25} color={colors.headerText} />
    </AppButton>
  );
};

export const HomeStack = () => {
    const colors = useAppTheme();
    const fontSize = useStore((state) => state.fontSize);
  return (
    <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: colors.headerBg },
        headerTintColor: colors.headerText,
        headerTitleStyle: { fontWeight: "bold", fontSize: fontSize }
    }}>
      <Stack.Screen
        component={HomeScreen}
        name="HomeScreen"
        options={{
          headerShown: false,
          headerTitleStyle: { fontWeight: "bold", fontSize: fontSize }
        }}
      />
      <Stack.Screen
        component={AddNoteScreen}
        name="AddNoteScreen"
        options={{
          headerLeft: () => <NavButton/>,
          headerTitleStyle: { fontWeight: "bold", fontSize: fontSize }
        }}
      />
      <Stack.Screen
        component={EditNoteScreen}
        name="EditNoteScreen"
        options={{
          headerLeft: () => <NavButton/>,
          headerTitleStyle: { fontWeight: "bold", fontSize: fontSize }
          
        }}
      />
    </Stack.Navigator>
  );
};

