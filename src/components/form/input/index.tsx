import { TextInputProps } from 'react-native';
import { Container, Field, Label } from './styles';

interface InputProps extends TextInputProps {
  label: string;
  multiline?: boolean;
}

export function Input ({ label, multiline = false, ...rest }: InputProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <Field multiline={multiline} {...rest} />
    </Container>
  );
}
