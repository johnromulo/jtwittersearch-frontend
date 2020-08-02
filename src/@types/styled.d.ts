import 'styled-components';

declare module 'react-load-image';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      natural: string;
      suport: string;
    };
  }
}
