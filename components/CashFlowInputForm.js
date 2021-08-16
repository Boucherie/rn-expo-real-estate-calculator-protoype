import React from 'react';
import { View, StyleSheet, Text, TextInput } from "react-native";
import {Picker} from '@react-native-picker/picker';
import {AntDesign } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';


const CashFlowInputForm = () => {
    return (
      <View>
        <Text>
          Asking Price
        </Text>
        <TextInput 
          style={styles.field}
          label="Asking Price"
          placeholder="Asking Price" />
        <Text>
          Offer Price
        </Text>
        <TextInput
          style={styles.field}
          label="Offer Price"
          placeholder="Offer Price"
        />

<Text>
          Initial Loan
        </Text>
        <TextInput 
          style={styles.field}
          label="Initial Loan"
          placeholder="Initial Loan" />  
         <Text style={{marginTop: 10}}>
          {/* {this.state.value && +this.state.value.toFixed(3)} */}
          Down Payment
        </Text>     
          <Slider
            style={{width: 275, height: 40}}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
          <Text style={{ fontSize: 14, textAlign: 'center', fontWeight: '500',  margin: 10}}>
          {/* {this.state.value && +this.state.value.toFixed(3)} */}
          20% 
        </Text>

        <Text style={{marginTop: 10}}>
          {/* {this.state.value && +this.state.value.toFixed(3)} */}
          Loan Points
        </Text>     
          <Slider
            style={{width: 275, height: 40}}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
          <Text style={{ fontSize: 14, textAlign: 'center', fontWeight: '500',  margin: 10}}>
          {/* {this.state.value && +this.state.value.toFixed(3)} */}
          1%
        </Text>



        <Text style={{marginTop: 10}}>
          {/* {this.state.value && +this.state.value.toFixed(3)} */}
          Closing Costs
        </Text>     
          <Slider
            style={{width: 275, height: 40}}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
          <Text style={{ fontSize: 14, textAlign: 'center', fontWeight: '500',  margin: 10}}>
          {/* {this.state.value && +this.state.value.toFixed(3)} */}
          5%
        </Text>

        <Text style={{marginTop: 10, padding: 10, borderRadius: 75, borderColor: 5, borderColor: '#aaa'}}>
          {/* {this.state.value && +this.state.value.toFixed(3)} */}
          Value Calculations Section: Down Payment; Loan Points; Closing Costs; Initial Investment; Final Investment
        </Text>  
       
      </View>
    )
  }

  const styles = StyleSheet.create({
    field:  {
      color: "#eee",
      backgroundColor: "#444",
      margin: 2,
      padding: 4,
      fontSize: 24,
      lineHeight: 28,
      borderRadius: 10,
    }
  })


  export default CashFlowInputForm