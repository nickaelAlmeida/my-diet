import { Container, Icon, Message } from './styles';

export function ListEmpty () {
  return (
    <Container>
      <Icon name="no-meals" />
      <Message>You don't have any meal registered yet.</Message>
    </Container>
  );
}
