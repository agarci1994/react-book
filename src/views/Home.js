import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import BookList from "./Components/BookList";

const BOOK_LIST = [
  { id: 1, title: "Hacia rutas salvajes" },
  {
    id: 2,
    title: "El nombre del viento",
  },
  {
    id: 3,
    title: "Ensayo sobre la ceguera",
  },
  {
    id: 2,
    title: "Tomates y pimientos fritos",
  },
];

const Home = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={BOOK_LIST}
        renderItem={({ item }) => <BookList book={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View>
            <Text>Mi lista de libros:</Text>
          </View>
        }
      />
    </View>
  );
};

export default Home;
