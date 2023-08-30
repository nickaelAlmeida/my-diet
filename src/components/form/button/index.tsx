import { MaterialIcons } from '@expo/vector-icons';
import { ButtonType, Container, Icon, Label } from './styles';

interface ButtonProps {
  type?: ButtonType;
  icon?: keyof typeof MaterialIcons.glyphMap;
  marginBottom?: number;
  label: string;
  onPress: () => void;
}

export function Button ({
  type = 'primary',
  icon,
  label,
  marginBottom = 0,
  onPress
}: ButtonProps) {
  return (
    <Container
      type={type}
      onPress={onPress}
      style={{ marginBottom }}
    >
      {icon && (<Icon type={type} name={icon} />)}
      <Label type={type}>{label}</Label>
    </Container>
  );
}
