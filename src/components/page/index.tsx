import { ReactNode } from 'react';
import { Colors, Container, Content } from './styles';

interface PageProps {
  color?: Colors;
  header?: ReactNode;
  children: ReactNode;
}

export function Page ({
  color = 'gray',
  header,
  children
}: PageProps) {
  return (
    <Container color={color}>
      {header && (header)}
      <Content color={color}>
        {children}
      </Content>
    </Container>
  );
}
