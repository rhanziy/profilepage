import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';

const theme = createGlobalTheme(':root', {
  fontFamily: {
    pretendard: `var(--font-pretendard)`,
  },
  fontSize: {
    xLarge: '24px',
    large: '20px',
    sLarge: '18px',
    regular: '16px',
    small: '14px',
    xSmall: '12px',
  },
  device: {
    desktop: '1024px',
    tablet: '768px',
    mobile: '480px',
    smallMobile: '380px',
  },
  margin: {
    xSmall: '.3rem',
    small: '.5rem',
    base: '1rem',
    medium: '1.5rem',
    large: '2rem',
    xLarge: '3rem',
    negativeSmall: '-.5rem',
    negativeBase: '-1rem',
  },
  padding: {
    small: '.5rem',
    base: '1rem',
    medium: '1.5rem',
    large: '2rem',
    xLarge: '3rem',
    xxLarge: '5rem',
  },
});

globalStyle('*', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});

globalStyle('p', {
  fontSize: theme.fontSize.regular,
  lineHeight: 1.5,
  margin: 0,
});
globalStyle('h2', {
  fontSize: theme.fontSize.large,
  padding: '16px 0',
});
globalStyle('h1,h2,h3,h4,h5,h6', {
  fontWeight: 600,
});

globalStyle('body', {
  width: '100%',
  minWidth: '-webkit-fill-available',
  WebkitTextSizeAdjust: '100%',
  display: 'flex',
  flexDirection: 'column',
  color: '#444',
  fontSize: theme.fontSize.regular,
});

export default theme;
