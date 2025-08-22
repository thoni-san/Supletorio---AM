import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}

export const InputNumeros = ({ value, onChangeText, placeholder }: Props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#a0a0a0"
      keyboardType="numeric"
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#e9ecef',
    padding: 18,
    borderRadius: 12,
    width: '95%',
    marginVertical: 10,
    fontSize: 16,
    color: '#343a40',
  },
});