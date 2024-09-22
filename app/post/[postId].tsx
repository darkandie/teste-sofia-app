import { SafeAreaView, KeyboardAvoidingView, Platform } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useGetPostByIdQuery, useGetPostCommentsQuery } from "@/store/services/postsApi";
import { useGetUserByIdQuery } from "@/store/services/userApi";
import PostDetails from "@/app/post/components/PostDetails";
import Comments from "./components/Comments";
import InputComment from "./components/InputComment";

export default function Post() {
  const { postId } = useLocalSearchParams<{postId: string}>();

  const { data: post } = useGetPostByIdQuery(postId);
  const { data: comments } = useGetPostCommentsQuery(postId);

  const userId = post?.userId;
  const { data: user } = useGetUserByIdQuery(userId!, {
    skip: !userId,
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      >
        {user && comments && post && (
          <>
            <PostDetails user={user} post={post} />
            <Comments comments={comments} />
            <InputComment postId={postId} user={user}/>
          </>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
