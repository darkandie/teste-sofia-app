import { Container, Input, Title } from './styles';

interface InputDefaultProps {
  title?: string;
  placeholder: string;
}

export default function InputDefault({title, placeholder}: InputDefaultProps) {
  return(
    <Container>
      {title && <Title>{title}</Title>}
      <Input 
        placeholder={placeholder}
      />
    </Container>
  )
}