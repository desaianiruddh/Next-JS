import { roboto } from '@theme-ui/presets';

const theme = {
  ...roboto,
  containers: {
    page: {
      width: '100%',
      maxWidth: '960px',
      m: 0,
      mx: 'auto',
    },
    pageContent: {
      textAlign: 'center',
      fontSize: '4',
      color: 'gray',
      mt: '100px',
    },
    button: {
      bg: '#000',
      mt: '10px',
      p: '10px',
      borderRadius: '10px',
    },
  },
  styles: {
    ...roboto.styles,
  },
};

export default theme;
