import { useGetPostsByUserIdQuery, useGetUserByIdQuery } from "@/store/services/userApi";
import { useLocalSearchParams } from "expo-router";
import { FlatList, SafeAreaView, View } from "react-native";
import { Avatar, ProfileHeader, UserDataContainer, UserInfosContainer, UserInfoItem } from "./styles";
import { generateAvatarUrl } from "@/utils/generateAvatarUrl";
import FontBold from "@/components/FontBold";
import FontRegular from "@/components/FontRegular";
import Ionicons from "@expo/vector-icons/Ionicons";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import PostCard from "@/components/PostCard";

export default function Profile() {
  const { userId } = useLocalSearchParams<{userId: string}>();

  const { data: user, isLoading: userLoading } = useGetUserByIdQuery(userId);
  const { data: posts, isLoading: postsLoading } = useGetPostsByUserIdQuery(userId);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#EFF1F5",
      }}
    >
      {user && posts &&
        <>
          <ProfileHeader>
            <UserDataContainer>
              <Avatar
                source={{ uri: generateAvatarUrl(user.name) }}
              />
              <View>
                <FontBold fontSize="24">{user.name}</FontBold>
                <FontRegular color="#5E6064">{user.email}</FontRegular>
              </View>
            </UserDataContainer>
            <UserInfosContainer>
              <UserInfoItem>
                <Ionicons name="mail-outline" size={16}/>
                <FontRegular>{user.email}</FontRegular>
              </UserInfoItem>
              <UserInfoItem>
                <SimpleLineIcons name="location-pin" size={16}/>
                <FontRegular>{`${user.address.street}, ${user.address.city}`}</FontRegular>
              </UserInfoItem>
              <UserInfoItem>
                <MaterialCommunityIcons name="toolbox-outline" size={16}/>
                <FontRegular>{user.company.name}</FontRegular>
              </UserInfoItem>
              <UserInfoItem>
                <Feather name="phone" size={16}/>
                <FontRegular>{user.phone}</FontRegular>
              </UserInfoItem>
            </UserInfosContainer>
          </ProfileHeader>
          <FlatList 
            data={posts}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <PostCard post={item}/>}
            showsVerticalScrollIndicator={false}
          />
        </>  
      }
    </SafeAreaView>
  )
}