import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(5, 5),
    },
    submitBtn: {
      marginTop: theme.spacing(2),
    },
    title: {
      marginBottom: theme.spacing(2),
      textTransform: 'uppercase'
    },
  })
);
