import { View } from 'react-native';
import FontRegular from '../FontRegular';
import { Input, Title } from './styles';

interface InputDefaultProps {
  title?: string;
  placeholder: string;
}

export default function InputDefault({title, placeholder}: InputDefaultProps) {
  return(
    <View>
      {title && 
        <Title>
          <FontRegular>{title}</FontRegular>
        </Title>  
      }
      <Input 
        placeholder={placeholder}
      />
    </View>
  )
}