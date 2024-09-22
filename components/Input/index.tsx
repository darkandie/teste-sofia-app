import { View } from 'react-native';
import FontRegular from '../FontRegular';
import { Input, Title } from './styles';

interface InputDefaultProps {
  title?: string;
  placeholder: string;
  multiline?: boolean; 
  numberOfLines?: number;
  height?: number;
  onChangeText: (text: string) => void;
}

export default function InputDefault({
    title, 
    placeholder,
    multiline,
    numberOfLines,
    height,
    onChangeText
  }: InputDefaultProps) {
  return(
    <View>
      {title && 
        <Title>
          <FontRegular>{title}</FontRegular>
        </Title>  
      }
      {!height ? 
        <Input 
          placeholder={placeholder}
          multiline={multiline}
          numberOfLines={numberOfLines}
          onChangeText={onChangeText}
        /> 
          : 
        <Input 
          placeholder={placeholder}
          multiline={multiline}
          numberOfLines={numberOfLines}
          style={{ height: height }}
          onChangeText={onChangeText}
        />  
      }
    </View>
  )
}