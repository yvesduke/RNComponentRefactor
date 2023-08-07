import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CarDetailComponent = ({route}) => {
  const {item} = route.params;

  return (
    <View style={{padding: 15}}>
      <Text
        style={{
          color: 'lightslategrey',
          fontWeight: 'bold',
          alignSelf: 'center',
          fontSize: 16,
          marginVertical: 45,
        }}>
        Exotic Cars Detail
      </Text>
      <View style={{alignSelf: 'center'}}>
        <Text style={{fontSize: 27, fontWeight: 'bold', margin: 6}}>{item.title}</Text>
        <Text style={{fontSize:18 }}>{'Year : ' + item.year}</Text>
        <Text style={{fontSize:18 }}>{'Color : ' + item.color}</Text>
        <Text style={{fontSize:18 }}>{'Model : ' + item.model}</Text>
        <Text style={{fontSize:18 }}>{'Price : ' + item.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CarDetailComponent;
