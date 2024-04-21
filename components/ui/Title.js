import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";
function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "open-sans-bold",

    color: "white",
    textAlign: "center",
    borderColor: "white",
    borderWidth: 2,
    padding: 10,
  },
});
