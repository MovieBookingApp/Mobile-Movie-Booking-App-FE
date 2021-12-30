import { StyleSheet, View, Button , Text} from 'react-native';

import QRCode from 'react-native-qrcode-svg';
import {Row, Col} from 'react-bootstrap'


export default function SuccessPage({navigation, route}) {

  const { movieBookingDetails } = route.params;
 
  
  return (
    <View style={styles.container}>    
    <QRCode
     value="http://awesome.link.qr"
    style={styles.qrCode}
    />
<Row>
      <Col> <Text style={styles.baseText}>Name: </Text>  {movieBookingDetails.movieName}</Col>    
      <Col> <Text style={styles.baseText}>Booking Date: </Text>  {movieBookingDetails.bookingDate}</Col>
      <Col> <Text style={styles.baseText}>Booking Time: </Text>  {movieBookingDetails.bookingTime}</Col>
      <Col> <Text style={styles.baseText}>Number of Seats: </Text>   {movieBookingDetails.noOfTickets}</Col>
      </Row>
      <Button
        title="Movies"
        onPress={() => navigation.navigate('LatestMovies')}
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
  qrCode:{
    margin: 10
  }
  
});