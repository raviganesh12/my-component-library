import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface InputProps {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const Input: React.FC<InputProps> = ({ value, placeholder, onChangeText, secureTextEntry = false }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default Input;