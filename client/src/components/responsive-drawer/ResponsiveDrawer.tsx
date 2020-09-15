import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useTheme } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useStores } from '../../store';
import useStyles from './ResponsiveDrawer.styles';

const ResponsiveDrawer: React.FC = ({ children }) => {
  const { layoutStore } = useStores();
  const classes = useStyles();
  const theme = useTheme();
  const location = useLocation();

  const { toggleSideNavOpen, sideNavOpen } = layoutStore;

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button key={'Home'} selected={location.pathname === '/'}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={'Home'} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <nav className={classes.drawer} aria-label='mailbox folders'>
        <Hidden smUp implementation='css'>
          <Drawer
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={sideNavOpen}
            onClose={() => toggleSideNavOpen()}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant='permanent'
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export default observer(ResponsiveDrawer);
