import React from "react";
import { View, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { Text, Surface, Searchbar, useTheme } from "react-native-paper";

import RecipeCard from "../components/RecipeCard";
import { useRecipes } from "../hooks/useRecipes";
import { CATEGORIAS } from "../constants/categorias";

export default function Home({ navigation }: any) {
  const { colors } = useTheme();

  const {
    pesquisa,
    setPesquisa,
    receitas,
    categoriaAtiva,
    setCategoriaAtiva,
  } = useRecipes();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      
      {/* HEADER */}
      <View style={{ paddingHorizontal: 20, paddingTop: 60, paddingBottom: 20 }}>
        <Text style={{ fontSize: 10, letterSpacing: 3, opacity: 0.4 }}>
          SIGNATURE MENU
        </Text>

        <Text style={{ fontSize: 32, fontWeight: "900" }}>
          BRITO <Text style={{ color: "#FF4B3A" }}>RECIPE</Text>
        </Text>

        <Searchbar
          placeholder="O que vamos preparar?"
          value={pesquisa}
          onChangeText={setPesquisa}
          style={{
            marginTop: 15,
            borderRadius: 12,
            backgroundColor: "#F5F5F5",
            borderLeftWidth: 5,
            borderLeftColor: "#FF4B3A",
          }}
        />
      </View>

      <FlatList
        data={receitas}
        keyExtractor={(i) => i.idMeal}
        ListHeaderComponent={
          <View>
            
            {/* CATEGORIAS */}
            <Text style={{ marginLeft: 20, fontWeight: "900", marginBottom: 10 }}>
              CATEGORIAS
            </Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingLeft: 20 }}>
              {CATEGORIAS.map((c) => (
                <TouchableOpacity
                  key={c.id}
                  onPress={() => {
                    setCategoriaAtiva(c.busca);
                    setPesquisa("");
                  }}
                  style={{ alignItems: "center", marginRight: 15 }}
                >
                  <Surface
                    style={{
                      width: 65,
                      height: 65,
                      borderRadius: 18,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor:
                        categoriaAtiva === c.busca ? "#FF4B3A" : "#fff",
                    }}
                  >
                    <Text style={{ fontSize: 26 }}>{c.icon}</Text>
                  </Surface>

                  <Text
                    style={{
                      fontSize: 11,
                      marginTop: 6,
                      fontWeight: "800",
                      color:
                        categoriaAtiva === c.busca ? "#FF4B3A" : "#999",
                    }}
                  >
                    {c.nome}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* POPULARES */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 20,
                marginTop: 20,
              }}
            >
              <Text style={{ fontWeight: "900" }}>POPULARES</Text>
              <Text style={{ color: "#FF4B3A", fontWeight: "bold" }}>
                Ver tudo
              </Text>
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <View style={{ paddingHorizontal: 20, marginTop: 15 }}>
            <RecipeCard
              item={item}
              onPress={() => navigation.navigate("Details", { item })}
            />
          </View>
        )}
        ListEmptyComponent={
          <Text style={{ textAlign: "center", marginTop: 40, opacity: 0.3 }}>
            BUSCANDO...
          </Text>
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}