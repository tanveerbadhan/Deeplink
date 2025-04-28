// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your screens
import Home from './screens/Home';
import Details from './screens/Details';
import Profile from './screens/Profile';

const Stack = createNativeStackNavigator();

function App() {

  const config = {
    screens: {
      Home: "home",
      Details: "details",
      Profile: "profile"
    }
  }

  return (
    <NavigationContainer
      linking={{
        prefixes: ["deeplink://app"],
        config
      }}
    >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;