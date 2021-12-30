import { StyleSheet, View, Text, Button, Picker, TextInput  } from 'react-native';
import {  useState } from 'react';

import CalendarPicker from 'react-native-calendar-picker';


export default function BookingDetails({navigation, route}) {
  const { movie } = route.params;

  const [bookingDate,setBookingDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(movie.available_times[0]);
  const [noOfTickets, setNoOfTickets] = useState(0);

  const onChangeBookingDate = date => {
    setBookingDate(date)
  }


  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>{movie.title}</Text>   
      <CalendarPicker
          onDateChange={onChangeBookingDate}          
        />   
      <Picker
        selectedValue={selectedTime}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedTime(itemValue)}
      >
        {movie.available_times.map(time => {
            return(
              <Picker.Item label={time} value={time} key={time} />
            )
        })
      }        
      </Picker>
      <TextInput 
        style={styles.input}       
        onChangeText={setNoOfTickets}
        value={noOfTickets}
      />
      <Button
        title="Book Now"
        onPress={() => navigation.navigate('SuccessPage',{movieBookingDetails : {
          movieName : movie.title,
          bookingDate : bookingDate?.toString().slice(0,15),
          bookingTime : selectedTime,
          noOfTickets
        }})}
      />      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});