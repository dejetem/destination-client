import { makeStyles } from '@mui/styles';
import { createTheme} from '@mui/material/styles';

const theme = createTheme();

export default makeStyles(() => ({
  [theme.breakpoints.down('sm')]: {
    heading: {
      display: 'none'
    },
    profile:{
       width: "150px !important"
    },
    userName:{
      display: 'none !important'
    }
  },
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex !important',
    flexDirection: 'row !important',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },
  heading: {
    color: 'rgba(235, 70, 52)',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
    marginBottom: '10px'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'black'
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none'
  },
  purple: {
    textDecoration: 'none',
  },
}));