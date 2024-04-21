import {
  Alert,
  StyleSheet,
  TextInput,
  View,
  Text,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import Button from "../components/ui/Button";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/Card";
import Instruction from "../components/ui/Instruction";

function StartGameScreen({ onclick }) {
  const [number, setNumber] = useState("");
  const { width, height } = useWindowDimensions();
  // console.log(height);
  let margintop = width > height ? 10 : 100;
  const resetHandler = () => {
    setNumber("");
  };
  const handleConfirm = () => {
    console.log(parseInt(number));
    if (Number(number) <= 0 || Number(number) >= 100 || isNaN(number)) {
      Alert.alert("Invalid Number", "Your numer should be between 1 and 99", [
        {
          text: "Okay",
          onPress: resetHandler,
        },
      ]);
      return;
    }
    onclick(number);
  };

  return (
    <View style={[styles.rootcontain, { marginTop: margintop }]}>
      <Title>Guess My Number</Title>
      <Card>
        <Instruction>Enter Any Number</Instruction>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          // keyboardAppearance="dark"
          value={number}
          keyboardType="number-pad"
          onChangeText={(text) => setNumber(text)}
        />
        <View style={styles.hmm}>
          <View style={styles.kk}>
            <Button onpress={handleConfirm}>Confirm </Button>
          </View>
          <View style={styles.kk}>
            <Button onpress={resetHandler}>Reset </Button>
          </View>
        </View>
      </Card>
    </View>
  );
}
export default StartGameScreen;

const styles = StyleSheet.create({
  rootcontain: {
    flex: 1,
    // backgroundColor: "green",

    alignItems: "center",
  },

  hmm: {
    flexDirection: "row",
    // backgroundColor: "red",
  },
  kk: {
    flex: 1,
    // backgroundColor: "green",
  },
  numberInput: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
  },
});
