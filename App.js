import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, ScrollView, Switch } from 'react-native';
import {AntDesign, Entypo, Ionicons, FontAwesome, FontAwesome5, Octicons } from '@expo/vector-icons';
import CalcSelector from './components/CalcSelector';
import AddressForm from './components/AddressForm';
import ExpenseForm from './components/ExpenseForm';
import CashFlowInputForm from './components/CashFlowInputForm';
import ResidentialInputs from './components/ResidentialInputs';
import UnitInfoTable from './components/UnitInfoTable';
import SummaryTable from './components/SummaryTable';

const gray = '#555'
const black = '#112211'
const white = '#e2e9f9'

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

const BrandGuide = ({navigation}) => {
  return (    
      <View style={styles.container}>
        <SafeAreaView style={{alignSelf:'stretch'}}>
          <View style={{marginHorizontal: 32, marginTop: 32}}>
            <View style={styles.topContainer}>
              <Neumorph size={48}>
                <AntDesign name="arrowleft" size={32} color={white}/>
              </Neumorph>
              <Neumorph size={48}>
                <FontAwesome name="plus" size={40} color={white} />
              </Neumorph>
              <Neumorph size={48}>
                <Entypo name='menu' size={32} color={white} />
              </Neumorph>
              <Neumorph size={48} >
                <AntDesign name='arrowright' size={32} color={white}
                onPress={() =>
                  navigation.navigate('Property Info')} />
              </Neumorph>
            </View>
          <View style={styles.addressFormContainer}>
            <AddressForm />
          </View>
          <View style={styles.topContainer}>
                <Neumorph size={120} style={{marginVertical:20}}>
                <FontAwesome5 name="warehouse" size={60} color="white" />
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

const AddressFormScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{alignSelf:'stretch'}}>

      <View style={{marginHorizontal: 32, marginTop: 32}}>
        <View style={styles.topContainer}>
          <Neumorph size={48}>
            <AntDesign name="arrowleft" size={32} color={white}
              onPress={() =>
                navigation.navigate('Brand Guide')} />
          </Neumorph>
          <Neumorph size={48} >
            <AntDesign name='arrowright' size={32} color={white}
            onPress={() =>
              navigation.navigate('Flow Selection')} />
          </Neumorph>
        </View>
      <View style={styles.addressFormContainer}>
        <AddressForm />    
      </View>    
      
      <View style={styles.topContainer}>
        <Text>Upload Image</Text>  
        <Octicons name="primitive-dot" size={24} color= {white}/>
        <Octicons name="primitive-dot" size={24} color= {white} />
        <Neumorph>
          <AntDesign name='upload' size={32} color={white}/>   
        </Neumorph>
      </View>
        <View style={styles.topContainer}>
          <Neumorph size={100} style={{marginVertical:20}}>
                <FontAwesome5 name="warehouse" size={50} color="white" />
          </Neumorph>
          <Text style={{width: '40%'}}>cp-id-123456.jpg</Text>
        </View>
        <View style={styles.topContainer}>
          <Neumorph size={60} >
            <AntDesign name='arrowright' size={60} color={white}
            onPress={() =>
              navigation.navigate('Property Details')} />
          </Neumorph>
        </View>
    </View>
    </SafeAreaView>
    </View>

  );
}

function SelectCalculatorScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
          <Neumorph size={48}>
            <AntDesign name="arrowleft" size={32} color={white}
              onPress={() =>
                navigation.navigate('Property Info')} />
          </Neumorph>
          <Neumorph size={48} >
            <AntDesign name='arrowright' size={32} color={white}
            onPress={() =>
              navigation.navigate('Headwaters')} />
          </Neumorph>
        </View>
        <View style={styles.topContainer}>

      <CalcSelector enabled={false} />
      </View>
      <Neumorph size={60} >
        <AntDesign name='arrowright' size={48} color={white}
        onPress={() =>
          navigation.navigate('Headwaters')} />
      </Neumorph>
    </View>
  );
}

function CashFlowInputsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>     

        <Neumorph size={48}>
          <AntDesign name="arrowleft" size={32} color={white}
            onPress={() =>
              navigation.navigate('Flow Selection')} />
        </Neumorph>
        <Neumorph size={48} >
          <AntDesign name='arrowright' size={32} color={white}
          onPress={() =>
            navigation.navigate('Property Details')} />
        </Neumorph>
        
      </View>
      <ScrollView>

      <View style={styles.addressFormContainer}>
        <Text style={{textAlign: 'center'}}>Calculate Gross operating incomes; .</Text>
        <CashFlowInputForm />
        
        {/* <View style={styles.topContainer}>
          <Neumorph size={120} style={{marginVertical:20}}>
            <Image source={require('./assets/stock-property-image.jpeg')} style={styles.propertyIcon}></Image>
          </Neumorph>
          <Text style={{width: '40%'}}>commercial-property-id-123456.jpg</Text>
        </View> */}
        <View style={styles.topContainer}>
          <Neumorph size={60}>
          <Ionicons name="md-calculator" size={50} color={white} />

          </Neumorph>
          <Text>Speedy Price Finder           Continue</Text>
          <Neumorph size={60} >
            <AntDesign name='arrowright' size={50} color={white}
            onPress={() =>
              navigation.navigate('Property Details')} />
          </Neumorph>
        </View>

      </View>
      </ScrollView>

    </View>
  );
}

