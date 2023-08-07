import React, {useState} from 'react';

import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

import Modal from 'react-native-modal';

const carsData = [
  {
    id: '1',
    title: 'Bugatti',
    model: 'Chiron Sport',
    year: '2019',
    make: 'Bugatti',
    color: 'Black',
    price: 'On Request',
  },
  {
    id: '2',
    title: 'Pagani',
    model: 'Huayra Roadster',
    year: '2023',
    make: 'Pagani',
    color: 'Silver',
    price: '£1,476,984',
  },
  {
    id: '3',
    title: 'Ferrai',
    model: '812 Competizione rwd',
    year: '2023',
    make: 'Ferrai',
    color: 'Black',
    price: '£1,429,343',
  },
  {
    id: '4',
    title: 'Koenigsegg',
    model: 'Koenigsegg Regera',
    year: '2021',
    make: 'Koenigsegg',
    color: 'White',
    price: '£3,201,736',
  },
  {
    id: '5',
    title: 'Lamborghini',
    model: 'Lamborghini Sian',
    year: '2023',
    make: 'Lamborghini',
    color: 'Green',
    price: 'On Request',
  },
  {
    id: '6',
    title: 'Rolls Royce',
    model: 'WRAITH',
    year: '2023',
    make: 'ROLLS-ROYCE',
    color: 'Black',
    price: '£734,204',
  },
  {
    id: '7',
    title: 'Mc Laren',
    model: 'ELVA',
    year: '2023',
    make: 'Mc Laren',
    color: 'Black',
    price: '£1,597,708',
  },
  {
    id: '8',
    title: 'Brabus',
    model: 'BRABUS INVICTO',
    year: '2019',
    make: 'Mercedes-Benz',
    color: 'Black',
    price: '£547,537',
  },
  {
    id: '9',
    title: 'Aston Martin',
    model: 'V12 Vantage',
    year: '2023',
    make: 'Aston Martin',
    color: 'Green',
    price: '£371,913',
  },
  {
    id: '10',
    title: 'Porsche',
    model: '911 TURBO S',
    year: '2023',
    make: 'Porsche',
    color: 'Black',
    price: '£205,404',
  },
  {
    id: '11',
    title: 'Bentley',
    model: 'CONTINENTAL GTC',
    year: '2023',
    make: 'Bentley',
    color: 'Custom',
    price: '£289,362',
  },
  {
    id: '12',
    title: 'Maybach',
    model: 'S 680 4M',
    year: '2023',
    make: 'Maybach',
    color: 'Gold',
    price: '£474,993',
  },
  {
    id: '13',
    title: 'Mercedes Benzn',
    model: 'G 63 AMG',
    year: '2023',
    make: 'Mercedes',
    color: 'Beige',
    price: '£994,651',
  },
  {
    id: '14',
    title: 'Bmw',
    model: 'X5 XDRIVE 30D',
    year: '2023',
    make: 'Bmw',
    color: 'Black',
    price: '£93,114',
  },
  {
    id: '15',
    title: '1968 Ford',
    model: 'Mustang Shelby',
    year: '1968',
    make: 'Ford',
    color: 'Blue',
    price: '£81,189',
  },
];

const CarsListComponent = ({navigation}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('CarDetail', {item})}
      style={{padding: 15, borderBottomWidth: 1, borderColor: '#ccc'}}>
      <Text style={{fontFamily:'lucida grande', fontSize: 24}}>{item.title}</Text>
      <Text style={{fontFamily:'lucida grande', fontSize: 15}}>{item.year}</Text>
    </TouchableOpacity>
  );

  const [cars, setCars] = useState(carsData);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [modalTitleValue, setModalTitleValue] = useState('');
  const [modalModelValue, setModalModelValue] = useState('');
  const [modalYearValue, setModalYearValue] = useState('');
  const [modalMakeValue, setModalMakeValue] = useState('');
  const [modalColorValue, setModalColorValue] = useState('');
  const [modalPriceValue, setModalPriceValue] = useState('');

  return (
    <View>
      <FlatList
        style={{marginHorizontal: 12, height: 760}}
        data={cars}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />

      {/* <FlatList
        style={{marginHorizontal: 15}}
        data={cars}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                backgroundColor: 'white',
                height: 45,
                borderBottomColor: 'black',
                borderBottomWidth: 0.6,
                justifyContent: 'center',
              }}>
              <Text>{item.title}</Text>
              <Text>Vehicle Modal</Text>
            </View>
          );
        }}
      /> */}

      <TouchableOpacity
        style={{
          height: 45,
          backgroundColor: 'dodgerblue',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          setIsModalVisible(true);
        }}>
        <Text>Add Item</Text>
      </TouchableOpacity>

      <Modal isVisible={isModalVisible}>
        <View style={{flex: 1, marginVertical: 45}}>
          <Text
            style={{
              alignSelf: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: 30,
            }}>
            {' '}
            Add a Vehicle
          </Text>
          <TextInput
            placeholder="Title"
            value={modalTitleValue}
            onChangeText={changedText => {
              setModalTitleValue(changedText);
            }}
            style={{backgroundColor: 'white', height: 44, margin: 6}}
          />

          <TextInput
            placeholder="Model"
            value={modalModelValue}
            onChangeText={changedText => {
              setModalModelValue(changedText);
            }}
            style={{backgroundColor: 'white', height: 44, margin: 6}}
          />

          <TextInput
            placeholder="Year"
            value={modalYearValue}
            onChangeText={changedText => {
              setModalYearValue(changedText);
            }}
            style={{backgroundColor: 'white', height: 44, margin: 6}}
          />

          <TextInput
            placeholder="Make"
            value={modalMakeValue}
            onChangeText={changedText => {
              setModalMakeValue(changedText);
            }}
            style={{backgroundColor: 'white', height: 44, margin: 6}}
          />

          <TextInput
            placeholder="Color"
            value={modalColorValue}
            onChangeText={changedText => {
              setModalColorValue(changedText);
            }}
            style={{backgroundColor: 'white', height: 44, margin: 6}}
          />

          <TextInput
            placeholder="Price"
            value={modalPriceValue}
            onChangeText={changedText => {
              setModalPriceValue(changedText);
            }}
            style={{backgroundColor: 'white', height: 44, margin: 6}}
          />

          <TouchableOpacity
            style={{
              height: 44,
              width: 60,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}
            onPressIn={() => {
              setCars([
                ...carsData,
                {
                  id: '',
                  title: modalTitleValue,
                  model: modalModelValue,
                  year: modalYearValue,
                  make: modalMakeValue,
                  color: modalColorValue,
                  price: modalPriceValue,
                },
              ]);
              setIsModalVisible(false);
            }}>
            <Text style={{fontSize: 15}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CarsListComponent;
