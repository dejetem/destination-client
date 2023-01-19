import { makeStyles } from '@mui/styles';
import { createTheme} from '@mui/material/styles';

const theme = createTheme();

export default makeStyles(() => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'rgba(235, 70, 52) !important',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: '24px 0px 16px !important',
    // marginBottom: '10px !important'
  },
  googleButton: {
    marginBottom: '16px !important',
    width: '100%',
    justifyContent: 'center',
    display: 'flex',
  },
}));