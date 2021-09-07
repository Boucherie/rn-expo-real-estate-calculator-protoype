import React, { useState } from 'react'
import { View, StyleSheet, Text } from "react-native"
import {Picker} from '@react-native-picker/picker';

const UnitTypePicker = () => {
    const [selectedUnit, setSelectedUnit] = useState(false);

    return (
    //   dropdown goes here, first screen
    <View>
        <Text style={{textAlign:'center', margin: 10, fontSize: 20}}>Select a calculator:</Text>
        <Picker
        selectedValue={selectedUnit}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) =>
            setSelectedUnit(itemValue)
        }>
        <Picker.Item label="Apts: Studios" value="cfe" style={{fontWeight: 800}} />
        <Picker.Item label="Apts: 1/1" value="other" />
        <Picker.Item label="Apts: 2/1" value="other" />
        <Picker.Item label="Apts: 2/2" value="other" />
        <Picker.Item label="Apts: 3/1" value="other" />
        <Picker.Item label="Other" value="other" />
       
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


export default UnitTypePicker