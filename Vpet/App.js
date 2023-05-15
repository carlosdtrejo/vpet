import React, { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Animated,
  Easing,
  TouchableWithoutFeedback,
} from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { SafeAreaView, Dimensions } from "react-native";
import { Pedometer } from "expo-sensors";
import Steps from "./steps";

//const sprite = require("./animatedSprite4.gif");

let sprite = require("./eatingSprite2.gif");
let sprite2 = require("./animatedSprite2.gif");
let statsImage = require("./statsImage.png");
let actualSprite = require("./resolutionTest.gif");
let fullHealth = require("./fullHealth7.png");
let digiPower = require("./bpower3.png");
let careMstk = require("./careMistakes.png");
let digiStats = require("./digiStats16.png");
let digiFood = require("./digiFood4.png");
let digiTrain = require("./digiTrain.png");
let digiFight = require("./digiFight.png");
let digiPoop = require("./digiPoop4.png");
let digiAid = require("./digiAid.png");
let digiLight = require("./digiLight14.png");
let digiAlert = require("./digiAlert.png");
let digiMeal = require("./digiMeal2.png");
let digiPill = require("./digiPill.png");
let digiPill1 = require("./digiPill1.png");
let digiPill2 = require("./digiPill2.png");
let digiPill3 = require("./digiPill3.png");
let digiSleep = require("./digiSleep2.gif");
let digiSleepLightsOn = require("./digiSleep1.gif");
let happyDigi1 = require("./happyDigi1.png");
let happyDigi2 = require("./happyDigi2.png");
let sickDigi = require("./sickDigi.gif");

