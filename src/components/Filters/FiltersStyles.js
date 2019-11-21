import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        margin: 0
      }
    },
    root: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: '20px 20px 0',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        margin: 0
      }
   },
   selectBox: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: 400,
      width: '100%'
    }
   },
   label: {
     fontSize: 10,
     paddingBottom: 5,
   },
   select: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    border: 'none',
    borderBottom: '1px solid #e8e8e8',
    outline: 'none',
    fontSize: 12,
   },
   option: {
    borderRadius: 5,
   },
   button: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 20,
    },
     width: 60,
     height: 30,
     marginRight: 20,
     fontSize: 12,
   }
  }),
);

export default useStyles;
