import React from "react";
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
import { useEffect, useState } from "react";

//const sprite = require("./animatedSprite4.gif");

let sprite = require("./eatingSprite2.gif");
let sprite2 = require("./animatedSprite2.gif");

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function App() {
  const [orientation, setOrientation] = useState(1);

  useEffect(() => {
    checkOrientation();
    const subscription = ScreenOrientation.addOrientationChangeListener(
      handleOrientationChange
    );
    return () => {
      ScreenOrientation.removeOrientationChangeListeners(subscription);
    };
  }, []);

  const checkOrientation = async () => {
    const orientation = await ScreenOrientation.getOrientationAsync();
    setOrientation(orientation);
  };

  const handleOrientationChange = (o) => {
    setOrientation(o.orientationInfo.orientation);
  };

  return (
    <View style={styles.container}>
      {orientation === 1 ? (
        <React.Fragment>
          <View style={styles.buttonContainer}>
            <Button
              onPress={onPressLearnMore}
              title="Click Me"
              color="#000000a0"
            />
            <Button
              onPress={onPressLearnMore}
              title="Click Me"
              color="#000000a0"
            />
            <Button
              onPress={onPressLearnMore}
              title="Click Me"
              color="#000000a0"
            />
            <Button
              onPress={onPressLearnMore}
              title="Click Me"
              color="#000000a0"
            />
          </View>
          <ImageBackground
            source={sprite}
            style={styles.image}
          ></ImageBackground>
          <View style={styles.lowerButtonContainer}>
            <Button
              onPress={onPressLearnMore}
              title="Click Me"
              color="#000000a0"
            />
            <Button
              onPress={onPressLearnMore}
              title="Click Me"
              color="#000000a0"
            />
            <Button
              onPress={onPressLearnMore}
              title="Click Me"
              color="#000000a0"
            />
            <Button
              onPress={onPressLearnMore}
              title="Click Me"
              color="#000000a0"
            />
          </View>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <View style={styles.buttonContainerLandscape}>
            <Button
              onPress={onPressLearnMore}
              title="Click Me"
              color="#000000a0"
            />
            <Button
              onPress={onPressLearnMore}
              title="Click Me"
              color="#000000a0"
            />
            <Button
              onPress={onPressLearnMore}
              title="Click Me"
              color="#000000a0"
            />
            <Button
              onPress={onPressLearnMore}
              title="Click Me"
              color="#000000a0"
            />
          </View>
          <ImageBackground
            source={sprite}
            style={styles.imageLandscape}
          ></ImageBackground>
          <View style={styles.lowerButtonContainerLandscape}>
            <Button
              onPress={onPressLearnMore}
              title="Click Me"
              color="#000000a0"
            />
            <Button
              onPress={onPressLearnMore}
              title="Click Me"
              color="#000000a0"
            />
            <Button
              onPress={onPressLearnMore}
              title="Click Me"
              color="#000000a0"
            />
            <Button
              onPress={onPressLearnMore}
              title="Click Me"
              color="#000000a0"
            />
          </View>
        </React.Fragment>
      )}
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
  imageLandscape: {
    resizeMode: "cover",
    width: 700,
    height: 330,
    flex: 1,
    justifyContent: "center",
    marginBottom: 175,
    zIndex: -1,
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
  buttonContainerLandscape: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
    width: 700,
    marginBottom: -40,
  },
  lowerButtonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    width: 400,
    marginBottom: 50,
  },
  lowerButtonContainerLandscape: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
    width: 700,
    marginBottom: 25,
  },
});

const onPressLearnMore = () => {
  //For generating alert on buttton click
  alert("Feed your digimon bitch");
  ScreenOrientation.getOrientationAsync().then((data) => console.log(data));
};
