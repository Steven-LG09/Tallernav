import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Checkbox } from 'react-native-paper';

const options = [
  { id: '1', label: 'Comer' },
  { id: '2', label: 'Dormir' },
  { id: '3', label: 'Bailar' },
  { id: '4', label: 'Cocinar' },
];
const seasons = [
  { id: '1', label: 'Verano' },
  { id: '2', label: 'Otoño' },
  { id: '3', label: 'Invierno' },
  { id: '4', label: 'Winter' },
];
const transporte = [
  { id: '1', label: 'Carro' },
  { id: '2', label: 'Moto' },
  { id: '3', label: 'A pie' },
  { id: '4', label: 'Bus' },
];

export default function QuizScreen () {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState([])
  const [selectedTransport, setSelectedTransport] = useState([])

  const handleCheckboxChange = (optionId) => {
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.includes(optionId)
        ? prevSelectedOptions.filter(id => id !== optionId)
        : [...prevSelectedOptions, optionId]
    );
  };
  const handleCheckboxChange2 = (optionId) => {
    setSelectedSeason((prevSelectedOptions) =>
      prevSelectedOptions.includes(optionId)
        ? prevSelectedOptions.filter(id => id !== optionId)
        : [...prevSelectedOptions, optionId]
    );
  };
  const handleCheckboxChange3 = (optionId) => {
    setSelectedTransport((prevSelectedOptions) =>
      prevSelectedOptions.includes(optionId)
        ? prevSelectedOptions.filter(id => id !== optionId)
        : [...prevSelectedOptions, optionId]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>1. ¿Que prefiere hacer?</Text>
      {options.map(option => (
        <View key={option.id} style={styles.optionContainer}>
          <Checkbox
            status={selectedOptions.includes(option.id) ? 'checked' : 'unchecked'}
            onPress={() => handleCheckboxChange(option.id)}
          />
          <Text style={styles.optionText}>{option.label}</Text>
        </View>
      ))}
      <Text style={styles.title}>2. ¿Estación Favorita?</Text>
      {seasons.map(season => (
        <View key={season.id} style={styles.optionContainer}>
          <Checkbox
            status={selectedSeason.includes(season.id) ? 'checked' : 'unchecked'}
            onPress={() => handleCheckboxChange2(season.id)}
          />
          <Text style={styles.optionText}>{season.label}</Text>
        </View>
      ))}
      <Text style={styles.title}>2. ¿Cual medio de transporte prefiere?</Text>
      {transporte.map(transport => (
        <View key={transport.id} style={styles.optionContainer}>
          <Checkbox
            status={selectedTransport.includes(transport.id) ? 'checked' : 'unchecked'}
            onPress={() => handleCheckboxChange3(transport.id)}
          />
          <Text style={styles.optionText}>{transport.label}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    color: 'red',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  optionText: {
    marginLeft: 8,
    fontSize: 16,
  },
});