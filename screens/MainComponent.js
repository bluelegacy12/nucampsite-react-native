import DirectoryScreen from './DirectoryScreen';
import { View, Platform } from 'react-native';
import CampsiteInfoScreen from './CampsiteInfoScreen';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';

const DirectoryNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName='Directory'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#5637DD'
                },
                headerTintColor: '#fff'
            }}
        >
            <Stack.Screen
                name='Directory'
                component={DirectoryScreen}
                options={{ title: 'Campsite Directory' }}
            />
            <Stack.Screen
                name='CampsiteInfo'
                component={CampsiteInfoScreen}
                options={({ route }) => ({
                    title: route.params.campsite.name
                })}
            />
        </Stack.Navigator>
    );
}

const Main = () => {
    return (
        <View style={{
            flex: 1,
            paddingTop:
                Platform.OS === 'ios' ? 0 : Constants.statusBarHeight

            // Constants does not seem to work, will not even be recognized by import at top of page when used
        }}
        >
            <DirectoryNavigator />
        </View>
    );
};

export default Main;