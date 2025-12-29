import type { MkDetailedListProps } from "./MkDetailedList.ts";
import MkDetailedListItem from "./MkDetailedListItem/MkDetailedListItem.tsx";
import type { MkDetailedListItemProps } from "./MkDetailedListItem/MkDetailedListItem.props.ts";

function MkDetailedList({ className, data }: MkDetailedListProps) {
  //Nao esquecer do empty state
  const baseStyle = "flex flex-col gap-2";
  return (
    <div className={`${baseStyle} ${className}`}>
      {data.map((element: MkDetailedListItemProps, index: number) => (
        <div key={index}>
          <MkDetailedListItem
            title={element.title}
            description={element.description}
            numericValue={element.numericValue}
            icon={element.icon}
          />
        </div>
      ))}
    </div>
  );
}

export default MkDetailedList;
