

import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, ScrollView } from "react-native"
import UnitTypePicker from './UnitTypePicker';
import { Provider, Modal, Portal, Button } from 'react-native-paper';


const ResidentialInputs = () => {
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20 };
    return (
 
   
      
     <Provider>
     <Portal style={{height: 400}}>

        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
         <ScrollView  >
        <Text style={{textAlign:'center', margin: 10, fontSize: 20}}>Add unit type to calculation:</Text>
        <UnitTypePicker/>
        <Text>
          #Units/Pad
        </Text>
        <TextInput 
          style={styles.field}
          label="Units/Pad"
          placeholder="Units/Pad" />  
         <Text>Monthly Rent Per Unit/Pad
        </Text>
        <TextInput 
          style={styles.field}
          label="Rent/Unit/Pad"
          placeholder="Rent/Unit/Pads" />   
          </ScrollView>       
          </Modal>
      </Portal>
      <Button style={{marginTop: 30}} onPress={showModal}>
        Add Row
      </Button>
      </Provider>
 

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
    },
    
    
  })

export default ResidentialInputs




