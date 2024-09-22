import PostCard from "@/components/PostCard";
import SearchInput from "@/components/SearchInput";
import { database } from "@/db/database";
import { Favorite } from "@/db/models/favorite";
import { Post } from "@/types/Post";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";

export default function Favorites() {
  const [favorites, setFavorites] = useState<Post[]>([]);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchPosts, setSearchPosts] = useState('');

  const fetchDataFromDB = async () => {
    const favoriteCollection = database.get<Favorite>('favorites');
    const response = await favoriteCollection.query().fetch();
    setFavorites(response);
  }

  useEffect(() => {
    fetchDataFromDB();
  }, [favorites]);

  return(
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#EFF1F5",
      }}
    >
      <SearchInput 
        title="Favoritos"
        setShowSearchInput={() => setShowSearchInput(!showSearchInput)}
        showSearchInput={showSearchInput}
        setSearchPosts={setSearchPosts}
      />
      <FlatList 
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <PostCard post={item}/>}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  )
}