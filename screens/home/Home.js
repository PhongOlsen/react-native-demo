import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../consts/color";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
} from "react-native";
import data from "../../consts/data";
const width = Dimensions.get("window").width / 2 - 30;

export default function Home({ navigation }) {
  const [categoryName, setCategoryName] = useState("ALL");
  const categories = ["ALL", "ORGANIC", "INDOORS", "SYNTHETIC"];
  const [initialData, setInitialData] = useState();
  const inputValue = useRef(null);

  useEffect(() => {
    setInitialData(data);
  }, []);

  const handleFilterData = () => {
    setInitialData(
      data.filter((x) => x.name.toLowerCase().includes(inputValue.current.toLowerCase()))
    );
  };

  const handleFilterDataByCategory = (value) => {
    setCategoryName(value);
    if (value === "ALL") {
      setInitialData(data);
    } else {
      setInitialData(
        data.filter((x) =>
          x.category.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };

  const Card = ({ plant }) => {
    return (
      <View style={styles.card}>
        <View style={{ alignItems: "flex-end" }}>
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: plant.like
                ? "rgba(245, 42, 42,0.2)"
                : "rgba(0,0,0,0.2) ",
            }}
            activeOpacity={0.5}
            onPress={() => alert("like success")}
          >
            <Ionicons
              name={"heart"}
              size={18}
              color={plant.like ? COLORS.red : COLORS.black}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Product Detail Screen", plant)}
          style={{ height: 100, alignItems: "center" }}
        >
          <Image
            source={plant.img}
            style={{ flex: 1, resizeMode: "contain" }}
          />
        </TouchableOpacity>
        <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 10 }}>
          {plant.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 5,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            ${plant.price}
          </Text>
          <TouchableOpacity
            style={{
              height: 25,
              width: 25,
              backgroundColor: COLORS.green,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
            }}
            onPress={() => alert("add to cart success")}
          >
            <Text
              style={{
                fontSize: 15,
                color: COLORS.white,
                fontWeight: "bold",
              }}
            >
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
      }}
    >
      <View style={styles.header}>
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Welcome to</Text>
          <Text
            style={{ fontSize: 25, fontWeight: "bold", color: COLORS.green }}
          >
            Hanh Nguyen Shop
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <View style={styles.searchContainer}>
          <Ionicons
            name={"search"}
            size={25}
            style={{ marginLeft: 25, marginRight: 10 }}
          />
          <TextInput
            placeholder="Search"
            style={styles.input}
            onChangeText={(value) => (inputValue.current = value)}
            onSubmitEditing={handleFilterData}
          />
        </View>
      </View>
      <View>
        <FlatList
          columnWrapperStyle={{ justifyContent: "space-between" }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 20,
            marginBottom: 20,
          }}
          keyExtractor={(item) => `${item}`}
          numColumns={categories.length}
          data={categories}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                key={item}
                onPress={() => handleFilterDataByCategory(item)}
              >
                <Text
                  style={[
                    styles.categoryText,
                    categoryName === item && styles.categoryTextSelected,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          columnWrapperStyle={{ justifyContent: "space-between" }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 20,
            marginBottom: 20,
          }}
          numColumns={2}
          data={initialData}
          keyExtractor={(item) => `${item.name}`}
          renderItem={({ item }) => {
            return <Card plant={item} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    borderRadius: 10,
  },
  categoryText: { fontSize: 16, color: "grey", fontWeight: "bold" },
  input: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    color: COLORS.dark,
  },
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
});
