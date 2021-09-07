import React, { useState } from 'react'
import { View, StyleSheet, Text } from "react-native"
import {Picker} from '@react-native-picker/picker';

const CalcSelector = () => {
    const [selectedCalc, setSelectedCalc] = useState(false);

    return (
    //   dropdown goes here, first screen
    <View>
        <Text style={{textAlign:'center', margin: 10, fontSize: 20}}>Select a calculator:</Text>
        <Picker
        selectedValue={selectedCalc}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) =>
            setSelectedCalc(itemValue)
        }>
        <Picker.Item label="Cash Flow Evaluator" value="cfe" style={{fontWeight: 800}} />
        <Picker.Item label="Property Notes" value="other" />
        <Picker.Item label="Speedy Price Finder" value="other" />
        <Picker.Item label="Asking Price Finder" value="other" />
        <Picker.Item label="Net Operationg Income" value="other" />
        <Picker.Item label="Flip Analysis" value="other" />
        <Picker.Item label="Rehab Analysis" value="other" />
        <Picker.Item label="Down Payment Assistance" value="other" />
        <Picker.Item label="Mortgage Calculator" value="other" />
        <Picker.Item label="Proforma" value="other" />
        <Picker.Item label="Value-Add Oportunities" value="other" />
        <Picker.Item label="Updates" value="other" />

        </Picker>

    </View>

    )
  }

  const styles = StyleSheet.create({
      picker: {
        margin: 5,
        padding: -5,
        width: 275,
        borderWidth: 10,
        borderColor: '#B7D4FD', 
        borderRadius: 25,
        shadowOffset: {
            width: -6,
            height: -6
          },
          shadowOpacity: 1,
          shadowRadius: 6,
          shadowColor: '#FBFFFF'

      }
  })


export default CalcSelector