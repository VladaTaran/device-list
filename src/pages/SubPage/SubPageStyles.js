import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    notImplemented: {
      color: theme.palette.grey[900],
      display: 'flex',
      height: '100%',
      flexDirection: 'column-reverse',
      alignItems: 'center'
    },
  }),
);

export default useStyles;
