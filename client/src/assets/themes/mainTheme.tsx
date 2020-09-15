import { blueGrey } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

export default function mainTheme() {
  return createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        light: blueGrey[500],
        main: blueGrey[800],
        dark: blueGrey[900],
      },
    },
  });
}
