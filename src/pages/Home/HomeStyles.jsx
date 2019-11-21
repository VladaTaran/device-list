import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      overflowX:'auto',
    },
    notImplemented: {
      color: theme.palette.grey[900],
      display: 'flex',
      height: '100%',
      flexDirection: 'column-reverse',
      alignItems: 'center'
    },
    filterContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '5px 10px'
    },
    table: {
      minWidth: 450,
      width: '100%',
    },
    loader: {
      position: 'absolute',
      top: '50%',
      left: '50%',
    },
  }),
);

export default useStyles;
