import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import type { CSSProperties } from 'react'

declare module '@mui/material/styles' {
  interface TypographyVariants {
    siteAction: CSSProperties
    siteCopy: CSSProperties
    siteDisplay: CSSProperties
    siteFine: CSSProperties
    siteLink: CSSProperties
    siteMark: CSSProperties
    siteSection: CSSProperties
    siteSmall: CSSProperties
    siteTitle: CSSProperties
  }

  interface TypographyVariantsOptions {
    siteAction?: CSSProperties
    siteCopy?: CSSProperties
    siteDisplay?: CSSProperties
    siteFine?: CSSProperties
    siteLink?: CSSProperties
    siteMark?: CSSProperties
    siteSection?: CSSProperties
    siteSmall?: CSSProperties
    siteTitle?: CSSProperties
  }
}

export const theme = responsiveFontSizes(
  createTheme({
    colorSchemes: {
      light: {
        palette: {
          background: {
            default: '#fbfaf7',
            paper: '#ffffff',
          },
          primary: {
            main: '#7c3aed',
          },
          divider: 'rgba(124, 58, 237, 0.24)',
          text: {
            primary: '#1f1d24',
            secondary: '#6a6474',
          },
        },
      },
      dark: {
        palette: {
          background: {
            default: '#111018',
            paper: '#191724',
          },
          primary: {
            main: '#d8b4fe',
          },
          divider: 'rgba(216, 180, 254, 0.26)',
          text: {
            primary: '#f5f3ff',
            secondary: '#c9c1dd',
          },
        },
      },
    },
    shape: {
      borderRadius: 8,
    },
    typography: {
      fontFamily:
        'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      fontWeightBold: 760,
      siteAction: {
        fontWeight: 760,
      },
      siteCopy: {
        letterSpacing: 0,
        lineHeight: 1.7,
      },
      siteDisplay: {
        fontSize: '3.5rem',
        fontWeight: 760,
        letterSpacing: 0,
        lineHeight: 1,
      },
      siteFine: {
        fontSize: '0.875rem',
        letterSpacing: 0,
        lineHeight: 1.65,
      },
      siteLink: {
        fontWeight: 760,
        letterSpacing: 0,
        lineHeight: 1.4,
      },
      siteMark: {
        fontSize: '0.75rem',
        fontWeight: 760,
        letterSpacing: 0,
        lineHeight: 1.6,
        textTransform: 'uppercase',
      },
      siteSection: {
        fontSize: '2rem',
        fontWeight: 760,
        letterSpacing: 0,
        lineHeight: 1.12,
      },
      siteSmall: {
        fontSize: '0.75rem',
        letterSpacing: 0,
        lineHeight: 1.6,
      },
      siteTitle: {
        fontSize: '1.25rem',
        fontWeight: 760,
        letterSpacing: 0,
        lineHeight: 1.2,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            minHeight: '100%',
          },
          body: {
            minHeight: '100%',
          },
          '#root': {
            minHeight: '100%',
          },
        },
      },
    },
  }),
  {
    variants: [
      'siteDisplay',
      'siteFine',
      'siteMark',
      'siteSection',
      'siteSmall',
      'siteTitle',
    ],
  },
)
