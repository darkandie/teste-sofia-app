import { Post } from "@/types/Post"
import { Avatar, CardHeader, Container, UserDataContainer } from './styles';
import { ActivityIndicator, View } from "react-native";
import { useGetUserByIdQuery } from "@/store/services/userApi";
import FontBold from "../FontBold";
import FontRegular from "../FontRegular";
import { router } from "expo-router";
import { generateAvatarUrl } from "@/utils/generateAvatarUrl";
import FavoriteButton from "../FavoriteButton";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const { data, isLoading } = useGetUserByIdQuery(post.userId);

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

  const typeToFavorite = () => {
    return {  
      userId: post.userId, 
      postId: post.id, 
      title: post.title,
      body: post.body
    }
  }

  return(
    <Container
      onPress={goToPost}
    >  
      {data &&
        <>
          <CardHeader>
            <UserDataContainer>
              {data.name && <Avatar
                source={{ uri: generateAvatarUrl(data.name) }}
              />}
              <View>
                <FontBold>{data.name}</FontBold>
                <FontRegular fontSize="12" color="#5E6064">{data.email}</FontRegular>
              </View>
            </UserDataContainer>
            <FavoriteButton post={typeToFavorite()}/>
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