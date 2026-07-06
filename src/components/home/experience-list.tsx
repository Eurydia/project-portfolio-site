import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { SectionLabel } from '#/components/common/section-label'
import { ShowMore } from '#/components/common/show-more'
import { ImageDisplay } from '#/components/media/image-display'
import { useVisibleItems } from '#/hooks/use-visible-items'
import type { FC } from 'react'
import type { HomeExperienceItem } from '#/types/home'

export const ExperienceList: FC<{
  items: readonly HomeExperienceItem[]
  initialVisibleItems?: number
  visibleItemIncrement?: number
}> = (props) => {
  const { hiddenCount, nextVisibleCount, showMore, visibleItems } =
    useVisibleItems(props.items, {
      initialVisibleItems: props.initialVisibleItems,
      visibleItemIncrement: props.visibleItemIncrement,
    })

  return (
    <Box sx={{ minInlineSize: 0 }}>
      <Stack divider={<Divider />} spacing={3} useFlexGap>
        {visibleItems.map((item) => (
          <Box key={item.title} sx={{ minInlineSize: 0 }}>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={3}
              sx={{ inlineSize: '100%', minInlineSize: 0 }}
            >
              <Grid size={{ xs: 12, md: 8 }} sx={{ minInlineSize: 0 }}>
                <Stack spacing={1.5} useFlexGap>
                  <Box>
                    <Typography sx={(theme) => theme.typography.siteTitle}>
                      {item.title}
                    </Typography>
                    <SectionLabel>{item.period}</SectionLabel>
                  </Box>

                  <Typography sx={(theme) => theme.typography.siteCopy}>
                    {item.organization}
                  </Typography>

                  <Stack spacing={0.75} useFlexGap>
                    {item.details.map((detail) => (
                      <Typography
                        key={detail}
                        sx={(theme) => ({
                          color: theme.palette.text.secondary,
                          ...theme.typography.siteFine,
                        })}
                      >
                        {detail}
                      </Typography>
                    ))}
                  </Stack>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }} sx={{ minInlineSize: 0 }}>
                <ImageDisplay label={item.title} src={item.imageSrc} />
              </Grid>
            </Grid>
          </Box>
        ))}
      </Stack>
      <ShowMore
        hiddenCount={hiddenCount}
        nextVisibleCount={nextVisibleCount}
        onClick={showMore}
      />
    </Box>
  )
}
