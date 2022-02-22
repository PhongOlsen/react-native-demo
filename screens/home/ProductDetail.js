import React, { useState, useContext } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../consts/color";
import { CartContext } from "../../contexts/CartContext";
export default function ProductDetail({ navigation, route }) {
  const plants = route.params;
  const { cart, setCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  console.log(cart);

  const handleAddToCart = () => {
    const payload = {
      ...plants,
      quantity: quantity,
    };
    const itemExit = cart.find((x) => x.name === plants.name);
    if (!itemExit) {
      setCart([...cart, payload]);
    }
    navigation.navigate("Cart");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name={"arrow-back"} size={28} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 0.45,
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={plants.img} style={{ resizeMode: "contain", flex: 1 }} />
      </View>
      <View
        style={{
          backgroundColor: COLORS.light,
          flex: 0.55,
          borderRadius: 20,
          marginTop: 30,
          paddingTop: 30,
          marginHorizontal: 7,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginLeft: 20,
            alignItems: "flex-end",
          }}
        >
          <View
            style={{
              width: 25,
              height: 2,
              backgroundColor: COLORS.dark,
              marginBottom: 5,
              marginRight: 3,
            }}
          />
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Best choice</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 30,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 20 }}>
            {plants.name}
          </Text>
          <View
            style={{
              backgroundColor: COLORS.green,
              width: 80,
              height: 40,
              borderTopLeftRadius: 25,
              borderBottomLeftRadius: 25,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{ color: COLORS.white, fontSize: 16, fontWeight: "bold" }}
            >
              ${plants.price}
            </Text>
          </View>
        </View>
        <View style={{ marginHorizontal: 20, marginTop: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>About</Text>
          <Text
            style={{
              color: "grey",
              fontSize: 16,
              lineHeight: 22,
              marginTop: 10,
            }}
          >
            {plants.about}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
            marginHorizontal: 20,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                if (quantity > 1) setQuantity(quantity - 1);
              }}
            >
              <View
                style={{
                  width: 60,
                  height: 40,
                  borderWidth: 1,
                  borderRadius: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "grey",
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 28 }}>-</Text>
              </View>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                marginHorizontal: 10,
                fontWeight: "bold",
              }}
            >
              {quantity}
            </Text>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => setQuantity(quantity + 1)}
            >
              <View
                style={{
                  width: 60,
                  height: 40,
                  borderWidth: 1,
                  borderRadius: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "grey",
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 28 }}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => handleAddToCart()}
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 130,
              height: 40,
              backgroundColor: COLORS.green,
              borderRadius: 30,
            }}
          >
            <Text
              style={{ color: COLORS.white, fontSize: 18, fontWeight: "bold" }}
            >
              Buy
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
