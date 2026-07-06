import Stack from '@mui/material/Stack'
import { ShowMore } from '#/components/common/show-more'
import { ListCard } from '#/components/lists/list-card'
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
        <ListCard
          key={item.title}
          index={String(index + 1).padStart(2, '0')}
          label={item.period}
          title={item.title}
          body={item.organization}
          bullets={item.details}
        />
      ))}
      <ShowMore
        hiddenCount={hiddenCount}
        nextVisibleCount={nextVisibleCount}
        onClick={showMore}
      />
    </Stack>
  )
}
