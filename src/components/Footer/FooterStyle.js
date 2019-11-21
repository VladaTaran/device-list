import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    footer: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      marginTop: 'auto',
      flex: '1 100%',
      '& div': {
        padding: 0,
      },
    },
  }),
);

export default useStyles;