function CashFlowPropertyStatsScreen({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <SafeAreaView style={{alignSelf:'stretch'}}>
     
      <View style={styles.topContainer}>
     
        <Neumorph size={48}>
          <AntDesign name="arrowleft" size={32} color={white}
            onPress={() =>
              navigation.navigate('Headwaters')} />
        </Neumorph>
        <Neumorph size={48} >
          <AntDesign name='arrowright' size={32} color={white}
          onPress={() =>
            navigation.navigate('Intake')} />
        </Neumorph>
      </View>
      <Text style={{textAlign: 'center', marginBottom: 5}}>Next, let's take a look at the dimensions and type of use.</Text>
            <Text>Gross Rent (if known)</Text>
            <TextInput></TextInput>
            {/* Square footage, Gross rent if available */}
      <View style={styles.topContainer}>

        <View style={{maxWidth:'30%'}}>     
        
      <Text>Commercial (Office/Retail)</Text>
      </View> 
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
      />
      <View style={{maxWidth:'30%'}}>
        <Text>Residential</Text>

      </View>
            {/* if value isEnabled ? <ResidentialInputs/> className visible : <CommercialInputs />  */}
        </View>
      <View style={{witdh: 200, height: 400, marginTop: 5, backgroundColor: 'white'}}>      
        <Text>Summary to that point; All Figures Annual (enter additional income, losses)</Text>
        <UnitInfoTable/>
        <ResidentialInputs/>
      </View>
      </SafeAreaView>
    </View>
  );
}

function CashFlowIncome({navigation}) {
  return (
    <View style={styles.container}>
            <View style={styles.topContainer}>
        <Neumorph size={48}>
          <AntDesign name="arrowleft" size={32} color={white}
            onPress={() =>
              navigation.navigate('Property Details')} />
        </Neumorph>
        <Neumorph size={48} >
          <AntDesign name='arrowright' size={32} color={white}
          onPress={() =>
            navigation.navigate('Outflow')} />
        </Neumorph>
      </View>

    </View>
  );
}

function CashFlowExpenses({navigation}) {
  return (
    <View style={styles.container}>
            <View style={styles.topContainer}>
        <Neumorph size={48}>
          <AntDesign name="arrowleft" size={32} color={white}
            onPress={() =>
              navigation.navigate('Intake')} />
        </Neumorph>
        <Neumorph size={48} >
          <AntDesign name='arrowright' size={32} color={white}
          onPress={() =>
            navigation.navigate('Summary')} />
        </Neumorph>
      </View>
      <Text>Property Expenses</Text>
      <View style={styles.topContainer}>
        <ExpenseForm/>
        <Neumorph size={48} >
        <FontAwesome name="plus" size={40} color={white} />
      </Neumorph>
      </View>
    </View>
  );
}

function CashFlowSummary({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Neumorph size={48}>
          <AntDesign name="arrowleft" size={32} color={gray}
            onPress={() =>
              navigation.navigate('Outflow')} />
        </Neumorph>
        <Neumorph size={48} >
          <AntDesign name='arrowright' size={32} color={white}
          // onPress={() =>
          //   navigation.navigate('Intake')} create PDF and share
            />
        </Neumorph>
      </View>
      <Text style={{marginTop: 5}}>Summary</Text>
      <View style={styles.topContainer}>
        <SummaryTable />
        
      </View>
      <View style={styles.topContainer}>

        <Neumorph>
        <AntDesign name="export" size={32} color={white} />
        </Neumorph>
        </View>
        <Text style={{marginTop: 5}}> Share to PDF</Text>

    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="Brand Guide" component={BrandGuide} />
        <Stack.Screen name="Property Info" component={AddressFormScreen} />
        <Stack.Screen name="Flow Selection" component={SelectCalculatorScreen} />
        <Stack.Screen name="Headwaters" component={CashFlowInputsScreen} />
        <Stack.Screen name="Property Details" component={CashFlowPropertyStatsScreen} />  
        <Stack.Screen name="Intake" component={CashFlowIncome} />
        <Stack.Screen name="Outflow" component={CashFlowExpenses} />
        <Stack.Screen name="Summary" component={CashFlowSummary} />
      </Stack.Navigator> 
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccdfff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,

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
    marginVertical: 20,
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
    backgroundColor: '#828489',
    alignItems: 'center',
    color: white,
    overflow: 'hidden',
    elevation: 1,
    justifyContent: 'center',
    borderColor: '#a1a3a7', 
    borderWidth: 1,
  },
});
