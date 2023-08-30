import { Container, Description, Time, Line, Status } from './styles';

interface MealProps {
  time: string;
  description: string;
  within: boolean;
  onPress?: () => void;
}

export function Meal ({
  time,
  description,
  within,
  onPress
}: MealProps) {
  return (
    <Container onPress={onPress}>
      <Time>{time}</Time>
      <Line />
      <Description>{description}</Description>
      <Status within={within} />
    </Container>
  );
}
