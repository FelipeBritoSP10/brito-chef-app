import { ScrollView, Text, Pressable } from "react-native";

const categories = ["Burger", "Pizza", "Pasta", "Chicken"];

export default function CategoryList({ onSelect }: any) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((item) => (
        <Pressable
          key={item}
          onPress={() => onSelect(item)}
          style={{
            backgroundColor: "#222",
            padding: 10,
            borderRadius: 20,
            marginRight: 10,
          }}
        >
          <Text style={{ color: "#fff" }}>{item}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}