import * as React from 'react';
import MapView, { Marker } from "react-native-maps";
import { Text, View, StyleSheet, Alert,Dimensions } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      longitude: '',
      latitude: '',
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      },
      () => {
        Alert.alert('dont know');
      }
    );
  }
  render() {

    return (
      
      <View>
        {this.state.longitude && this.state.latitude ? (
          
          <View style={styles.container}>
            <Text>{this.state.longitude +" "+this.state.latitude}</Text>
            <MapView style={styles.mapStyle} initialRegion={{latitude:this.state.latitude,longitude:this.state.longitude,latitudeDelta:0.01,longitudeDelta:0.01}}>
              <Marker coordinate={{latitude:this.state.latitude,longitude:this.state.longitude}} />
            </MapView>
          </View>
        ) : (
          Alert.alert('dont know')
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});