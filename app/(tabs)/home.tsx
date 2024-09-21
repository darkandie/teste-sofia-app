import { ActivityIndicator, FlatList, SafeAreaView, Text } from "react-native";
import { useGetAllPostsQuery } from "@/store/services/postsApi";
import PostCard from "@/components/PostCard";

export default function Home() {
  const {data, isLoading} = useGetAllPostsQuery();

  if(isLoading) return <ActivityIndicator />;

  return(
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#EFF1F5",
      }}
    >
      <FlatList 
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <PostCard post={item}/>}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}