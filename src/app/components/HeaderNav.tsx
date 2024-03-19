import { Header } from 'grommet';
import type { HeaderExtendedProps } from 'grommet';

export const HeaderNav = (props: HeaderExtendedProps) => (
  <Header
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    {...props}
  />
);
