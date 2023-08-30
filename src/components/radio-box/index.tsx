import { Color, Circle, Container, Label } from './styles';

interface RadioBoxProps {
  color: Color;
  label: string;
  isChecked: boolean;
  onPress?: () => void;
}

export function RadioBox ({
  color,
  label,
  isChecked,
  onPress
}: RadioBoxProps) {
  return (
    <Container
      color={color}
      isChecked={isChecked}
      onPress={onPress}
    >
      <Circle color={color} />
      <Label>{label}</Label>
    </Container>
  );
}
