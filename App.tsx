import React, { useState } from 'react';
import { View, StyleSheet, Text, AppRegistry } from 'react-native';
import Button from './src/components/atoms/Button';
import CheckBox from './src/components/atoms/CheckBox';


const App = () => {
  const [isChecked, setIsChecked] = useState(false); 
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to Your React Native App!</Text>
      <Button title='Im a Button' onPress={() => alert("Hi")}></Button>
      <CheckBox checked={isChecked} setChecked={setIsChecked} style={styles.checkbox}></CheckBox>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  checkbox: {
    marginBottom: 10,
    marginTop: 20,
  },
});

export default App;
