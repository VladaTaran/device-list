import { createMuiTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#dfbe2f',
    },
    secondary: {
      main: '#02aed6',
    },
  },
  status: {
    danger: orange[500],
  }
});

export const getTableTheme = () => ({
  ...outerTheme,
  overrides: {
    MUIDataTableBodyCell: {
      root: {
        padding: '10px',
        lineHeight: 1
      }
    }
  }
});

export default outerTheme;