let walkLeft = require("./charizardWalkLeft.gif");
let walkRight = require("./charizardWalkRight.gif");
let walkLeft1 = require("./walkLeft1.png");
let walkLeft2 = require("./walkLeft2.png");
let walkRight1 = require("./walkRight1.png");
let walkRight2 = require("./walkRight2.png");
let digiFoodBite1 = require("./digiFoodBite1.png");
let digiFoodBite2 = require("./digiFoodBite2.png");
let digiFoodBite3 = require("./digiFoodBite3.png");
let digiOpenMouth = require("./digiMouthOpen.png");
let digitalPoop = require("./digitalPoop.gif");
let digiWave = require("./digiWave.png");
let digiSun = require("./digiSun.png");
let digiHealth = require("./digiHealth.png");
let digiNoLeft = require("./digiNoLeft.png");
let digiNoRight = require("./digiNoRight.png");
let runningDigi = require("./runningDigi3.gif");
let digiObstacle = require("./digiObstacle3.png");
let selectionButton = require("./selectionButton.png");
let bulletLeft = require("./bulletLeft.png");
let bulletRight = require("./bulletRight.png");

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function App() {
  const [orientation, setOrientation] = useState(1);
  const [name, setName] = useState("PetMon");
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState("0");
  const [currSprite, setSprite] = useState(sprite);
  const [hunger, setHunger] = useState(0);
  const [strength, setStrength] = useState(0);
  const [bPower, setBPower] = useState(0);
  const [careMistakes, setCareMistakes] = useState(0);
  const [inmortality, setInmortality] = useState(true);
  const [foodMenu, setFoodMenu] = useState(false);
  const [walk, setWalk] = useState(280);
  const [direction, setDirection] = useState(true); //true for left false for right
  const [feeding, setFeeding] = useState(false);
  const [walkingSprite, setWalkingSprite] = useState(walkLeft1); // 16x16 with 128 resolution
  const [step, setStep] = useState(0);
  const [bite, setBite] = useState(0);
  const [eatingSprite, setEatingSprite] = useState(walkLeft1);
  const [foodIcon, setFoodIcon] = useState(digiFood);
  const [foodItem, setFoodItem] = useState(true); //true for chicken false for pill
  const [cleanPoop, setCleanPoop] = useState(false);
  const [poop, setPoop] = useState(true);
  const [lightOff, setLightOff] = useState(false);
  const [currentTime, setCurrenTime] = useState(new Date());
  const [isSleeping, setIsSleeping] = useState(false);
  const [playHappyDigiSegment, setPlayHappyDigiSegment] = useState(false);
  const [happyCounter, setHappyCounter] = useState(1);
  const [happyDigiSprite, setHappyDigiSprite] = useState(happyDigi1);
  const [showDigiSun, setShowDigiSun] = useState(false);
  const [isDigiSick, setIsDigiSick] = useState(false);
  const [digiHeal, setDigiHeal] = useState(false);
  const [healingDigi, setHealingDigi] = useState(false);
  const [gotHealed, setGotHealed] = useState(false);
  const [noSegment, setNoSegment] = useState(false);
  const [digiNoSprite, setDigiNoSprite] = useState(digiNoLeft);
  const [showTrainingMenu, setShowTrainingMenu] = useState(false);
  const [training1, setTraining1] = useState(false);
  const [training2, setTraining2] = useState(false);
  const [adventure, setAdventure] = useState(false);
  const [jumpObstacle, setJumpObstacle] = useState(false);
  const [jump, setjump] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [comingDown, setComingDown] = useState(false);
  const [hold, setHold] = useState(false);
  const [jumpingSpite, setJumpingSprite] = useState(runningDigi);
  const [jumpStep, setJumpStep] = useState(0);
  const [poopLocation, setPoopLocation] = useState(20);
  const [digiSpot, setDigiSpot] = useState(0);
  const [waveLocation, setWaveLocation] = useState(
    Dimensions.get("window").width
  );
  const [cactusLocation, setCactusLocation] = useState(
    Dimensions.get("window").width
  );
  const [cactusSpeed, setCactusSpeed] = useState(20);
  const [waveSpeed, setWaveSpeed] = useState(35);
  const [statsPage, setStatsPage] = useState(0);
  const [score, setScore] = useState(0);

  let bottom = useRef(
    new Animated.Value(Dimensions.get("window").width)
  ).current; // Initial value for opacity: 0
  let left = useRef(new Animated.Value(Dimensions.get("window").width)).current; // Initial value for opacity: 0
  let bulletLocation = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  const [training1AnimationOver, setTraining1AnimationOver] = useState(false);
  const [taining1CPUchoice, setTaining1CPUchoice] = useState(0);
  const [bulletChoice, setBulletChoice] = useState(false);
  const [topOrBottom, setTopOrBottom] = useState(-1);

  //let cactusAnimation = new Animated.Animated();

  let animatedStyles = [
    {
      translateX: bottom,
      width: 100,
      height: 100,
      bottom: -90,
      zIndex: 0,
      //toValue: -200,
      //backgroundColor: "red",
    },
  ];
  let animatedStyles2 = [
    {
      translateX: bulletLocation,
      width: 30,
      height: 30,
      bottom: -70,
      //toValue: -200,
      //backgroundColor: "red",
    },
  ];

  // let movingCactus = [
  //   {
  //     translateX: left,
  //     //toValue: -700,
  //     zIndex: 1,
  //   },
  // ];

  const animate = () => {
    Animated.sequence([
      Animated.timing(bottom, {
        toValue:
          Dimensions.get("window").width - Dimensions.get("window").width,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setTraining1AnimationOver(true);
      setTaining1CPUchoice(Math.floor(Math.random() * 2));
    });
  };

  useEffect(() => {
    if (currentTime.getHours() >= 8 && currentTime.getHours() < 24) {
      setIsSleeping(false);
    } else {
      setIsSleeping(false);
    }

    if (training1) {
      if (!isGameOver && !playHappyDigiSegment) {
        // console.log("bulletchoice: " + bulletChoice);
        console.log("toporBottom: " + topOrBottom);
      }
    }

    if (adventure) {
    }

    checkOrientation();
    if (!cleanPoop) {
      walking();
    } else {
      moveWave();
    }

    if (feeding) {
      eat();
    }

    if (digiHeal) {
      healDigi();
    }

    if (gotHealed) {
      setPlayHappyDigiSegment(true);
      setGotHealed(false);
    }

    if (playHappyDigiSegment) {
      playHappySegment();
      if (score === 8) {
        setShowTrainingMenu(true);
        setScore(0);
        //setTraining1(true);
      }
    }

    if (noSegment) {
      playNoSegment();
    }
    Font.loadAsync({
      ARCADE_N: require("./assets/fonts/PublicPixel.ttf"),
    });
    // console.log(statsPage);
    //console.log(walk);
    if (!cleanPoop && !showTrainingMenu) {
      if (walk <= 20) {
        setDirection(false);
      } else if (walk >= 280) {
        setDirection(true);
      }
    }
    const subscription = ScreenOrientation.addOrientationChangeListener(
      handleOrientationChange
    );
    return () => {
      ScreenOrientation.removeOrientationChangeListeners(subscription);
    };
  }, [
    statsPage,
    walk,
    direction,
    walkingSprite,
    step,
    feeding,
    bite,
    eatingSprite,
    foodIcon,
    foodItem,
    cleanPoop,
    waveLocation,
    poopLocation,
    happyCounter,
    happyDigiSprite,
    isDigiSick,
    digiHeal,
    gotHealed,
    healingDigi,
    noSegment,
    digiNoSprite,
    showTrainingMenu,
    waveSpeed,
    jumpObstacle,
    jump,
    comingDown,
    hold,
    cactusLocation,
    cactusSpeed,
    jumpStep,
    score,
    left,
    bottom,
    bulletChoice,
    taining1CPUchoice,
  ]);

  const playNoSegment = async () => {
    await setTimeout(() => {
      if (happyCounter % 2 == 0 || happyCounter == 0) {
        setDigiNoSprite(digiNoLeft);
      } else {
        setDigiNoSprite(digiNoRight);
      }

      if (happyCounter === 4) {
        setHappyCounter(0);
        setNoSegment(false);
      }
      if (happyCounter < 4) {
        setHappyCounter(happyCounter + 1);
      }
    }, 500);
  };

  const healDigi = async () => {
    await setTimeout(() => {
      if (happyCounter % 2 == 0) {
        setHealingDigi(false);
      } else {
        setHealingDigi(true);
      }

      if (happyCounter === 6) {
        setHappyCounter(1);
        setIsDigiSick(false);
        setHealingDigi(false);
        setDigiHeal(false);
        setGotHealed(true);
      }
      if (happyCounter < 6) {
        setHappyCounter(happyCounter + 1);
      }
    }, 500);
  };

  const playHappySegment = async () => {
    await setTimeout(() => {
      if (happyCounter % 2 == 0) {
        setHappyDigiSprite(happyDigi1);
        setShowDigiSun(false);
      } else {
        setHappyDigiSprite(happyDigi2);
        setShowDigiSun(true);
      }

      if (happyCounter === 4) {
        setHappyCounter(2);
        setPlayHappyDigiSegment(false);
        setHappyDigiSprite(happyDigi1);
        setShowDigiSun(false);
      }
      if (happyCounter < 4) setHappyCounter(happyCounter + 1);
    }, 500);
  };

  const moveWave = async () => {
    await setTimeout(() => {
      if (waveLocation < 0) {
        if (poop) {
          setPlayHappyDigiSegment(true);
        }
        setWaveSpeed(35);
        setPoop(false);
        setCleanPoop(false);
        setWaveLocation(Dimensions.get("window").width);
      } else {
        setWaveLocation(waveLocation - waveSpeed);
        if (waveLocation - 120 <= digiSpot) {
          setDigiSpot(waveLocation - 120);
          if (!waveSpeed > 25) setWaveSpeed(45);
        }
        if (waveLocation - 120 <= poopLocation) {
          setPoopLocation(waveLocation - 120);
        }
      }
    }, 25);
  };

  const eat = async () => {
    await setTimeout(() => {
      if (bite % 2 === 0) {
        setEatingSprite(walkLeft1);
        if (bite === 2) {
          if (foodItem) setFoodIcon(digiFoodBite1);
          else setFoodIcon(digiPill1);
        }
        if (bite === 4) {
          if (foodItem) setFoodIcon(digiFoodBite2);
          else setFoodIcon(digiPill2);
        }
        if (bite === 6) {
          if (foodItem) setFoodIcon(digiFoodBite3);
          else setFoodIcon(digiPill3);
        }
      } else {
        setEatingSprite(digiOpenMouth);
      }
      if (bite === 7) {
        setBite(0);
        setFeeding(false);
        setFoodIcon(digiFood);
      }
      setBite(bite + 1);
    }, 300);
  };

  const walking = async () => {
    if (direction && walk >= 40) {
      await setTimeout(() => {
        setWalk(walk - 20);
        if (step == 1) {
          setWalkingSprite(walkLeft2);
          setStep(0);
        } else {
          setWalkingSprite(walkLeft1);
          setStep(1);
        }

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
        if (step == 1) {
          setWalkingSprite(walkRight2);
          setStep(0);
        } else {
          setWalkingSprite(walkRight1);
          setStep(1);
        }

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
            {/* <Button
              onPress={() =>
                setStatsPage(
                  statsPage / 9 === 1 ? statsPage * 0 + 1 : statsPage + 1
                )
              }
              title="Stats"
              color="#000000a0"
            /> */}
            <TouchableOpacity
              onPress={() => {
                if (digiHeal) {
                  return;
                }
                setStatsPage(
                  statsPage / 9 === 1 ? statsPage * 0 + 1 : statsPage + 1
                );
                setFoodMenu(false);
                setBite(0);
              }}
              title="Stats"
              color="#000000a0"
            >
              <Image source={digiStats} />
            </TouchableOpacity>
            {/* <Button
              onPress={onPressLearnMore}
              title="Click Me"
              color="#000000a0"
            /> */}
            <TouchableOpacity
              onPress={() => {
                if (isSleeping || isDigiSick) {
                  return;
                }
                setFoodMenu(!foodMenu);
                setFeeding(false);
                setBite(0);
                setCleanPoop(false);
              }}
              title="Stats"
              color="#000000a0"
            >
              <Image source={digiFood} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setTraining1(false);
                setTraining2(false);
                setAdventure(false);
                setShowTrainingMenu(!showTrainingMenu);
              }}
              title="Stats"
              color="#000000a0"
            >
              <Image source={digiTrain} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onPressLearnMore}
              title="Stats"
              color="#000000a0"
            >
              <Image source={digiFight} />
            </TouchableOpacity>
          </View>
          {statsPage % 9 === 0 ? (
            <View style={styles.container}>
              <ImageBackground source={statsImage} style={styles.image}>
                {foodMenu ? (
                  <View style={styles.foodChoice}>
                    {!feeding ? (
                      <React.Fragment>
                        <TouchableOpacity
                          onPress={() => {
                            setFeeding(true);
                            setFoodItem(true);
                            setFoodIcon(digiMeal);
                            setBite(0);
                          }}
                          title="Stats"
                          color="#000000a0"
                        >
                          <Image source={digiMeal} />
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => {
                            setFeeding(true);
                            setFoodItem(false);
                            setFoodIcon(digiPill);
                            setBite(0);
                          }}
                          title="Stats"
                          color="#000000a0"
                        >
                          <Image source={digiPill} />
                        </TouchableOpacity>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <Image
                          style={styles.foodPlace}
                          source={foodIcon}
                          placeholder={blurhash}
                          contentFit="cover"
                        />
                        <Image
                          style={styles.eatingPlace}
                          source={eatingSprite}
                          placeholder={blurhash}
                          contentFit="cover"
                        />
                      </React.Fragment>
                    )}
                  </View>
                ) : cleanPoop ? (
                  <React.Fragment>
                    <Image
                      style={styles.digiSpot(digiSpot)}
                      source={walkingSprite}
                      placeholder={blurhash}
                      contentFit="cover"
                    />
                    {poop && (
                      <Image
                        style={styles.poopPlac1(poopLocation)}
                        source={digitalPoop}
                        placeholder={blurhash}
                        contentFit="cover"
                      />
                    )}
                    <Image
                      style={styles.digiWave(waveLocation)}
                      source={digiWave}
                      placeholder={blurhash}
                      contentFit="cover"
                    />
                  </React.Fragment>
                ) : playHappyDigiSegment ? (
                  <React.Fragment>
                    <Image
                      style={styles.happyPlace}
                      source={happyDigiSprite}
                      placeholder={blurhash}
                      contentFit="cover"
                    />
                    {showDigiSun && (
                      <Image
                        style={styles.sunPlace}
                        source={digiSun}
                        placeholder={blurhash}
                        contentFit="cover"
                      />
                    )}
                  </React.Fragment>
                ) : noSegment ? (
                  <React.Fragment>
                    <Image
                      style={styles.happyPlace}
                      source={digiNoSprite}
                      placeholder={blurhash}
                      contentFit="cover"
                    />
                  </React.Fragment>
                ) : isDigiSick ? (
                  <React.Fragment>
                    {healingDigi && (
                      <Image
                        style={styles.digiHealPlace}
                        source={digiHealth}
                        placeholder={blurhash}
                        contentFit="cover"
                      />
                    )}
                    {lightOff ? (
                      <View style={styles.sleep} />
                    ) : (
                      <Image
                        style={styles.sleepingPlace}
                        source={sickDigi}
                        placeholder={blurhash}
                        contentFit="cover"
                      />
                    )}
                  </React.Fragment>
                ) : showTrainingMenu ? (
                  <React.Fragment>
                    {!training1 && !training2 && !adventure && (
                      <View style={styles.trainingMenu}>
                        <TouchableOpacity
                          onPress={() => {
                            bottom.resetAnimation();
                            setHappyCounter(1);
                            //setCactusLocation(Dimensions.get("window").width);
                            //setCactusSpeed(17);
                            setIsGameOver(false);
                            setTraining1(true);
                            setScore(0);
                            setTraining1AnimationOver(false);
                            animate();
                          }}
                          title="Stats"
                          color="#000000a0"
                        >
                          <Text style={styles.trainingOption}>TRAINING 1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => {
                            setTraining2(true);
                          }}
                          title="Stats"
                          color="#000000a0"
                        >
                          <Text style={styles.trainingOption}>TRAINING 2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => {
                            setAdventure(true);
                          }}
                          title="Stats"
                          color="#000000a0"
                        >
                          <Text style={styles.trainingOption}>ADVENTURE</Text>
                        </TouchableOpacity>
                      </View>
                    )}
                    {training1 && (
                      <React.Fragment>
                        <View style={styles.jumpingSpiteStyleColor}>
                          <Text style={styles.playingScore}>
                            Score: {score}
                          </Text>
                        </View>
                        <Animated.View style={animatedStyles}>
                          <Image
                            style={styles.jumpingSpot(jump)}
                            source={walkRight1}
                          />
                          <Image
                            style={styles.jumpingSpot2(jump)}
                            source={walkLeft1}
                          />
                        </Animated.View>
                        <TouchableOpacity
                          onPress={() => {
                            setTopOrBottom(1);
                          }}
                          title="Stats"
                          color="#000000a0"
                        >
                          <Image
                            style={styles.training1ButtonsTop}
                            source={selectionButton}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => {
                            setTopOrBottom(0);
                          }}
                          title="Stats"
                          color="#000000a0"
                        >
                          <Image
                            style={styles.training1ButtonsBottom}
                            source={selectionButton}
                          />
                        </TouchableOpacity>
                      </React.Fragment>
                    )}
                    {adventure && (
                      <SafeAreaView style={styles.jumpingSpiteStyleColor}>
                        <Text style={styles.gameOverText}>Digi Adventure!</Text>
                      </SafeAreaView>
                      //<Steps></Steps>
                    )}
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {lightOff ? (
                      <View style={styles.sleep}>
                        {isSleeping && (
                          <Image
                            style={styles.sleepingPlace}
                            source={digiSleep}
                            placeholder={blurhash}
                            contentFit="cover"
                          />
                        )}
                      </View>
                    ) : (
                      <React.Fragment>
                        {isSleeping ? (
                          <React.Fragment>
                            <Image
                              style={styles.sleepingPlace}
                              source={digiSleepLightsOn}
                              placeholder={blurhash}
                              contentFit="cover"
                            />
                          </React.Fragment>
                        ) : (
                          <Image
                            style={styles.sprite(walk)}
                            source={walkingSprite}
                            placeholder={blurhash}
                            contentFit="cover"
                          />
                        )}
                        {poop && (
                          <Image
                            style={styles.poopPlace}
                            source={digitalPoop}
                            placeholder={blurhash}
                            contentFit="cover"
                          />
                        )}
                      </React.Fragment>
                    )}
                  </React.Fragment>
                )}
              </ImageBackground>
            </View>
          ) : (
            <React.Fragment>
              {statsPage === 1 && (
                <React.Fragment>
                  <Text style={styles.statsText}>
                    AGE:{"\t\t\t\t\t\t\t\t\t\t\t\t"}
                    {age}
                  </Text>
                  <Text style={styles.statsText2}>
                    WEIGHT:{"\t\t\t\t"}
                    {weight}
                  </Text>
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
                  <Text style={styles.textOverImagePortrait}>STRENGTH:</Text>
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
                    {"\n"}
                    Ranked Battles: {"\n\n"}
                    W: {careMistakes} {"\n"}
                    L: {careMistakes}
                  </Text>
                </React.Fragment>
              )}
              {statsPage === 8 && (
                <React.Fragment>
                  <Text style={styles.statsText}>
                    {"\n"}
                    Unranked Battles: {"\n\n"}
                    W: {careMistakes} {"\n"}
                    L: {careMistakes}
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
            <TouchableOpacity
              onPress={() => {
                if (isSleeping || isDigiSick || cleanPoop || showTrainingMenu) {
                  return;
                }
                setCleanPoop(!cleanPoop);
                setDigiSpot(walk);
                setFoodMenu(false);
                setFeeding(false);
                setBite(0);
                setStatsPage(9);
                setHappyCounter(1);
              }}
              title="Stats"
              color="#000000a0"
            >
              <Image source={digiPoop} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (isSleeping || cleanPoop || showTrainingMenu) {
                  return;
                }
                if (isDigiSick) {
                  setDigiHeal(true);
                } else {
                  setHappyCounter(1);
                  setNoSegment(true);
                }
              }}
              title="Stats"
              color="#000000a0"
            >
              <Image source={digiAid} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setLightOff(!lightOff);
                setFoodMenu(false);
                setFeeding(false);
                setBite(0);
                setStatsPage(9);
                setCleanPoop(false);
              }}
              title="Stats"
              color="#000000a0"
            >
              <Image source={digiLight} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onPressLearnMore}
              title="Stats"
              color="#000000a0"
            >
              <Image source={digiAlert} />
            </TouchableOpacity>
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
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2.7,
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
  digiSpot: (digiSpot) => ({
    left: digiSpot,
    width: 100,
    height: 100,
    position: "absolute",
    bottom: 30,
    right: 0,
  }),
  digiWave: (waveLocation) => ({
    left: waveLocation,
    width: 100,
    height: 100,
    position: "absolute",
    bottom: 30,
    right: 0,
  }),
  cactusObstacle: (cactusLocation) => ({
    position: "absolute",
    bottom: 50,
    left: cactusLocation,
    zIndex: 1,
    height: 45,
    width: 1400,
  }),
  poopPlac1: (poopLocation) => ({
    left: poopLocation,
    position: "absolute",
    bottom: 30,
  }),
  eatingPlace: {
    width: 100,
    height: 100,
    position: "absolute",
    bottom: -70,
    right: 90,
  },
  foodPlace: {
    width: 70,
    height: 70,
    position: "absolute",
    bottom: -30,
    left: 80,
  },
  sleepingPlace: {
    position: "absolute",
    bottom: 30,
    left: Dimensions.get("window").width / 2.5,
  },
  digiHealPlace: {
    position: "absolute",
    bottom: 85,
    left: Dimensions.get("window").width / 3.5,
    zIndex: 1,
    height: 50,
    width: 50,
  },
  happyPlace: {
    width: 100,
    height: 100,
    position: "absolute",
    bottom: 30,
    left: Dimensions.get("window").width / 2.5,
  },
  sunPlace: {
    width: 60,
    height: 60,
    position: "relative",
    bottom: 20,
    left: Dimensions.get("window").width / 1.6,
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
  statsText3: {
    paddingLeft: Dimensions.get("window").width / 4.4,
    paddingTop: 20,
    position: "absolute",
    zIndex: 1,
    fontFamily: "ARCADE_N",
    fontSize: 30,
    textAlign: "center",
    marginTop: -80,
  },
  playingScore: {
    //paddingLeft: Dimensions.get("window").width / 4.4,
    //paddingTop: 70,
    //paddingBottom: 80,
    position: "relative",
    zIndex: 1,
    fontFamily: "ARCADE_N",
    fontSize: 15,
    textAlign: "center",
    //marginTop: -80,
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
  gameOverText: {
    paddingLeft: 60,
    marginTop: -110,
    position: "absolute",
    zIndex: 1,
    fontFamily: "ARCADE_N",
    fontSize: 30,
  },

  training1ButtonsBottom: {
    //paddingLeft: 120,
    height: 30,
    width: 30,
    //paddingTop: 0,
    marginLeft: Dimensions.get("window").width / 3.5,
    paddingBottom: 20,
    position: "absolute",
    zIndex: 2,
    //backgroundColor: "red",
    marginTop: -60,
  },
  training1ButtonsTop: {
    height: 30,
    width: 30,
    marginLeft: Dimensions.get("window").width / 3.5,
    paddingBottom: 20,
    marginTop: -120,
    position: "absolute",
    zIndex: 2,
    // backgroundColor: "red",
  },
  foodChoice: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    // marginRight: 70,
    marginTop: 30,
  },
  poopPlace: {
    // width: 100,
    // height: 100,
    position: "absolute",
    bottom: 30,
    left: 20,
  },
  sleep: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 4,
    backgroundColor: "black",
    position: "absolute",
    bottom: 12,
    zIndex: 1,
  },
  trainingMenu: {
    marginTop: 30,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  trainingOption: {
    margin: 10,
    padding: 5,
    fontFamily: "ARCADE_N",
    fontSize: 25,
  },
  jumpingSpot: (jump) => ({
    width: 100,
    height: 100,
    position: "absolute",
    bottom: 120,
    //left: Dimensions.get("window").width / 4.5,
    // left: 0,
    zIndex: -1,
    //backgroundColor: "red",
  }),
  jumpingSpot2: (jump) => ({
    width: 100,
    height: 100,
    position: "absolute",
    bottom: 120,
    left:
      Dimensions.get("window").width - 0.26 * Dimensions.get("window").width,
    // left: 0,
    zIndex: -1,
    //backgroundColor: "red",
  }),

  bulletRight1: {
    left: Dimensions.get("window").width - 0.4 * Dimensions.get("window").width,
    bottom: 160,
  },
  bulletLeft1: {
    left: Dimensions.get("window").width - 0.7 * Dimensions.get("window").width,
    bottom: 70,
    //backgroundColor: "red",
  },
  // jumpingSpiteStyle: {

  //   backgroundColor: "black",
  // },
  jumpingSpiteStyleColor: {
    //bottom: -70,
    //flex: 1,
    marginTop: 60,
    marginBottom: 90,
    //backgroundColor: "black",
    //marginBottom: Dimensions.get("window").height * 0.24,
    //width: Dimensions.get("window").width,
    //height: Dimensions.get("window").height / 4,
    // zIndex: 1,
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
