import { Text } from './styles';

interface FontSemiBoldProps {
  children: string;
  color?: string;
  fontSize?: string; 
}

export default function FontSemiBold({
  children, 
  color, 
  fontSize
}: FontSemiBoldProps) {
  return (
    <Text
      color={color}
      fontSize={fontSize}
    >
      {children}
    </Text>
  )
}