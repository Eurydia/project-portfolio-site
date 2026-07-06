import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { ShowMore } from '#/components/common/show-more'
import { ListCard, ListCardIndex } from '#/components/lists/list-card'
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
        <ListCard key={item.title}>
          <Stack spacing={3} useFlexGap>
            <ListCardIndex value={String(index + 1).padStart(2, '0')} />
            <Typography variant="siteTitle">{item.title}</Typography>
            <Typography variant="siteFine" color="textSecondary">
              {item.body}
            </Typography>
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
