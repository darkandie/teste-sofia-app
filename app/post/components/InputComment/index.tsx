import { ActivityIndicator, TextInput } from "react-native";
import { Container, InputGroup, SendCommentButton } from "./styles";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useEffect, useState } from "react";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useCreateCommentMutation } from "@/store/services/comentApi";
import { User } from "@/types/User";
import Toast from 'react-native-toast-message';

interface InputCommentProps {
  postId: string;
  user: User;
}

export default function InputComment({ user, postId }: InputCommentProps) {
  const [showButton, setShowButton] = useState(false);
  const [query, setQuery] = useState('');

  const showToast = () => {
    return Toast.show({
      position: 'bottom',
      visibilityTime: 4000,
      type: 'success',
      text1: 'Comentário enviado com sucesso!',
    });
  }

  const {name, email, } = user;

  const [createComment, { isLoading, isSuccess, data }] = useCreateCommentMutation();

  const submitComment = () => {
    createComment({postId, name, email, body: query })
  }

  useEffect(() => {
    if(data) {
      showToast();
    }
  }, [data])

  console.log(data, 'data')

  if(isLoading) return <ActivityIndicator />;

  return(
    <Container>
      <InputGroup showButton={showButton}>
        {!showButton && <MaterialCommunityIcons name="message-text-outline" size={16}/>}
        <TextInput 
          placeholder="Adicione um comentário" 
          onFocus={() => setShowButton(true)}
          onBlur={() => setShowButton(false)}
          onChangeText={(e) => setQuery(e)}
        />
      </InputGroup>
      {showButton && 
        <SendCommentButton onPress={submitComment}>
          <FontAwesome5 name="arrow-right" size={18} color={"#FFF"}/>
        </SendCommentButton>
      }
    </Container>
  )
}