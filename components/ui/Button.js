import { Children } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Button({ children, onpress }) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innnerContainer, styles.pressed]
            : styles.innnerContainer
        }
        onPress={onpress}
        android_ripple={{
          color: Colors.primary600,
        }}

        //   onPressIn={(e) => console.log("mama")}
        //   onPressOut={(e) => console.log("file o")}
        //   onLongPress={(e) => console.log("wow")}
        //   hitSlop={10}
        //   pressRetentionOffset={55}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
export default Button;
const styles = StyleSheet.create({
  innnerContainer: {
    backgroundColor: Colors.primry500,

    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  outerContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  pressed: {
    opacity: 0.75,
  },
});
