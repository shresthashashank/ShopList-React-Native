import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "darkslateblue",
    alignItems: "center",
    padding: 30,
    marginTop: 20,
  },
  text: {
    color: "white",
  },
});
