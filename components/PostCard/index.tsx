import { Post } from "@/types/Post"
import { Avatar, CardHeader, Container, UserDataContainer } from './styles';
import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import { useGetUserByIdQuery } from "@/store/services/userApi";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontBold from "../FontBold";
import FontRegular from "../FontRegular";
import { useState } from "react";
import { router } from "expo-router";
import { generateAvatarUrl } from "@/utils/generateAvatarUrl";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const { data, isLoading } = useGetUserByIdQuery(post.userId);
  const [isFavorite, setIsFavorite] = useState(false);

  const filterBody = (body: string) => {
    if(body.length < 100) {
        return body
    }
    return `${body.substring(0, 60)}...`;
  }

  const goToPost = () => {
    router.navigate(`/post/${post.id}`)
  }

  if(isLoading) return <ActivityIndicator />;

  return(
    <Container
      onPress={goToPost}
    >  
      {data &&
        <>
          <CardHeader>
            <UserDataContainer>
              <Avatar
                source={{ uri: generateAvatarUrl(data.name) }}
              />
              <View>
                <FontBold>{data.name}</FontBold>
                <FontRegular fontSize="12" color="#5E6064">{data.email}</FontRegular>
              </View>
            </UserDataContainer>
            <TouchableOpacity
              onPress={() => setIsFavorite(!isFavorite)}
            >
              {!isFavorite ? 
                <Ionicons 
                  size={20}
                  name="star-outline"
                /> :
                <Ionicons 
                  size={20}
                  name="star"
                  color={"#F3c830"}
                />
              }
            </TouchableOpacity>
          </CardHeader>
          <View>
            <FontBold fontSize="20">{post.title}</FontBold>
            <FontRegular fontSize="14" color="#5E6064">{filterBody(post.body)}</FontRegular>
          </View>
        </>  
      }  
    </Container>
  )
}