import { Colors, Container, Description, Icon, Title } from './styles';

interface InfoProps {
  showIcon?: boolean;
  color?: Colors;
  title: string;
  description: string;
}

export function Info ({
  showIcon = false,
  color = 'gray',
  title,
  description
}: InfoProps) {
  return (
    <Container color={color}>
      {showIcon && (<Icon name="call-made" color={color} />)}
      <Title size={showIcon ? 'XX' : 'XL'}>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}
