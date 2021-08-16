import React from 'react';
import { View, StyleSheet, Text, TextInput } from "react-native";
import {Picker} from '@react-native-picker/picker';
import {AntDesign } from '@expo/vector-icons';


const AddressForm = () => {
    return (
      <View>
        <Text>
          Title
        </Text>
        <TextInput 
          style={styles.field}
          label="Email"
          placeholder="Email" />
        <Text>
          Property ID
        </Text>
        <TextInput
          // secureTextEntry={true}
          style={styles.field}
          label="Property ID"
          placeholder="Property ID"
        />
               <Text>
          Address
        </Text>
        <TextInput 
          style={styles.field}
          label="Address"
          placeholder="Address" />  
       
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


  export default AddressForm