import { TextInput } from "react-native";
export default function SearchInput(props: any) {
    return (
        <TextInput
            mode="outlined"
            placeholder="Buscar receitas..."
            style={{ marginBottom: 15 }}
            {...props}
        />
    );
}