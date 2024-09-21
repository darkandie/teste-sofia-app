import { Comment } from "@/types/Coment";
import { FlatList } from "react-native";
import { Avatar, ComentTitle, CommentHeader, Container, CommentBody, Separator } from "./styles";
import FontBold from "@/components/FontBold";
import { generateAvatarUrl } from "@/utils/generateAvatarUrl";
import FontRegular from "@/components/FontRegular";

interface CommentsProps {
  comments: Comment[];
}

interface CommentItemProps {
  item: Comment;
}

export default function Comments({ comments } : CommentsProps) {
  const CommentItem = ({item} : CommentItemProps) => {
    return (
      <Container>
        <CommentHeader>
          <Avatar
            source={{ uri: generateAvatarUrl(item.name) }}
          />
          <FontRegular color="#5E6064">{item.name}</FontRegular>
        </CommentHeader>
        <CommentBody>
          <FontBold>{item.body}</FontBold>
        </CommentBody>
      </Container>
    )
  }

  const separatorItem = () => {
    return (
      <Separator />
    )
  }

  return(
    <>
      <ComentTitle>
        <FontBold fontSize="20">Comentários</FontBold>
      </ComentTitle>
      <FlatList 
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <CommentItem item={item}/>}
        ItemSeparatorComponent={separatorItem}
      />
    </>
  )
}