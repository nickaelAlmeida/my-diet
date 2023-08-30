import { Image } from 'react-native';
import { Container, User, UserImage } from './styles';
import logo from '@assets/logo.png';
import user from '@assets/user.jpeg';

export function Header () {
  return (
    <Container>
      <Image source={logo} />
      <User>
        <UserImage source={user} />
      </User>
    </Container>
  );
}
