import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import Button from "../components/ui/Button";

function GameOverScreen({ rounds, usernum, newgame }) {
  const { width, height } = useWindowDimensions();
  console.log(width, height, "dim");
  const borderRadius = width > height ? 70 : 150;
  const img = width > height ? 140 : 300;
  const font = width > height ? 15 : 20;
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!!</Title>
      <View
        style={[
          styles.imgcontainer,
          {
            height: img,
            width: img,
            borderRadius: borderRadius,
          },
        ]}
      >
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text
        style={[
          styles.sum,
          {
            fontSize: font,
          },
        ]}
      >
        Your Phone needed <Text style={styles.high}>{rounds}</Text> rounds to
        guess the number <Text style={styles.high}>{usernum}</Text>
      </Text>
      <Button onpress={newgame}>Start new game</Button>
    </View>
  );
}
export default GameOverScreen;

const styles = StyleSheet.create({
  imgcontainer: {
    borderRadius: 150,
    height: 300,
    width: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  rootContainer: {
    backgroundColor: "red",
    padding: 24,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  sum: {
    fontFamily: "open-sans",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 24,
  },
  high: {
    fontFamily: "open-sans-bold",
    color: Colors.primry500,
  },
});
