import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, Sizes, getFontSize, Fonts, SCREEN_WIDTH } from '../assests/style'
import { Image } from 'react-native'
import { ScreenHeight, ScreenWidth } from 'react-native-elements/dist/helpers'
import { navigate } from '../navigations/NavigationServices'
import { showToastMessage } from '../utils/services'

const Homeyrt = ({ title, data }) => {
  const renderItem = ({ item }) => {

    return (
      <View style={{ alignItems: 'center', marginBottom: 10 }}>

        <TouchableOpacity style={{ backgroundColor:'#FFF6F1', borderRadius: 100, marginHorizontal: Sizes.fixHorizontalPadding, marginTop: Sizes.fixPadding * 0.7, overflow: 'hidden' ,paddingHorizontal:Sizes.fixPadding*0.6,paddingVertical:7}}
          onPress={() => {
            if ( item?.value === 'Bus') {
              showToastMessage({message:"Coming Soon"})
          } else{
             navigate(item.value)
          }
            }}
        >
    <Image source={item.icon} style={{height:SCREEN_WIDTH * 0.13,width:SCREEN_WIDTH * 0.14,resizeMode:'contain'}}/>
      
        </TouchableOpacity>
        <Text style={{ ...Fonts._12MontserratRegular, marginTop: Sizes.fixPadding * 0.4 }}>{item.name}</Text>

      </View>

    )
  }
  return (
    <View>
      <Text style={{ fontSize: getFontSize(20), color: Colors.black, fontFamily: 'Montserrat-Regular', marginTop: Sizes.fixPadding }}>{title}</Text>
      <FlatList data={data} renderItem={renderItem} numColumns={4} keyExtractor={(item) => item.id} />

    </View>
  )
}

export default Homeyrt

const styles = StyleSheet.create({})