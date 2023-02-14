import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Lottie from 'lottie-react-native';

export default function Loader({show}) {
  if (show) return (
    <View style={styles.container}>
        <View style={styles.sub}>
            <Lottie style={styles.lottie} source={require('../assets/loader.json')} autoPlay loop />
            <Text style={styles.text}>Memuat</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: 'transparent', },
    sub: {
        flexDirection: "row", 
        gap: 1, 
        position: "absolute", 
        justifyContent: "center", 
        alignItems: "center",
        width: "100%", 
        height: "100%",
        left: 0,
        bottom: 0
    },
    lottieContainer: {
        width: "100%",
        height: "50%",
        backgroundColor: "black"
    },
    lottie: { width: "40%", height: "40%", position: 'absolute', top: "0%", left: 70},
    text: { color: '#ff6823', fontSize: 15, position: 'absolute', top: "0%", fontWeight: 'bold'},
});