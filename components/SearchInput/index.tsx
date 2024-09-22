import { TouchableOpacity } from "react-native";
import FontRegular from "../FontRegular";
import InputDefault from "../Input";
import { Container } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';

interface SearchInputProps {
  title: string;
  showSearchInput: boolean;
  setShowSearchInput: () => void;
  setSearchPosts: (text: string) => void;
}

export default function SearchInput({ 
  title, 
  showSearchInput, 
  setShowSearchInput, 
  setSearchPosts 
}: SearchInputProps) {
  return(
    <Container>
      {!showSearchInput ? (
        <>
          <FontRegular fontSize="24">{title}</FontRegular>
          <TouchableOpacity onPress={setShowSearchInput}>
            <Ionicons name="search-outline" size={24} color="black" />
          </TouchableOpacity>
        </>
      ) : (
        <>
          <InputDefault 
            placeholder="Buscar publicação"
            onChangeText={setSearchPosts}
          />
          <TouchableOpacity onPress={setShowSearchInput}>
            <FontRegular color="#0F90D9">Cancelar</FontRegular>
          </TouchableOpacity>
        </>
      )}
    </Container>
  )
}