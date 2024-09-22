import { Container } from "./styles";
import Feather from '@expo/vector-icons/Feather';

interface FloatButtonProps {
  onPress: () => void;
}

export default function FloatButton({ onPress }: FloatButtonProps) {

  const handlePressButton = () => {
    onPress();
  }

  return(
    <Container onPress={handlePressButton}>
      <Feather name="plus" size={28} color="#FFF" />
    </Container>
  )
}