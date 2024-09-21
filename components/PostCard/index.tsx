import { Post } from "@/types/Post"
import { Avatar, CardHeader, Container, ContentContainer, UserDataContainer } from './styles';
import { ActivityIndicator, View } from "react-native";
import { useGetUserByIdQuery } from "@/store/services/userApi";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontBold from "../FontBold";
import FontRegular from "../FontRegular";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const { data, isLoading } = useGetUserByIdQuery(post.userId);

  const generateAvatarUrl = (name: string) => {
    const formattedName = name.replace(' ', '+');
    return `https://ui-avatars.com/api/?name=${formattedName}`;
  };

  function filterBody (desc: string) {
    if(desc.length < 100) {
        return desc
    }

    return `${desc.substring(0, 60)}...`;
  }

  if(isLoading) return <ActivityIndicator />;

  return(
    <Container>  
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
            <View>
              <Ionicons 
                size={20}
                name="star-outline"
              />
            </View>
          </CardHeader>
          <ContentContainer>
            <FontBold fontSize="20">{post.title}</FontBold>
            <FontRegular fontSize="14" color="#5E6064">{filterBody(post.body)}</FontRegular>
          </ContentContainer>
        </>  
      }  
    </Container>
  )
}