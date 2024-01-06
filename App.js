import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  FlatList,
} from "react-native";
import pokemonList from "./data.json";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
        {pokemonList.map((pokemon) => {
          return (
            <View style={styles.card} key={pokemon.id}>
              <Text style={styles.cardText}>{pokemon.type}</Text>
              <Text style={styles.cardText}>{pokemon.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}
      <View style={styles.scrollView}>

      <FlatList
        data={pokemonList}
        renderItem={({ item }) => {
          return (
            <View style={styles.card} key={item.id}>
              <Text style={styles.cardText}>{item.type}</Text>
              <Text style={styles.cardText}>{item.name}</Text>
            </View>
          );
        }}
        // horizontal
        keyExtractor={(item) => item.id.toString()}
        />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
  },
  cardText: {
    fontSize: 30,
  },
});
