import { StyleSheet, Text, View,ActivityIndicator  } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';
import Header from '../../components/Header';
import { Colors } from '../../assests/style';

const HotelBooking = () => {
  return (
    <View style={styles.container}>
      <Header title={'Hotel Booking'} tintColor={Colors.white}/>
    <WebView
        source={{ uri: 'https://www.patialamart.com/hotel-booking' }}
        style={styles.webview}
        javaScriptEnabled={true} 
        domStorageEnabled={true} 
        scalesPageToFit={true} 
        startInLoadingState={true}
        renderLoading={() => <ActivityIndicator size="large" color="orange" />}
      />
  </View>
  )
}

export default HotelBooking

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff"
  },
  webview: {
    flex: 1,
    width:"100%",
      backgroundColor:"#fff"
  },
})