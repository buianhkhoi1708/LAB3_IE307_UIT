// Bùi Anh Khôi - 23520759
import { StyleSheet, Pressable} from "react-native";
import React, { ReactNode } from "react";

interface AppButton {
    children: ReactNode;
    style?: ButtonStyle[] | ButtonStyle;
    onPress?: () => void;
}

const AppButton = ({children, style, onPress} : AppButton) => {
  return (
    <Pressable style = {[style, styles.button]} onPress={onPress}>
        {children}
    </Pressable>
  );
};

export default AppButton;

const styles = StyleSheet.create({
    button: {
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
