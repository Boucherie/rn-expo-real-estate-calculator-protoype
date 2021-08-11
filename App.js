import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput } from 'react-native';
import {AntDesign, Entypo, Ionicons, FontAwesome, Octicons } from '@expo/vector-icons';
import CalcSelector from './components/CalcSelector';
import AddressForm from './components/AddressForm';
import CashFlowTable from './components/CashFlowTable';

const gray = '#555'
const black = '#112211'

const Neumorph = ({ children, size, style }) => {
  return (
    <View style={styles.topShadow}>
      <View style={styles.bottomShadow}>
        <View style={[
          styles.inner, 
          { width: size || 50, height: size || 50, borderRadius: size / 2 || 50 / 2},
          style
         ]}>
           {children}
        </View>
      </View>
    </View>
  )
}

function BrandGuide({navigation}) {
  return (    
      <View style={styles.container}>
        <SafeAreaView style={{alignSelf:'stretch'}}>
          <View style={{marginHorizontal: 32, marginTop: 32}}>
            <View style={styles.topContainer}>
              <Neumorph size={48}>
                <AntDesign name="arrowleft" size={32} color={gray}/>
              </Neumorph>
              <Neumorph size={48}>
                <FontAwesome name="plus" size={40} color={gray} />
              </Neumorph>
              <Neumorph size={48}>
                <Entypo name='menu' size={32} color={gray} />
              </Neumorph>
            </View>

          <View style={styles.addressFormContainer}>
            <AddressForm />
          </View>

          <View style={styles.topContainer}>
                <Neumorph size={120} style={{marginVertical:20}}>
                <Image source={require('./assets/stock-property-image.jpeg')} style={styles.propertyIcon}></Image>
              </Neumorph>
                  <Text style={{width: '40%'}}>Commercial Property, ID #123456</Text>
            </View>
          
          <StatusBar style="auto" />
            <CalcSelector enabled={false}/>
          </View>
        </SafeAreaView>
      </View>
  );
}

function AddressFormScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>CFE Inputs</Text>
      <View style={styles.addressFormContainer}>
        <AddressForm />
      </View>    </View>
  );
}

function SelectCalculatorScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CalcSelector enabled={false} />
    </View>
  );
}

function CashFlowInputsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>CFE Inputs</Text>
      <Neumorph size={48}>
        <FontAwesome name="plus" size={40} color={gray} />
      </Neumorph>
      <View style={styles.addressFormContainer}>

        <CashFlowTable />
      </View>
    </View>
  );
}

function CashFlowPropertyStatsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About the property</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {

 

  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="Brand Guide" component={BrandGuide} />
        <Stack.Screen name="AddressFormScreen" component={AddressFormScreen} />
        <Stack.Screen name="SelectCalculatorScreen" component={SelectCalculatorScreen} />
        <Stack.Screen name="CashFlowInputsScreen" component={CashFlowInputsScreen} />
        <Stack.Screen name="CashFlowPropertyStatsScreen" component={CashFlowPropertyStatsScreen} />
      </Stack.Navigator>

     
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE9FD',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }, 
  playing: {
    color: gray,
    fontWeight: '800'
  },
  propertyIconContainer: {
    marginVertical: 32, 
    alignItems: 'center',
  },
  propertyIcon: {
    width: 120,
    height: 120,
    borderRadius: 150,
    borderColor: '#D7E1F3',
    borderWidth: 5,
    
  },
  addressFormContainer: {
    marginVertical: 20
  },

      // neumorph styling

  topShadow: {
    shadowOffset: {
      width: -6,
      height: -6
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#FBFFFF'
  },
  bottomShadow: {
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#B7C4DD'
  },
  inner: {
    backgroundColor: '#A5C9FD',
    alignItems: 'center',
    color: black,
    overflow: 'hidden',
    elevation: 1,
    justifyContent: 'center',
    borderColor: '#B7D4FD', 
    borderWidth: 3,
  },

});
