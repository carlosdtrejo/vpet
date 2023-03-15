import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";

//const sprite = require("./animatedSprite4.gif");

let sprite = require("./eatingSprite2.gif");

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button onPress={onPressLearnMore} title="Click Me" color="#000000a0" />
        <Button onPress={onPressLearnMore} title="Click Me" color="#000000a0" />
        <Button onPress={onPressLearnMore} title="Click Me" color="#000000a0" />
        <Button onPress={onPressLearnMore} title="Click Me" color="#000000a0" />
      </View>
      <ImageBackground source={sprite} style={styles.image}></ImageBackground>
      <View style={styles.lowerButtonContainer}>
        <Button onPress={onPressLearnMore} title="Click Me" color="#000000a0" />
        <Button onPress={onPressLearnMore} title="Click Me" color="#000000a0" />
        <Button onPress={onPressLearnMore} title="Click Me" color="#000000a0" />
        <Button onPress={onPressLearnMore} title="Click Me" color="#000000a0" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    resizeMode: "cover",
    width: 400,
    height: 280,
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
    width: 400,
    paddingTop: 70,
    marginBottom: -38,
    zIndex: 1,
  },
  lowerButtonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    width: 400,
    marginBottom: 50,
  },
});

const onPressLearnMore = () => {
  //For generating alert on buttton click
  alert("Feed your digimon bitch");
  ScreenOrientation.getOrientationAsync().then((data) => console.log(data));
};
