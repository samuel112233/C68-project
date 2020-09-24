
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class Instagram extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
            <AppHeader/>
        <Text>Instagram</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
