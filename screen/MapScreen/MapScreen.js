import {ActivityIndicator, Button, FlatList, Pressable, StyleSheet, Text, View} from "react-native";
import {useEffect, useState} from "react";
import {StatusBar} from "expo-status-bar";
import useSWR from "swr";
import {load} from "../../data/posts";

export default function MapScreen({route,navigation}) {
    const {id = -1} = route.params;

    const {data, isLoading} = useSWR(`/posts/${id}`, load);



    return (
        <View style={styles.container}>
            {isLoading
                ? <ActivityIndicator size="large" />
                : <Text>{data.body}</Text>
            }
            <Button title={'Back'} onPress={()=> navigation.goBack()}/>
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