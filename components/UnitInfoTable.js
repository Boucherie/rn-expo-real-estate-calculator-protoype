import * as React from 'react';
import { View, StyleSheet, Text } from "react-native"
import { DataTable } from 'react-native-paper';


const UnitInfoTable = () => {


  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Multi-Apartments</DataTable.Title>
        <DataTable.Title numeric>#Units/Pad</DataTable.Title>
        <DataTable.Title numeric>Monthly Rent</DataTable.Title>
        <DataTable.Title numeric>Annual Rent</DataTable.Title>

      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>1/1</DataTable.Cell>
        <DataTable.Cell numeric>15</DataTable.Cell>
        <DataTable.Cell numeric>$300</DataTable.Cell>
        <DataTable.Cell numeric>$54,000</DataTable.Cell>

      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>2/1</DataTable.Cell>
        <DataTable.Cell numeric>100</DataTable.Cell>
        <DataTable.Cell numeric>$400</DataTable.Cell>
        <DataTable.Cell numeric>$480,000.</DataTable.Cell>

      </DataTable.Row>

    
    </DataTable>
  );
}

export default UnitInfoTable;