import { cyan } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

export default function mainTheme() {
  return createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        light: cyan[500],
        main: cyan[800],
        dark: cyan[900],
      },
    },
  });
}
