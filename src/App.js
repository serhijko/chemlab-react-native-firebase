import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './screens/Landing';
import SignInScreen from './screens/SignIn';
import HomeScreen from './screens/Home';
import Firebase, { FirebaseContext } from './Firebase';

const RootStack = createStackNavigator();

const App = () => {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="Landing" component={LandingScreen} />
          <RootStack.Screen name="Sign In" component={SignInScreen} />
          <RootStack.Screen name="Home" component={HomeScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </FirebaseContext.Provider>
  );
};

export default App;
