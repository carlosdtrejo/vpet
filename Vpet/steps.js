import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  LogBox,
} from "react-native";
import { Pedometer } from "expo-sensors";

const Steps = () => {
  const [isPedometerAvailable, setIsPedometerAvailable] = useState("checking");
  const [pastStepCount, setPastStepCount] = useState(0);
  const [currentStepCount, setCurrentStepCount] = useState(0);

  useEffect(() => {
    const subscription = subscribe();
    //return () => subscription && subscription.remove();
  }, [currentStepCount, pastStepCount]);

  const subscribe = async () => {
    const isAvailable = Pedometer.isAvailableAsync().then(
      (result) => {
        console.log("hello");
        setIsPedometerAvailable(result);
      },
      (error) => {
        console.log("hello error");

        setIsPedometerAvailable("false");
      }
    );
    // setIsPedometerAvailable(String(isAvailable));

    if (isAvailable) {
      // try {
      //   const { status } = Pedometer.requestPermissionsAsync().then(
      //     (result) => {
      //       Pedometer.watchStepCount((result) => {
      //         console.log(result.steps.__h);
      //         setCurrentStepCount(result.steps);
      //       });
      //     }
      //   );
      // } catch (error) {
      //   console.log("fuck off");
      // }

      const subscription = Pedometer.watchStepCount((result) => {
        console.log("step " + currentStepCount);

        console.log(result.steps);
        setCurrentStepCount(result.steps);
        console.log("your balls");
      });
    } else {
      console.log("not available");
    }
  };

  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <Text>Pedometer.isAvailableAsync(): {isPedometerAvailable}</Text>
      <Text>Steps taken in the last 24 hours: {pastStepCount}</Text>
      <Text>Walk! And watch this go up: {currentStepCount}</Text>
    </View>
  );
};

export default Steps;
