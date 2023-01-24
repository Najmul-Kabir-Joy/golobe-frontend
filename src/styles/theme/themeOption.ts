import { createTheme } from '@mui/material/styles';
import { COLORS } from '@/constants/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.MINT,
    },
    secondary: {
      main: COLORS.SALMON,
    },
    error: {
      main: COLORS.ERROR,
    },
  },
});

export default theme;
