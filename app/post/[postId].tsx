import { Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useGetPostByIdQuery, useGetPostCommentsQuery } from "@/store/services/postsApi";
import { useGetUserByIdQuery } from "@/store/services/userApi";
import PostDetails from "@/app/post/components/PostDetails";
import Comments from "./components/Comments";

export default function Post() {
  const { postId } = useLocalSearchParams<{postId: string}>();

  const { data: post, error: postError, isLoading: postLoading } = useGetPostByIdQuery(postId);
  const { data: comments, isLoading: commentsLoading } = useGetPostCommentsQuery(postId);

  const userId = post?.userId;
  const { data: user, error: userError, isLoading: userLoading } = useGetUserByIdQuery(userId!, {
    skip: !userId,
  });

  return(
    <>
      {user && comments && post && 
      <>
        <PostDetails 
          user={user}
          post={post}
        />
        <Comments comments={comments}/>
      </>  
      }
    </>
  )
}