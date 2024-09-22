import InputDefault from "@/components/Input";
import { Container, Form, ButtonContainer} from "./styles";
import Button from "@/components/Button";
import { useCreatePostMutation } from "@/store/services/postsApi";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import { Alert } from "react-native";

export default function NewPost() {
  const [createPost, { isLoading, isSuccess, data }] = useCreatePostMutation();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const submitPost = () => {
    createPost({ title, body, userId: 1})
  }

  useEffect(() => {
    if(isSuccess) {
      Alert.alert("Post realizado com successo.")
      router.back();
    }
  }, [isSuccess])

  return(
    <Container>
      <Form>
        <InputDefault 
          placeholder="Adicione um titulo"
          title="Título da publicação"
          onChangeText={setTitle}

        />
        <InputDefault 
          placeholder="O que gostaria de compartilhar?"
          title="Texto da publicação"
          multiline={true}
          numberOfLines={8}
          height={300}
          onChangeText={setBody}
        />
      </Form>
      <ButtonContainer>
        <Button 
          title="Publicar"
          leftIcon={true}
          isLoading={isLoading}
          onPress={submitPost}
        />
      </ButtonContainer>  
    </Container>
  )
}