import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import Header from "./components/Header";
import uuid from "react-native-uuid";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";

export default function App() {
  //Creating an items state
  const [items, setItems] = useState([
    { id: uuid.v4(), text: "Milk" },
    { id: uuid.v4(), text: "Eggs" },
    { id: uuid.v4(), text: "Bread" },
    { id: uuid.v4(), text: "Juice" },
  ]);

  const empty = () => {
    alert("Error, Please add an item", [{ text: "Ok" }]);
  };

  //Delete Item functions
  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  //Adding an Item
  const addItem = (text) => {
    if (!text) {
      empty();
    } else {
      setItems((prevItems) => {
        return [{ id: uuid.v4(), text }, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping Listss" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    backgroundColor: "black",
  },
});
