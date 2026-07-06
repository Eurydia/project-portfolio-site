import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { BulletList } from '#/components/common/bullet-list'
import { SectionLabel } from '#/components/common/section-label'
import { MediaSlideshow } from '#/components/media/media-slideshow'
import { useState } from 'react'
import type { FC } from 'react'
import type { MediaItem } from '#/types/media'

export const ListCard: FC<{
  index: string
  label?: string
  title: string
  body?: string
  bullets?: readonly string[]
  metaLabel?: string
  metaText?: string
  readMore?: {
    title: string
    body?: string
    bullets?: readonly string[]
    media?: readonly MediaItem[]
    meta?: readonly {
      label: string
      value: string
    }[]
  }
}> = (props) => {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false)

  const handleReadMoreOpen = () => {
    setIsReadMoreOpen(true)
  }

  const handleReadMoreClose = () => {
    setIsReadMoreOpen(false)
  }

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
          borderBlockStart: `2px solid ${theme.palette.primary.main}`,
          borderInlineStart: `2px solid ${theme.palette.primary.main}`,
        },
        ':hover': {
          boxShadow: `${theme.spacing(0.5)} ${theme.spacing(0.5)} 0 ${theme.palette.primary.main}`,
        },
      })}
    >
      <Stack spacing={3} useFlexGap>
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
            {props.index}
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
        <Typography variant="siteTitle">{props.title}</Typography>
        {props.body && (
          <Typography variant="siteCopy" color="textSecondary">
            {props.body}
          </Typography>
        )}
        {props.bullets && <BulletList items={props.bullets} />}
        {props.metaLabel && props.metaText && (
          <Stack
            spacing={1}
            useFlexGap
            sx={(theme) => ({
              borderTop: `1px solid ${theme.palette.divider}`,
              paddingTop: theme.spacing(1.75),
            })}
          >
            <SectionLabel>{props.metaLabel}</SectionLabel>
            <Typography variant="siteFine" color="textSecondary">
              {props.metaText}
            </Typography>
          </Stack>
        )}
        {props.readMore && (
          <Box>
            <Button
              disableRipple
              variant="text"
              size="small"
              color="primary"
              endIcon={<ArrowForwardIcon />}
              onClick={handleReadMoreOpen}
            >
              Read more
            </Button>
          </Box>
        )}
      </Stack>
      {props.readMore && (
        <Dialog
          open={isReadMoreOpen}
          onClose={handleReadMoreClose}
          fullWidth
          maxWidth={props.readMore.media ? 'md' : 'sm'}
        >
          <DialogTitle>
            <Typography variant="siteTitle">{props.readMore.title}</Typography>
          </DialogTitle>
          <DialogContent>
            <Stack spacing={3} useFlexGap>
              {props.readMore.media && (
                <MediaSlideshow items={props.readMore.media} />
              )}
              {props.readMore.body && (
                <Typography variant="siteCopy" color="textSecondary">
                  {props.readMore.body}
                </Typography>
              )}
              {props.readMore.bullets && (
                <BulletList items={props.readMore.bullets} />
              )}
              {props.readMore.meta && (
                <Stack spacing={2} useFlexGap>
                  {props.readMore.meta.map((item) => (
                    <Stack key={item.label} spacing={0.5} useFlexGap>
                      <SectionLabel>{item.label}</SectionLabel>
                      <Typography variant="siteFine" color="textSecondary">
                        {item.value}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              )}
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button
              disableRipple
              variant="text"
              color="primary"
              onClick={handleReadMoreClose}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Paper>
  )
}
