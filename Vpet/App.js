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
let statsImage = require("./statsImage.gif");

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function App() {
  const [orientation, setOrientation] = useState(1);
  const [name, setName] = useState("PetMon");
  const [age, setAge] = useState(-1);
  const [weight, setWeight] = useState("0");
  const [currSprite, setSprite] = useState(sprite);
  const [hunger, setHunger] = useState(0);
  const [strength, setStrength] = useState(0);
  const [bPower, setBPower] = useState(0);
  const [careMistakes, setCareMistakes] = useState(0);
  const [inmortality, setInmortality] = useState(true);

  const [statsPage, setStatsPage] = useState(0);

  useEffect(() => {
    checkOrientation();
    console.log(statsPage);
    const subscription = ScreenOrientation.addOrientationChangeListener(
      handleOrientationChange
    );
    return () => {
      ScreenOrientation.removeOrientationChangeListeners(subscription);
    };
  }, [statsPage]);

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
              onPress={() =>
                setStatsPage(
                  statsPage / 8 === 1 ? statsPage * 0 + 1 : statsPage + 1
                )
              }
              title="Stats"
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
          {statsPage % 8 === 0 ? (
            <ImageBackground
              source={sprite}
              style={styles.image}
            ></ImageBackground>
          ) : (
            <React.Fragment>
              {statsPage === 1 && (
                <React.Fragment>
                  <Text style={styles.statsText}>AGE: {age}</Text>
                  <Text style={styles.statsText2}>WEIGHT: {weight}</Text>
                </React.Fragment>
              )}
              {statsPage === 2 && (
                <React.Fragment>
                  <Text style={styles.statsText}>HUNGER: {hunger}</Text>
                </React.Fragment>
              )}
              {statsPage === 3 && (
                <React.Fragment>
                  <Text style={styles.statsText}>STRENGHT: {strength}</Text>
                </React.Fragment>
              )}
              {statsPage === 4 && (
                <React.Fragment>
                  <Text style={styles.statsText}>B-POWER: {bPower}</Text>
                </React.Fragment>
              )}
              {statsPage === 5 && (
                <React.Fragment>
                  <Text style={styles.statsText}>
                    CARE MISTAKES: {careMistakes}
                  </Text>
                </React.Fragment>
              )}
              {statsPage === 6 && (
                <React.Fragment>
                  <Text style={styles.statsText}>
                    Ranked Battles: {careMistakes}
                  </Text>
                </React.Fragment>
              )}
              {statsPage === 7 && (
                <React.Fragment>
                  <Text style={styles.statsText}>
                    Unranked Battles: {careMistakes}
                  </Text>
                </React.Fragment>
              )}
              <ImageBackground
                source={statsImage}
                style={styles.image}
              ></ImageBackground>
            </React.Fragment>
          )}
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
            <Button onPress={onPressStats} title="Stats" color="#000000a0" />
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
  statsText: {
    marginTop: 50,
    position: "absolute",
    zIndex: 1,
  },

  statsText2: {
    paddingTop: 100,
    position: "absolute",
    zIndex: 1,
  },
});

const onPressLearnMore = () => {
  //For generating alert on buttton click
  alert("Feed your digimon bitch");
  ScreenOrientation.getOrientationAsync().then((data) => console.log(data));
};

const onPressStats = async () => {
  //For generating alert on buttton click
  alert("Feed your digimon man");
};
