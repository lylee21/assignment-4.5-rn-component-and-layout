import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

const App = () => {

  const radioButtonsData = [{
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Yes',
    value: 'like'
  }, {
    id: '2',
    label: 'No',
    value: 'dislike'
  }]
 
  const [name, setName] = useState(null)
  const [age, setAge] = useState(null)

  const [radioButtons, setRadioButtons] = useState(radioButtonsData)

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }

  const submitButton = () =>
    Alert.alert(
      "Summary",
      `My name is ${name} and I am ${age}. I ${radioButtonsData.value} coffee.`,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed")}
      ]
    );

  return (
    <View style={styles.main}>
      <View style={[ styles.container, { flexDirection: "row" } ]}>
        <Text>Your Name: </Text>
        <TextInput style= {styles.input} value = {name} onChangeText = {setName} ></TextInput>
        {/* <Text>My name is {name}</Text> */}
      </View>
      <View style={[ styles.container, { flexDirection: "row" } ]}>
        <Text>Your Age: </Text>
        <TextInput style= {styles.input} value = {age} onChangeText = {setAge} ></TextInput>
      </View>
      <View style={[ styles.container, { flexDirection: "row" } ]}>
        <Text>Like Coffee? </Text>
        <RadioGroup
              radioButtons={radioButtons} 
              onPress={onPressRadioButton}
              layout = 'row'
        />
      </View>
      <View style={styles.container}>
        <Button title={"submit button"} onPress={submitButton} />
        <StatusBar style="auto" />
      </View> 
      
    </View>
  );
}

const styles = StyleSheet.create({
  main:  {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "column",
    padding: 50,
    backgroundColor: '#fff',
  },

  container: {
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1
  },

  input: {
    height: 25,
    width: 100,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
  
  button: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  }
});

export default App;