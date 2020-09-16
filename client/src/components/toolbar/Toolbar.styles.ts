import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { drawerWidth } from '../responsive-drawer/ResponsiveDrawer.styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: '100%',
      },
      flexGrow: 1,
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
    title: { flexGrow: 1 },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
  })
);

export default useStyles;
