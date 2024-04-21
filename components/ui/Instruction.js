import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

export default function Instruction({ children, style }) {
  return <Text style={[styles.instructiontext, style]}>{children}</Text>;
}
const styles = StyleSheet.create({
  instructiontext: {
    color: Colors.accent500,
    fontSize: 24,
    fontFamily: "open-sans",
  },
});
