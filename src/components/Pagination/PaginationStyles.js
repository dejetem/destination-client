import { makeStyles } from '@mui/styles';
import { createTheme} from '@mui/material/styles';

const theme = createTheme();

export default makeStyles(() => ({
  ul: {
    justifyContent: 'space-around',
  },
}));