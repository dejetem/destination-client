import { makeStyles } from '@mui/styles';
import { createTheme} from '@mui/material/styles';

const theme = createTheme();

export default makeStyles(() => ({
    commentsOuterContainer: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    commentsInnerContainer: {
      height: '200px',
      overflowY: 'auto',
      marginRight: '30px',
    },
  }));