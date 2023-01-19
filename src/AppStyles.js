

import { makeStyles } from '@mui/styles';
import { createTheme} from '@mui/material/styles';

const theme = createTheme();

export default makeStyles(() => ({
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'column-reverse !important',
    },
  },
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(235, 70, 52)',
  },
  image: {
    marginLeft: '15px',
    marginBottom: '10px'
  },
}));

