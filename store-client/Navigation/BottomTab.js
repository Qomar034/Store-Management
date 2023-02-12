import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { StyleSheet, View, Image, Text } from "react-native"
import AccountScreen from "../screens/AccountScreen"
import ChatScreen from "../screens/ChatScreen"
import HomeScreen from "../screens/HomeScreen"
import { HomeStack } from "../screens/StackedScreens"

const Tab = createBottomTabNavigator()

export default BottomTab = () => {
    return (
        <Tab.Navigator 
            initialRouteName="Home" 
            screenOptions={({route}) => ({
                tabBarIcon: ({color, focused, size}) => tabIconFunc(route.name, focused), ...containerTab,
        })}>
            <Tab.Screen name="Chat" component={ ChatScreen } />
            <Tab.Screen name="Home" component={ HomeStack } />
            <Tab.Screen name="Account" component={ AccountScreen } />
        </Tab.Navigator>
    )
}

const tabIconFunc = (path, focused) => {
    let source; let name;

    if (path == 'Home') {source = require('../assets/home.png'); name = 'Home'}
    if (path == 'Chat') {source = require('../assets/chat.png'); name = "Chat"}
    if (path == 'Account') {source = require('../assets/user.png'); name = "Account"}

    return ( path == 'Home' 
    ? (<View style={styles.homeButton} >
        <Image 
            source={source}
            resizeMode='contain'
            style={styles.homeTab} />
    </View>)
    : (<View style={styles.iconTab} >
        <Image
            source={source}
            resizeMode='contain'
            style={ focused ? styles.activeImageTab : styles.imageTab } />
        <Text style={focused ? styles.activeLabelTab : styles.labelTab}>{name}</Text>
    </View>)
    )
}

const styles = StyleSheet.create({
    mainTab: {
        position: 'absolute',
        backgroundColor: 'white',
        height: 80,
    },
    iconTab: {
        alignItems: 'center', 
        justifyContent: 'center', 
        top: 5,
    },
    homeButton: {
        alignItems: 'center', 
        justifyContent: 'center', 
        position: 'absolute',
        top: "-25%",
        backgroundColor: "#ff6825",
        borderRadius: 50,
        width: 65,
        height: 65,
    },
    imageTab: {
        width: 35, 
        height: 35, 
        tintColor: '#ff6825'
    },
    activeImageTab: {
        width: 35, 
        height: 35, 
        tintColor: '#ffffff', 
        backgroundColor: '#ff6825', 
        borderRadius: 5,
    },
    homeTab: {
        width: 45, 
        height: 45, 
        tintColor: '#ffffff', 
        backgroundColor: '#ff6825', 
        borderRadius: 5,
    },
    labelTab: { 
        color: 'grey', 
        fontSize: 15
    },
    activeLabelTab: { 
        olor: 'red', 
        fontSize: 15
    },
})

const containerTab = {
    tabBarShowLabel: false,
    tabBarStyle: styles.mainTab,
    headerShown: false,
}