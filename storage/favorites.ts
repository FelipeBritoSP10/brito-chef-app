import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "@favorites";

export async function getFavorites() {
  const data = await AsyncStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
}
export async function toggleFavorite(recipe: any) {
  const current = await getFavorites();

  const exists = current.find(
    (item: any) => item.idMeal === recipe.idMeal
  );

  let updated;

  if (exists) {
    updated = current.filter(
      (item: any) => item.idMeal !== recipe.idMeal
    );
  } else {
    updated = [...current, recipe];
  }

  await AsyncStorage.setItem(KEY, JSON.stringify(updated));
  return updated;
}