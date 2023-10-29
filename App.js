import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import { StyleSheet, Text, View, Image, Button } from 'react-native';
const catImage = {
    location: require("../AwesomeProject/assets/cat.jpeg"),
    message: "bored of cat? click \"change\""}
const guineapigImage = {
    location: require("../AwesomeProject/assets/guineapig.jpg"),
    message: "bored of guinea pig? click \"change\""}



export default function App() {
    const [content, setContent] = useState(catImage)
    const onClickChangePic = () => {
        if (content === catImage) {
            setContent(guineapigImage)
        } else {setContent(catImage)}
    }
  return (
    <View style={styles.container}>
        <Image
           source={content.location}
           style={{width: 200, height: 200}}
         />
      <Text>{content.message}</Text>

        <Button
            title = "change"
            onPress = {onClickChangePic}

        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
