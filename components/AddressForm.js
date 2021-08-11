import React from 'react'
import { View, StyleSheet, Text, TextInput } from "react-native"

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
          secureTextEntry={true}
          style={styles.field}

          placeholder="Password"
        />
               <Text>
          Title
        </Text>
        <TextInput 
          style={styles.field}
          label="Email"
          placeholder="Email" />
          
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