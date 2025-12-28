import type { MkListProps } from "./MkList.props.ts";
import MkListItem from "./MkListItem/MkListItem.tsx";
import type { MkListItemProps } from "./MkListItem/MkListItem.props.ts";

function MkList({ className, data }: MkListProps) {
  //Nao esquecer do empty state
  return (
    <div className={className}>
      {data.map((element: MkListItemProps) => (
        <MkListItem
          title={element.title}
          description={element.description}
          numericValue={element.numericValue}
        />
      ))}
    </div>
  );
}

export default MkList;
