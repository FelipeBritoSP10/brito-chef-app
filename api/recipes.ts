import axios from "axios";
export async function getRecipes(query: string) {
  const res = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  );

  return res.data.meals || [];
}