

import React, { useState } from 'react'
import { View, StyleSheet, Text } from "react-native"
import {Picker} from '@react-native-picker/picker';



const ExpenseForm = () => {
    const [selectedExpense, setSelectedExpense] = useState(false);

    return (
    //   dropdown goes here, first screen
    <View>
        <Text style={{textAlign:'center', margin: 10, fontSize: 20}}>To add expenses, select from the menu and input the value:</Text>
        <Picker
        selectedValue={selectedExpense}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) =>
            setSelectedExpense(itemValue)
        }>
        <Picker.Item label='Real Estate Property Taxes' value="other" />
<Picker.Item label='Supplemental Property Taxes (if any)' value="other" />
<Picker.Item label='Property Insurance' value="other" />
<Picker.Item label='Management' value="other" />
<Picker.Item label='Payroll: Expenses / Benefits' value="other" />

<Picker.Item label='Payroll:Taxes / Workers\ Comp' value="other" />
<Picker.Item label='Repairs and Maintenance: Materials' value="other" />
<Picker.Item label='Repairs and Maintenance: Labor' value="other" />    
<Picker.Item label='Utilities: Phone' value="other" />
<Picker.Item label='Utilities: Gas' value="other" />
<Picker.Item label='Utilities: Sewer' value="other" />
<Picker.Item label='Utilities: Electric' value="other" />
<Picker.Item label='Utilities: Water' value="other" />

<Picker.Item label='Accounting and Legal' value="other" />
<Picker.Item label='Licenses and Permits' value="other" />
<Picker.Item label='Advertising' value="other" />
<Picker.Item label='Supplies' value="other" />
<Picker.Item label='Contract Services: Trash' value="other" />
<Picker.Item label='Contract Services: Lawn Care' value="other" />
<Picker.Item label='Contract Services: Snow Removal' value="other" />
<Picker.Item label='Misc: Other (or "Lump Sum")' value="other" />
<Picker.Item label='Misc: Replacement Reserves' value="other" />

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


export default ExpenseForm




