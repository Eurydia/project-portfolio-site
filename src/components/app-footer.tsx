import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { alpha } from '@mui/material/styles'
import type { FC, ReactNode } from 'react'

export const AppFooter: FC = () => {
  return (
    <Box
      component="footer"
      sx={(theme) => ({
        bgcolor: alpha(theme.palette.primary.main, 0.06),
        borderTop: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
      })}
    >
      <Container
        maxWidth="lg"
        sx={(theme) => ({
          px: {
            xs: theme.spacing(2.5),
            sm: theme.spacing(4),
          },
          py: {
            xs: theme.spacing(4),
            md: theme.spacing(5),
          },
        })}
      >
        <Stack spacing={3} useFlexGap>
          <Stack
            direction={{
              xs: 'column',
              md: 'row',
            }}
            spacing={{
              xs: 2.5,
              md: 4,
            }}
            useFlexGap
            sx={{
              alignItems: {
                xs: 'flex-start',
                md: 'flex-end',
              },
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Typography
                variant="overline"
                component="p"
                sx={(theme) => ({
                  color: theme.palette.primary.main,
                })}
              >
                Thanakorn Phuttharaksa
              </Typography>
              <Typography
                variant="body2"
                sx={(theme) => ({
                  color: theme.palette.text.secondary,
                })}
              >
                Portfolio and project notes.
              </Typography>
            </Box>

            <Stack
              direction="row"
              spacing={2}
              useFlexGap
              sx={{
                flexWrap: 'wrap',
              }}
            >
              <FooterLink href="mailto:tphuttharaksabusiness@gmail.com">
                Email
              </FooterLink>
              <FooterLink
                href="https://github.com/Eurydia"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </FooterLink>
            </Stack>
          </Stack>

          <Box
            sx={(theme) => ({
              borderTop: `1px solid ${theme.palette.divider}`,
              pt: theme.spacing(2),
            })}
          >
            <Typography
              variant="caption"
              sx={(theme) => ({
                color: theme.palette.text.secondary,
              })}
            >
              {`© ${new Date().getFullYear()} Thanakorn Phuttharaksa`}
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

const FooterLink: FC<{
  href: string
  target?: string
  rel?: string
  children: ReactNode
}> = (props) => {
  return (
    <Link
      href={props.href}
      target={props.target}
      rel={props.rel}
      underline="always"
      variant="subtitle2"
      sx={(theme) => ({
        color: theme.palette.text.primary,
      })}
    >
      {props.children}
    </Link>
  )
}
