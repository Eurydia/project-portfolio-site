import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { BulletList } from '#/components/common/bullet-list'
import { ShowMore } from '#/components/common/show-more'
import { ListCard, ListCardIndex } from '#/components/lists/list-card'
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
    <Stack spacing={3} useFlexGap>
      {visibleItems.map((item, index) => (
        <ListCard key={item.title}>
          <Stack spacing={3} useFlexGap>
            <ListCardIndex
              value={String(index + 1).padStart(2, '0')}
              label={item.period}
            />
            <Stack spacing={1} useFlexGap>
              <Typography variant="siteTitle">{item.title}</Typography>
            </Stack>
            <Typography variant="siteCopy" color="textSecondary">
              {item.organization}
            </Typography>
            <BulletList items={item.details} />
          </Stack>
        </ListCard>
      ))}
      <ShowMore
        hiddenCount={hiddenCount}
        nextVisibleCount={nextVisibleCount}
        onClick={showMore}
      />
    </Stack>
  )
}
