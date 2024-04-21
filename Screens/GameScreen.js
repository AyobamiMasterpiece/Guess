import {
  View,
  Text,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
} from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import Button from "../components/ui/Button";
import Card from "../components/Card";
import Instruction from "../components/ui/Instruction";
import { Ionicons } from "@expo/vector-icons";
import RoundItem from "../components/game/RoundItem";

let minBoundary = 1;

let maxBoundary = 100;

function GameScreen({ userNumber, gameOver }) {
  const initialGuess = generateRandomBetween(1, 100);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [rounds, setRounds] = useState([initialGuess]);
  const { width, height } = useWindowDimensions();
  console.log(width, height, "dim");

  useEffect(() => {
    if (userNumber == currentGuess) {
      gameOver(rounds.length);
      minBoundary = 1;
      maxBoundary = 100;
    }
  }, [currentGuess, userNumber, gameOver]);
  function generateRandomBetween(min, max, exclude) {
    const rndnum = Math.floor(Math.random() * (max - min)) + min;
    if (rndnum == exclude) {
      return generateRandomBetween(min, max, userNumber);
    }
    return rndnum;
  }
  const nextGuessHandler = (direction) => {
    if (
      (direction == "lower" && currentGuess < userNumber) ||
      (direction == "higher" && currentGuess > userNumber)
    ) {
      Alert.alert(
        "Dont lie",
        "You know say na lie!",
        [
          {
            text: "okay na!",
          },
        ],
        {
          cancelable: true,
        }
      );
      return;
    }
    if (direction == "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    let newnum = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newnum);
    setRounds((p) => {
      return [newnum, ...p];
    });
  };
  // console.log(generateRandomBetween(15, 20));
  console.log(minBoundary, maxBoundary);
  let content = (
    <>
      <Title>{"opponent's guess"}</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        {/* <Instruction style={{ marginBottom: 24 }}>Higher or lower</Instruction> */}
        <View style={styles.hmm}>
          <View style={styles.kk}>
            <Button onpress={() => nextGuessHandler("higher")}>
              <Ionicons name="md-remove" size={24} color={"white"}></Ionicons>
            </Button>
          </View>
          <View style={styles.kk}>
            <Button onpress={() => nextGuessHandler("lower")}>
              <Ionicons name="md-add" size={24} color={"white"}></Ionicons>
            </Button>
          </View>
        </View>
      </Card>
    </>
  );
  if (width > height) {
    content = (
      <>
        <Title>{"opponent's guess"}</Title>

        <View
          style={{
            flexDirection: "row",
            backgroundColor: "red",
            justifyContent: "center",
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <View style={styles.kk}>
            <Button onpress={() => nextGuessHandler("higher")}>
              <Ionicons name="md-remove" size={24} color={"white"}></Ionicons>
            </Button>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.kk}>
            <Button onpress={() => nextGuessHandler("lower")}>
              <Ionicons name="md-add" size={24} color={"white"}></Ionicons>
            </Button>
          </View>
        </View>
      </>
    );
  }
  return (
    <View style={styles.screen}>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={rounds}
          renderItem={(item) => {
            return (
              <RoundItem
                guess={item.item}
                roundnum={rounds.length - item.index}
              ></RoundItem>
            );
          }}
          keyExtractor={(k) => k}
        />
      </View>
    </View>
  );
}
export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    margin: 6,
  },
  hmm: {
    flexDirection: "row",
  },
  kk: {
    // flex: 1,
  },
  listContainer: {
    // backgroundColor: "red",
    padding: 10,
    flex: 1,
    // height: 200,
  },
});
