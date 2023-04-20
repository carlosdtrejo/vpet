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
import * as Font from "expo-font";
import { Dimensions } from "react-native";

//const sprite = require("./animatedSprite4.gif");

let sprite = require("./eatingSprite2.gif");
let sprite2 = require("./animatedSprite2.gif");
let statsImage = require("./statsImage.png");
let actualSprite = require("./sprite.gif");
let fullHealth = require("./fullHealth7.png");
let digiPower = require("./bpower3.png");
let careMstk = require("./careMistakes.png");

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
  const [walk, setWalk] = useState(280);
  const [direction, setDirection] = useState(true); //true for left false for right

  const [statsPage, setStatsPage] = useState(0);

  useEffect(() => {
    checkOrientation();
    walking();
    Font.loadAsync({
      ARCADE_N: require("./assets/fonts/PublicPixel.ttf"),
    });
    // console.log(statsPage);
    console.log(walk);
    if (walk <= 20) {
      setDirection(false);
    } else if (walk >= 280) {
      setDirection(true);
    }
    const subscription = ScreenOrientation.addOrientationChangeListener(
      handleOrientationChange
    );
    return () => {
      ScreenOrientation.removeOrientationChangeListeners(subscription);
    };
  }, [statsPage, walk, direction]);

  const walking = async () => {
    if (direction && walk >= 40) {
      await setTimeout(() => {
        setWalk(walk - 20);

        // else if (walk - 20 <= 20) {
        //   setWalk(walk + 20);
        // } else if (walk >= 120) {
        //   let path = Math.floor(Math.random() * 2);
        //   console.log(path);
        //   if (path > 0) {
        //     setWalk(walk + 20);
        //   } else {
        //     setWalk(walk - 20);
        //   }
        // }
      }, 1000);
    } else if (!direction && walk <= 260) {
      await setTimeout(() => {
        setWalk(walk + 20);

        // else if (walk - 20 <= 20) {
        //   setWalk(walk + 20);
        // } else if (walk >= 120) {
        //   let path = Math.floor(Math.random() * 2);
        //   console.log(path);
        //   if (path > 0) {
        //     setWalk(walk + 20);
        //   } else {
        //     setWalk(walk - 20);
        //   }
        // }
      }, 1000);
    }
  };
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
                  statsPage / 9 === 1 ? statsPage * 0 + 1 : statsPage + 1
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
          {statsPage % 9 === 0 ? (
            <View style={styles.container}>
              <ImageBackground source={statsImage} style={styles.image}>
                <Image
                  style={styles.sprite(walk)}
                  source={actualSprite}
                  placeholder={blurhash}
                  contentFit="cover"
                />
              </ImageBackground>
            </View>
          ) : (
            <React.Fragment>
              {statsPage === 1 && (
                <React.Fragment>
                  <Text style={styles.statsText}>
                    {`AGE:   `}
                    {age}
                  </Text>
                  <Text style={styles.statsText2}>WEIGHT: {weight}</Text>
                </React.Fragment>
              )}
              {statsPage === 2 && (
                <React.Fragment>
                  <Text style={styles.textOverImagePortrait}>HUNGER:</Text>
                  <Image source={fullHealth} style={styles.healthImage}></Image>
                </React.Fragment>
              )}
              {statsPage === 3 && (
                <React.Fragment>
                  <Text style={styles.textOverImagePortrait}>STRENGHT:</Text>
                  <Image source={fullHealth} style={styles.healthImage}></Image>
                </React.Fragment>
              )}
              {statsPage === 4 && (
                <React.Fragment>
                  <Text style={styles.textOverImagePortrait}>MUSCLE:</Text>
                  <Image source={fullHealth} style={styles.healthImage}></Image>
                </React.Fragment>
              )}
              {statsPage === 5 && (
                <React.Fragment>
                  <Text style={styles.textOverImagePortrait}>B-POWER:</Text>
                  <Image source={digiPower} style={styles.healthImage}></Image>
                </React.Fragment>
              )}
              {statsPage === 6 && (
                <React.Fragment>
                  <Text style={styles.textOverImagePortrait}>
                    CARE MISTAKES:
                  </Text>
                  <Image source={careMstk} style={styles.healthImage}></Image>
                </React.Fragment>
              )}
              {statsPage === 7 && (
                <React.Fragment>
                  <Text style={styles.statsText}>
                    Ranked Battles: {careMistakes}
                  </Text>
                </React.Fragment>
              )}
              {statsPage === 8 && (
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
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  image: {
    resizeMode: "cover",
    width: 450,
    height: 290,
    flex: 2,
    justifyContent: "center",
  },
  sprite: (walk) => ({
    left: walk,
    width: 100,
    height: 100,
    position: "absolute",
    bottom: 30,
    right: 0,
  }),
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
    flex: 2,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
    position: "relative",
    width: Dimensions.get("window").width,
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
    flex: 2,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    width: Dimensions.get("window").width,
    marginBottom: 20,
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
    paddingLeft: 30,
    position: "absolute",
    zIndex: 1,
    alignItems: "center",
    fontFamily: "ARCADE_N",
    fontSize: 30,
    textAlign: "left",
  },

  statsText2: {
    paddingLeft: 30,
    paddingTop: 100,
    position: "absolute",
    zIndex: 1,
    fontFamily: "ARCADE_N",
    fontSize: 30,
    textAlign: "left",
  },
  healthImage: {
    position: "absolute",
    width: 330,
    height: 170,
    zIndex: 1,
    marginLeft: 30,
    //backgroundColor: "red",
  },
  textOverImagePortrait: {
    paddingLeft: 60,
    paddingBottom: 50,
    position: "absolute",
    zIndex: 1,
    fontFamily: "ARCADE_N",
    fontSize: 30,
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
