import { View, Text, Image, Pressable } from "react-native";

export default function RecipeCard({ item, onPress }: any) {
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          backgroundColor: "#1A1A1A",
          borderRadius: 16,
          marginBottom: 12,
          overflow: "hidden",
        }}
      >
        <Image
          source={{ uri: item.strMealThumb }}
          style={{ height: 180, width: "100%" }}
        />

        <View style={{ padding: 12 }}>
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            {item.strMeal}
          </Text>

          <Text style={{ color: "#FF6B35", fontSize: 12, marginTop: 4 }}>
            Ver receita →
          </Text>
        </View>
      </View>
    </Pressable>
  );
}