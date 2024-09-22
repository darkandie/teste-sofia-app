import { ActivityIndicator, FlatList, SafeAreaView, Text } from "react-native";
import { useGetAllPostsQuery } from "@/store/services/postsApi";
import PostCard from "@/components/PostCard";
import FloatButton from "@/components/FloatButton";
import { router } from "expo-router";

export default function Home() {
  const {data, isLoading} = useGetAllPostsQuery();

  if(isLoading) return <ActivityIndicator />;

  const goToNewPostScreen = () => {
    router.navigate('/newPost');
  }

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
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      <FloatButton onPress={goToNewPostScreen}/>
    </SafeAreaView>
  )
}