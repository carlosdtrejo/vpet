import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

const sprite = require("./animatedSprite2.gif");
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World of Great Value Digimon!</Text>

      <StatusBar style="auto" />
      <View>
        <Image
          contentFit="cover"
          source={sprite}
          style={{
            height: 100,
            width: 330,
            marginTop: 50,
          }}
        />
      </View>
      {/* <Image
        src={{ uri: "./sprite.gif" }}
        style={{ width: 100, height: 100 }}
        transition={1000}
        placeholder={blurhash}
        contentFit="cover"
      /> */}
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
});
