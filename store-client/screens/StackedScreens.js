import { createStackNavigator, Header } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import NotificationScreen from './NotificationScreen';

const Stack = createStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Beranda" 
        component={HomeScreen} 
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name="Notifikasi" 
        component={NotificationScreen} 
        options={{headerTintColor: "#ffffff", headerStyle: {backgroundColor: "#ff6823"}}}
      />
    </Stack.Navigator>
  );
}