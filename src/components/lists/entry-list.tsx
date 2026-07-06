import Stack from '@mui/material/Stack'
import { ShowMore } from '#/components/common/show-more'
import { ListCard } from '#/components/lists/list-card'
import { useVisibleItems } from '#/hooks/use-visible-items'
import type { FC } from 'react'
import type { HomeEntryItem } from '#/types/home'

export const EntryList: FC<{
  items: readonly HomeEntryItem[]
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
          body={item.intro}
          bullets={item.notes}
          metaLabel="Stack"
          metaText={item.tools}
          readMore={{
            title: item.title,
            body: item.detail,
            bullets: item.details,
            media: item.media,
            meta: [
              {
                label: 'Stack',
                value: item.tools,
              },
            ],
          }}
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
