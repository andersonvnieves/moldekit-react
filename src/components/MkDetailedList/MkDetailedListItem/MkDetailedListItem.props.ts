import type { MkDetailedListItemData } from "./MkDetailedListItem.data.ts";

export interface MkDetailedListItemProps {
  data: MkDetailedListItemData;
  onClick?: () => void;
}
