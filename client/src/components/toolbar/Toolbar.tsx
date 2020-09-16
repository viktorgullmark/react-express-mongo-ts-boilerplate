import { Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MuiToolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useStores } from '../../store';
import useStyles from './Toolbar.styles';

interface IProps {
  drawerEnabled?: boolean;
}

const Toolbar: React.FC<IProps> = ({ drawerEnabled }) => {
  const { layoutStore, authStore, routerStore } = useStores();
  const { t } = useTranslation();
  const classes = useStyles();

  const { toggleSideNavOpen } = layoutStore;
  const { logout } = authStore;
  const { redirect } = routerStore;

  return (
    <AppBar
      position='fixed'
      className={clsx(classes.appBar, {
        [classes.drawerEnabled]: drawerEnabled,
      })}
    >
      <MuiToolbar>
        {drawerEnabled && (
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={() => toggleSideNavOpen()}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant='h6' noWrap className={classes.title}>
          {t('title.main')}
        </Typography>
        {drawerEnabled ? (
          <Button color='inherit' onClick={() => logout()}>
            {t('label.logout')}
          </Button>
        ) : (
          <>
            <Button color='inherit' onClick={() => redirect('/register')}>
              {t('label.register')}
            </Button>
            <Button color='inherit' onClick={() => redirect('/login')}>
              {t('label.login')}
            </Button>
          </>
        )}
      </MuiToolbar>
    </AppBar>
  );
};

export default observer(Toolbar);
