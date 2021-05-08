import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      longitude: '',
      latitude: '',
      weather:'',
      url:""
    };
  }
  componentDidMount=async()=> {
    await navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          longitude: position.coords.longitude.toFixed(2),
          latitude: position.coords.latitude.toFixed(2),
        });
      })
        
  }
  render() {
    console.log(this.state.longitude)
    return (
      
      <View style={styles.container}>
        {this.state.longitude && this.state.latitude ? (
          
          <View style={styles.container}>
            {
              this.state.url?(
                <Text>hi</Text>
              ):( 
                this.setState({
                    url:"https://fcc-weather-api.glitch.me/api/current?lat="+this.state.longitude+"&lon="+this.state.latitude
                })
              
              )
           
          }
            <Text>{this.state.url}</Text>
          </View>
        ) : (
          <Text>wait</Text>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});