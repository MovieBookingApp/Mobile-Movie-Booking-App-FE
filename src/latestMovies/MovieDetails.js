import { StyleSheet, View, Button, Image, Text } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';

import {Row, Col, Container} from 'react-bootstrap'


export default function MovieDetails({navigation, route}) {

  const { id } = route.params;
  const [movieDetails, setMovieDetails] = useState([]);
  

  useEffect(async()=>{
    const result = await axios.get(`http://127.0.0.1:4000/latestMovies/${id}`);
    setMovieDetails(result.data);
  },[])
  
  return (
    <View style={styles.container}>    
    {movieDetails.map(movie => {
        return(          
          <Container key={movie.id}>
  <Row>
    <Col > <Image
        style={styles.tinyLogo}
        source={require(`../../assets/img/bg/${movie.image}`)}
        /></Col>
      <Col> <Text style={styles.baseText}>Name: </Text> {movie.title}</Col>    
      <Col> <Text style={styles.baseText}>Release Date: </Text> {movie.release_date}</Col>
      <Col> <Text style={styles.baseText}>Duration: </Text> {movie.duration}</Col>
      <Col> <Text style={styles.baseText}>Rating: </Text> {movie.rating}/10</Col>
  </Row> 
</Container>
        )
    })}  
      <Button
        style={styles.button}
        title="Book Now"
        onPress={() => navigation.navigate('BookingDetails',{movie:movieDetails[0]})}
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
  tinyLogo: {
    width: 100,
    height: 100,
    margin: 10
  }, 
});