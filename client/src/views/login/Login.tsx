import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import PublicWrapper from '../../components/public-wrapper';
import SimpleField from '../../components/simple-field';
import IUser from '../../interfaces/user';
import { useStores } from '../../store';
import { useStyles } from './Login.styles';

const Login: React.FC = () => {
  const { authStore } = useStores();
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <PublicWrapper>
      <Paper className={classes.paper}>
        <Grid item xs={12}>
          <Typography variant='h5' component='h1' className={classes.title}>
            {t('title.login')}
          </Typography>
          <Formik
            initialValues={{
              username: '',
              password: '',
            }}
            onSubmit={(values: IUser) => {
              authStore.login(values);
            }}
          >
            <Form>
              <SimpleField
                name='username'
                type='text'
                label={t('label.username')}
                required
                autoFocus
              />
              <SimpleField
                name='password'
                type='password'
                label={t('label.password')}
                required
                autoFocus
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submitBtn}
              >
                {t('label.submit')}
              </Button>
            </Form>
          </Formik>
        </Grid>
      </Paper>
    </PublicWrapper>
  );
};

export default Login;
