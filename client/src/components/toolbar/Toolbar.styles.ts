import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { drawerWidth } from '../responsive-drawer/ResponsiveDrawer.styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: '100%',
      },
    },
    drawerEnabled: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
  })
);

export default useStyles;
