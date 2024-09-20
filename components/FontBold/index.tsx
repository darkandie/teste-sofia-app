import { Text } from './styles';

interface FontRegularProps {
  children: string;
  color?: string;
  fontSize?: string; 
}

export default function FontBold({
  children, 
  color, 
  fontSize
}: FontRegularProps) {
  return (
    <Text
      color={color}
      fontSize={fontSize}
    >
      {children}
    </Text>
  )
}