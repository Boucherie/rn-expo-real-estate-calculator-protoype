import * as React from 'react';
import { View, StyleSheet, Text } from "react-native"
import { DataTable } from 'react-native-paper';


const SummaryTable = () => {


  return (
    <DataTable style={{marginVertical: 10}}>
      <DataTable.Header>
      
        <DataTable.Title numeric>Financial Indicator</DataTable.Title>
        <DataTable.Title numeric>Values</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>Net Income</DataTable.Cell>
        <DataTable.Cell>$</DataTable.Cell>

      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>DCR</DataTable.Cell>
        <DataTable.Cell>$</DataTable.Cell>

      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>CAP Rate</DataTable.Cell>
        <DataTable.Cell>$</DataTable.Cell>

      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Cash on Cash Return</DataTable.Cell>
        <DataTable.Cell>$</DataTable.Cell>

      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Gross Income</DataTable.Cell>
        <DataTable.Cell>$</DataTable.Cell>

      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Monthly Rent</DataTable.Cell>
        <DataTable.Cell>$</DataTable.Cell>

      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Gross Rent</DataTable.Cell>
        <DataTable.Cell>$</DataTable.Cell>

      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Gross</DataTable.Cell>
        <DataTable.Cell>$</DataTable.Cell>

      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Operating Expense</DataTable.Cell>
        <DataTable.Cell>$</DataTable.Cell>

      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Annual Rent</DataTable.Cell>
        <DataTable.Cell>$</DataTable.Cell>

      </DataTable.Row>
    </DataTable>


    
  );
}

export default SummaryTable;