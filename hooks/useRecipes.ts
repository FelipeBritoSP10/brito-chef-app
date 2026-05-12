import { useEffect, useState } from "react";
import { getRecipes } from "../api/recipes";

export function useRecipes() {
    const [pesquisa, setPesquisa] = useState("");
    const [receitas, setReceitas] = useState<any[]>([]);
    const [categoriaAtiva, setCategoriaAtiva] = useState("chicken");

    useEffect(() => {
        const timer = setTimeout(async () => {
            const data = await getRecipes(pesquisa || categoriaAtiva);
            setReceitas(data);
        }, 400);

        return () => clearTimeout(timer);
    }, [pesquisa, categoriaAtiva]);

    return {
        pesquisa,
        setPesquisa,
        receitas,
        categoriaAtiva,
        setCategoriaAtiva,
    };
}