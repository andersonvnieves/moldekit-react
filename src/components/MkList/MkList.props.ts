import type { MkListItemData } from "./MkListItem/MkListItem.data.ts";

export interface MkListProps {
  className?: string;
  data: MkListItemData[];
  onClick?: (item: MkListItemData) => void;
}
