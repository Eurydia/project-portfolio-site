import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { FC, ReactNode } from 'react'

export const ListCard: FC<{ children: ReactNode }> = (props) => {
  return (
    <Paper
      variant="outlined"
      sx={(theme) => ({
        position: 'relative',
        overflow: 'hidden',
        padding: theme.spacing(3),
        backgroundColor: theme.palette.background.paper,
        transition: theme.transitions.create(['box-shadow']),
        '::before': {
          content: '""',
          position: 'absolute',
          insetBlockStart: 0,
          insetInlineStart: 0,
          inlineSize: theme.spacing(1.5),
          blockSize: theme.spacing(1.5),
          borderBlockStart: `2px solid ${theme.palette.text.primary}`,
          borderInlineStart: `2px solid ${theme.palette.text.primary}`,
        },
        ':hover': {
          boxShadow: `${theme.spacing(0.5)} ${theme.spacing(0.5)} 0 ${theme.palette.text.primary}`,
        },
      })}
    >
      {props.children}
    </Paper>
  )
}

export const ListCardIndex: FC<{ value: string; label?: ReactNode }> = (
  props,
) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      useFlexGap
      sx={{
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="siteSmall" color="textSecondary">
        {props.value}
      </Typography>
      <Box
        sx={(theme) => ({
          flex: 1,
          borderBlockStart: `1px solid ${theme.palette.divider}`,
        })}
      />
      {props.label && (
        <Typography variant="siteSmall" color="textSecondary">
          {props.label}
        </Typography>
      )}
    </Stack>
  )
}
