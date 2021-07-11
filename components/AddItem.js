import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const AddItem = ({ addItem }) => {
  //State for user input
  const [text, setText] = useState("");

  function onChange(text) {
    return setText(text);
  }

  return (
    <View>
      <TextInput
        placeholder="Add Items.."
        style={style.input}
        onChangeText={onChange}
      />
      <TouchableOpacity style={style.btn} onPress={() => addItem(text)}>
        <Text style={style.btnText}>Add Item ➕</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItem;

const style = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: "#c2bad8",
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: "darkslateblue",
    fontSize: 20,
    textAlign: "center",
  },
});
