import Stack from '@mui/material/Stack'
import { ShowMore } from '#/components/common/show-more'
import { ListCard } from '#/components/lists/list-card'
import { useVisibleItems } from '#/hooks/use-visible-items'
import type { FC } from 'react'
import type { CredentialItem } from '#/types/credential'

export const CredentialList: FC<{
  items: readonly CredentialItem[]
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
          title={item.title}
          body={item.body}
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
