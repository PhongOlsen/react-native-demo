import React, { useContext, useState } from "react";
import { Text, View, TextInput, Pressable } from "react-native";
import COLORS from "../../consts/color";
import { AuthContext } from "../../contexts/AuthenContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  const { setIsLogined } = useContext(AuthContext);
  const [user, setUser] = useState();
  const hanldLogin = async () => {
    try {
      if (user.useName === "La Thanh Phong" && user.password === "28051999") {
        setIsLogined(true);
        await AsyncStorage.setItem(
          "token",
          "Bearer IiXkpLju15Sx12iuO7K3zvHdEQpWX2-PJ9PQK69FEjwzchUqsHgtmAlmSgOE-Sg5yC_237vmtwlvUHER8-fwlvcJ60JUjxxA5qnohUNZKoxA6xaee3WHXkRnm7gNYnYx"
        );
      } else {
        alert("wrong account information !!!");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 100,
        backgroundColor: COLORS.white,
      }}
    >
      <Text
        style={{
          fontSize: 35,
          fontWeight: "bold",
          color: COLORS.green,
          textAlign: "center",
        }}
      >
        Hanh Nguyen Shop
      </Text>
      <View style={{ marginTop: 80, marginLeft: 20, marginRight: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>Wellcome !!!</Text>
        <View
          style={{
            height: 50,
            backgroundColor: COLORS.light,
            alignItems: "center",
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <TextInput
            placeholder="Email"
            onChangeText={(value) => setUser({ ...user, useName: value })}
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: COLORS.dark,
              paddingLeft: 10,
              width: "100%",
            }}
          />
        </View>
        <View
          style={{
            height: 50,
            backgroundColor: COLORS.light,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <TextInput
            placeholder="Password"
            onChangeText={(value) => setUser({ ...user, password: value })}
            secureTextEntry={true}
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: COLORS.dark,
              paddingLeft: 10,
              width: "100%",
            }}
          />
        </View>
        <Pressable
          onPress={() => hanldLogin()}
          style={{
            marginTop: 20,
            borderRadius: 10,
            backgroundColor: COLORS.green,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{ fontWeight: "bold", fontSize: 18, color: COLORS.white }}
          >
            Login
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
