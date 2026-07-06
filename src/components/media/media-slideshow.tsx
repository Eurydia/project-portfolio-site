import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { ImageDisplay } from '#/components/media/image-display'
import { useState } from 'react'
import type { FC } from 'react'
import type { MediaItem } from '#/types/media'

export const MediaSlideshow: FC<{ items: readonly MediaItem[] }> = (props) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = props.items[activeIndex]

  const handlePrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? props.items.length - 1 : currentIndex - 1,
    )
  }

  const handleNext = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === props.items.length - 1 ? 0 : currentIndex + 1,
    )
  }

  if (!activeItem) {
    return null
  }

  return (
    <Stack spacing={1.5} useFlexGap>
      <ImageDisplay label={activeItem.label} src={activeItem.src} />
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
          {activeIndex + 1} / {props.items.length} / {activeItem.label}
        </Typography>
        {props.items.length > 1 && (
          <Stack direction="row" spacing={0.5} useFlexGap>
            <Tooltip title="Previous image">
              <IconButton color="primary" onClick={handlePrevious}>
                <ChevronLeftIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Next image">
              <IconButton color="primary" onClick={handleNext}>
                <ChevronRightIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        )}
      </Stack>
    </Stack>
  )
}
