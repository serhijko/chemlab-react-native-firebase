import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Firebase, { FirebaseContext } from './Firebase';
import { Button } from 'react-native';

import LandingScreen from './screens/Landing';
import SignInScreen from './screens/SignIn';
import SignUpScreen from './screens/SignUp';
import PasswordForgetScreen from './screens/PasswordForget';
import HomeScreen from './screens/Home';

const RootStack = createStackNavigator();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleSignIn = () => {
    // TODO implement real sign in mechanism

    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    // TODO implement real sign out mechanism

    setIsAuthenticated(false);
  }

  const handleSignUp = () => {
    // TODO implement real sign up mechanism

    setIsAuthenticated(true);
  };

  return (
    // <FirebaseContext.Provider value={new Firebase()}>
      <NavigationContainer>
        <RootStack.Navigator>
          {isAuthenticated ? (
            <RootStack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerRight: () => (
                  <Button onPress={handleSignOut} title="Sign Out" />
                ),
              }}
            />
          ) : (
            <>
              <RootStack.Screen
                name="Landing"
                component={LandingScreen}
                options={{
                  animationTypeForReplace: 'pop',
                }}
              />
              <RootStack.Screen name="Sign In">
                {(props) => (
                  <SignInScreen {...props} onSignIn={handleSignIn} />
                )}
              </RootStack.Screen>
              <RootStack.Screen name="Sign Up">
                {(props) => (
                  <SignUpScreen {...props} onSignUp={handleSignUp} />
                )}
              </RootStack.Screen>
              <RootStack.Screen
                name="Password Forget"
                component={PasswordForgetScreen}
              />
            </>
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    // </FirebaseContext.Provider>
  );
};

export default App;
