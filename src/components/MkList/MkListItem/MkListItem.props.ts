import type { MkListItemData } from "./MkListItem.data.ts";

export interface MkListItemProps {
  data: MkListItemData;
  onClick?: () => void;
}
