import React, {useContext, useEffect, useState} from "react";
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    Pressable,
    ScrollView
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import COLORS from "../../consts/color";
import {CartContext} from "../../contexts/CartContext";

export default function Cart({navigation}) {
    const {cart} = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState();

    useEffect(() => {
        const sum = cart.reduce((total, item) => (Number(item.price) * Number(item.quantity)) + Number(total), 0);
        setTotalPrice(sum);
    }, [cart])

    const ItemCart = ({plant}) => {
        return (
            <View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: 10,
                    }}
                >
                    <View
                        style={{
                            width: 80,
                            height: 80,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Image
                            source={plant.img}
                            style={{resizeMode: "contain", flex: 1}}
                        />
                    </View>
                    <View style={{justifyContent: "center"}}>
                        <Text style={{fontWeight: "bold", fontSize: 16}}>
                            {plant.name}
                        </Text>
                        <Text style={{fontWeight: "bold", fontSize: 18}}>
                            ${plant.price}
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <View
                            style={{
                                width: 30,
                                height: 30,
                                borderWidth: 1,
                                borderRadius: 5,
                                justifyContent: "center",
                                alignItems: "center",
                                borderColor: "grey",
                            }}
                        >
                            <Text style={{fontWeight: "bold"}}>-</Text>
                        </View>
                        <Text style={{marginHorizontal: 5, fontWeight: "bold"}}>
                            {plant.quantity}
                        </Text>
                        <View
                            style={{
                                width: 30,
                                height: 30,
                                borderWidth: 1,
                                borderRadius: 5,
                                justifyContent: "center",
                                alignItems: "center",
                                borderColor: "grey",
                            }}
                        >
                            <Text style={{fontWeight: "bold"}}>+</Text>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        height: 1,
                        backgroundColor: COLORS.light,
                        marginTop: 20,
                    }}
                />
            </View>
        );
    };
    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingHorizontal: 20,
                backgroundColor: COLORS.white,
                flexDirection: "column",
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
                    <Ionicons name={"arrow-back"} size={28}/>
                </TouchableOpacity>
                <Text style={{fontWeight: "bold", fontSize: 20}}>My Cart</Text>
                <Text/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        height: 1,
                        backgroundColor: COLORS.light,
                        marginTop: 20,
                    }}
                />
                <View>
                    {cart.length > 0 ? cart.map((item, index) => {
                        return (
                            <View key={index}>
                                <ItemCart plant={item}/>
                            </View>
                        )
                    }) : <Text/>}
                </View>
            </ScrollView>
            <View style={{marginTop: "auto", marginBottom: 20}}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Text style={{fontWeight: "bold", color: "gray", fontSize: 18}}>
                        TOTAL
                    </Text>
                    <Text style={{fontWeight: "bold", fontSize: 25}}>${totalPrice}</Text>
                </View>
                <Pressable
                    //   onPress={() => hanldLogin()}
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
                        style={{fontWeight: "bold", fontSize: 18, color: COLORS.white}}
                    >
                        Confirm Payment
                    </Text>
                </Pressable>
            </View>

        </SafeAreaView>
    );
}
