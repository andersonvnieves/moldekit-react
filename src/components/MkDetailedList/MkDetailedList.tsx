import type { MkDetailedListProps } from "./MkDetailedList.props.ts";
import MkDetailedListItem from "./MkDetailedListItem/MkDetailedListItem.tsx";
import type { MkDetailedListItemData } from "./MkDetailedListItem/MkDetailedListItem.data.ts";

function MkDetailedList({ className, data, onClick }: MkDetailedListProps) {
  //Nao esquecer do empty state
  const baseStyle = "flex flex-col gap-2";
  return (
    <div className={`${baseStyle} ${className}`}>
      {data.map((element: MkDetailedListItemData, index: number) => (
        <div key={index}>
          <MkDetailedListItem
            data={element}
            onClick={() => onClick?.(element)}
          />
        </div>
      ))}
    </div>
  );
}

export default MkDetailedList;
