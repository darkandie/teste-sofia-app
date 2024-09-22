import { ActivityIndicator } from 'react-native';
import FontBold from '../FontBold';
import { Container } from './styles';
import Feather from '@expo/vector-icons/Feather';

interface ButtonProps {
  title: string;
  leftIcon?: boolean;
  isLoading?: boolean;
  onPress: () => void;
}

export default function Button({ title, leftIcon, isLoading, onPress }: ButtonProps) {
  const handlePressButton = () => {
    onPress();
  };

  return (
    <Container disabled={isLoading} onPress={handlePressButton}> 
      {isLoading ? 
        <ActivityIndicator color={"#FFF"}/>
        :
        <>
        {leftIcon && <Feather name="send" size={16} color="#FFF" />}
        <FontBold color='#FFF'>{title}</FontBold>
        </>
      }
    </Container>
  )
}