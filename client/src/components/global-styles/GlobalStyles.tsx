import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  '@global': {
    'html, body': {
      height: '100%',
      overflow: 'hidden',
    },
    '#root': {
      height: '100%',
    },
  },
}));

const GlobalStyles: React.FC = () => {
  useStyles();
  return null;
};

export default GlobalStyles;
