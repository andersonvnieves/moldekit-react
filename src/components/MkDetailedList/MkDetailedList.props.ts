import type { MkListItemData } from "../MkList/MkListItem/MkListItem.data.ts";
import type { MkDetailedListItemData } from "./MkDetailedListItem/MkDetailedListItem.data.ts";

export interface MkDetailedListProps {
  className?: string;
  data: MkDetailedListItemData[];
  onClick?: (item: MkListItemData) => void;
}
