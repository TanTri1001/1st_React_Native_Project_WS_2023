import {ActivityIndicator,Button, FlatList, Pressable, StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useEffect, useState} from "react";
import useSWR from "swr";
import {load} from "../../data/posts";


export default function HomeScreen({navigation}) {


    const {data, isLoading} = useSWR('/posts', load);

    return (
        <View style={styles.container}>
            {isLoading
                ? <ActivityIndicator size="large" />
                : <FlatList
                    data={data.posts}
                    renderItem={({item}) =>
                        <Pressable onPress={() => navigation.navigate('Map', {id: item.id})}>
                            <Text>{item.title}</Text>
                        </Pressable>
                    }/>
           }


            <StatusBar style="auto"/>
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