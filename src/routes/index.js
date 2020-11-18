import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import Profiles from '../pages/Profiles';
import SplashScreen from '../pages/SplashScreen';

function Routes() {

    const { Navigator, Screen } = createStackNavigator()

    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#333' } }}>
                <Screen name="SplashScreen" component={SplashScreen} />
                <Screen name="Profiles" component={Profiles} options={TransitionPresets.SlideFromRightIOS} />
            </Navigator>
        </NavigationContainer>
    );
}

export default Routes;