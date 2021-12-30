import { StyleSheet, View , Image, Button} from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';




export default function LatestMovies({navigation}) {

  const [latestMovies, setLatestMovies] = useState([]);
  

  useEffect(async()=>{   
    const result = await axios.get('http://127.0.0.1:4000/latestMovies');
    setLatestMovies(result.data);
  },[])

  
  return (    
    <View style={styles.container}>        
    {latestMovies.map(movie => {
      return(
        <div key={movie.id}>
        <Image
      style={styles.tinyLogo}
      source={require(`../../assets/img/bg/${movie.image}`)}
    />        
       <Button
      title="Details"
      onPress={() => navigation.navigate('MovieDetails',{id:movie.id})}
    />
   </div> )
    })}               
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
  tinyLogo: {
    width: 100,
    height: 100,
    margin: 10
}
});