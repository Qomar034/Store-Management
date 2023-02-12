import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AccountScreen(){
    return (
        <SafeAreaView style={styles.container}>
            <Text>This Is Dummy Account Screen</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fef9ed',
      alignItems: 'center',
      justifyContent: 'center',
    },
})