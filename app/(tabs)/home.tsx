import { SafeAreaView, Text } from "react-native";
import { useGetAllPostsQuery } from "@/store/services/postsApi";

export default function Home() {
  const {data, isLoading} = useGetAllPostsQuery();

  console.log(data, 'dados dos posts');

  return(
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  )
}