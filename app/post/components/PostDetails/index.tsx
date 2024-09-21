import { TouchableOpacity, View } from "react-native";
import { Avatar, CardHeader, Container, ContentContainer, UserDataContainer } from "./styles";
import FontBold from "../../../../components/FontBold";
import FontRegular from "../../../../components/FontRegular";
import { useState } from "react";
import { generateAvatarUrl } from "@/utils/generateAvatarUrl";
import Ionicons from "@expo/vector-icons/Ionicons";
import { User } from "@/types/User";
import { Post } from "@/types/Post";
import { router } from "expo-router";

interface PostDetailsProps {
  user: User;
  post: Post;
}

export default function PostDetails({user, post}: PostDetailsProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const goToProfileScreen = () => {
    router.navigate(`/profile/${user.id}`);
  }

  return (
    <Container>
      <CardHeader>
        <UserDataContainer
          onPress={goToProfileScreen}
        >
          <Avatar
            source={{ uri: generateAvatarUrl(user.name) }}
          />
          <View>
            <FontBold>{user.name}</FontBold>
            <FontRegular fontSize="12" color="#5E6064">{user.email}</FontRegular>
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
      <ContentContainer>
        <FontBold fontSize="20">{post.title}</FontBold>
        <FontRegular fontSize="14" color="#5E6064">{post.body}</FontRegular>
      </ContentContainer>
    </Container>
  )
}