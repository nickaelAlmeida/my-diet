import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors, Column, Container, Icon, Title } from './styles';

interface HeaderProps {
  color: Colors;
  title?: string;
}

export function Header ({ color, title }: HeaderProps) {

  const navigation = useNavigation();

  return (
    <Container color={color}>
      <Column>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" color={color} />
        </TouchableOpacity>
      </Column>

      {title && (<Title>{title}</Title>)}
      <Column />
    </Container>
  );
}
