import { View, Text, Image, Pressable } from "react-native";
import { useState } from "react";

export default function Details({ route }: any) {
  const { item } = route.params;
  const [qty, setQty] = useState(1);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>

      {/* IMAGE */}
      <Image
        source={{ uri: item.strMealThumb }}
        style={{
          width: "100%",
          height: 300,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      />

      {/* CONTENT */}
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>
          {item.strMeal}
        </Text>

        <Text style={{ color: "#999", marginTop: 10 }}>
          Ground beef burger with fresh ingredients and sauce.
        </Text>

        {/* PRICE + QTY */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            $14.00
          </Text>

          <View style={{ flexDirection: "row", gap: 10 }}>
            <Pressable onPress={() => setQty(qty - 1)}>
              <Text style={{ fontSize: 20 }}>➖</Text>
            </Pressable>

            <Text>{qty}</Text>

            <Pressable onPress={() => setQty(qty + 1)}>
              <Text style={{ fontSize: 20 }}>➕</Text>
            </Pressable>
          </View>
        </View>

        <Pressable
          style={{
            marginTop: 30,
            backgroundColor: "#FF6B35",
            padding: 15,
            borderRadius: 15,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            Order Now
          </Text>
        </Pressable>
      </View>
    </View>
  );
}