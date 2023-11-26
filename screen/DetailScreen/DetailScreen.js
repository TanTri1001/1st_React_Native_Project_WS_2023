import React, {useState} from "react";
import {Button, Image, StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";


const catImage = {
    location: require("/assets/cat.jpeg"),
    message: "bored of cat? click \"change\""}
const guineapigImage = {
    location: require("/assets/guineapig.jpg"),
    message: "bored of guinea pig? click \"change\""}


export default function DetailScreen({route,navigation}) {
    const [content, setContent] = useState(catImage)
    const onClickChangePic = () => {
        if (content === catImage) {
            setContent(guineapigImage)
        } else {
            setContent(catImage)
        }
    }


    return (
        <View style={styles.container}>
            <text>Detail</text>
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
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});