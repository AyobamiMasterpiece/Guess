import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./Screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./Screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./Screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [isgameover, setisgameover] = useState(true);
  const [rounds, setRounds] = useState(0);
  const [fontLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  if (!fontLoaded) {
    <AppLoading></AppLoading>;
  }
  const reset = () => {
    setUserNumber(null);
    setRounds(0);
  };
  const handlenumber = (num) => {
    setUserNumber(num);
    setisgameover(false);
  };
  const gameOver = (n) => {
    setisgameover(true);
    setRounds(n);
  };
  let screen = <StartGameScreen onclick={handlenumber} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} gameOver={gameOver}></GameScreen>
    );
  }
  if (userNumber && isgameover) {
    screen = (
      <GameOverScreen
        rounds={rounds}
        usernum={userNumber}
        newgame={reset}
      ></GameOverScreen>
    );
  }
  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        style={styles.root}
        colors={[Colors.primary700, Colors.accent500]}
      >
        <SafeAreaView style={styles.root}>{screen}</SafeAreaView>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
