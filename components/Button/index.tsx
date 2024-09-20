import FontBold from '../FontBold';
import { Container } from './styles';

interface ButtonProps {
  title: string;
}

export default function Button({ title }: ButtonProps) {
  return (
    <Container>
      <FontBold color='#FFF'>{title}</FontBold>
    </Container>
  )
}