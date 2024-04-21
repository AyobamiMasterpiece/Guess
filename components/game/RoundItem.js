import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export default function RoundItem({ guess, roundnum }) {
  return (
    <View style={styles.listitem}>
      <Text style={styles.itemText}>#{roundnum}</Text>
      <Text style={styles.itemText}>Opponent's Guess : {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listitem: {
    borderColor: Colors.primary800,
    borderwidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
