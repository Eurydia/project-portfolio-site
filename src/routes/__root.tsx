import '@fontsource-variable/inter/wght.css'
import '@fontsource-variable/stix-two-text/wght.css'
import '@fontsource-variable/stix-two-text/wght-italic.css'
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import CssBaseline from '@mui/material/CssBaseline'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../theme'
import { GridBackground } from '#/components/layout/grid-background'
import type { ReactNode } from 'react'

const siteUrl = 'https://eurydia.work/'
const siteTitle = 'Thanakorn Phuttharaksa | Portfolio'
const siteDescription =
  'Software portfolio for Thanakorn Phuttharaksa: maintained systems, finished projects, research notes, experience, education, and certifications.'
const siteImage = `${siteUrl}logo512.png`
const structuredData = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Thanakorn Phuttharaksa',
  url: siteUrl,
  image: siteImage,
  sameAs: ['https://github.com/eurydia'],
  knowsAbout: [
    'React',
    'TypeScript',
    'software engineering',
    'educational tools',
    'research software',
    'web systems',
  ],
})

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: siteTitle,
      },
      {
        name: 'description',
        content: siteDescription,
      },
      {
        name: 'author',
        content: 'Thanakorn Phuttharaksa',
      },
      {
        name: 'robots',
        content: 'index, follow',
      },
      {
        name: 'theme-color',
        content: '#fbfaf7',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: siteUrl,
      },
      {
        property: 'og:title',
        content: siteTitle,
      },
      {
        property: 'og:description',
        content: siteDescription,
      },
      {
        property: 'og:image',
        content: siteImage,
      },
      {
        property: 'og:site_name',
        content: 'Thanakorn Phuttharaksa',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: siteTitle,
      },
      {
        name: 'twitter:description',
        content: siteDescription,
      },
      {
        name: 'twitter:image',
        content: siteImage,
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: siteUrl,
      },
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
      {
        rel: 'apple-touch-icon',
        href: '/logo192.png',
      },
      {
        rel: 'manifest',
        href: '/manifest.json',
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: structuredData,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument(props: { children: ReactNode }) {
  return (
    <html lang={'en'} suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <InitColorSchemeScript attribute="class" defaultMode="system" />
        <ThemeProvider theme={theme} defaultMode="light">
          <CssBaseline enableColorScheme />
          <GridBackground>{props.children}</GridBackground>
          <TanStackDevtools
            config={{
              position: 'bottom-right',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  )
}
