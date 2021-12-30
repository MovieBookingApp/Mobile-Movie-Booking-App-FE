import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LatestMovies from './src/latestMovies/LatestMovies';
import MovieDetails from './src/latestMovies/movieDetails';
import BookingDetails from './src/bookingDetails/BookingDetails';
import SuccessPage from './src/bookingDetails/SuccessPage';


const Stack = createNativeStackNavigator();

function App() {
  return (    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LatestMovies">
        <Stack.Screen name="LatestMovies" component={LatestMovies} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
        <Stack.Screen name="BookingDetails" component={BookingDetails} />
        <Stack.Screen name="SuccessPage" component={SuccessPage} />
      </Stack.Navigator>
    </NavigationContainer>    
  );
}

export default App;