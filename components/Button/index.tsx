import { Container, Title } from './styles';

interface ButtonProps {
  title: string;
}

export default function Button({ title }: ButtonProps) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  )
}