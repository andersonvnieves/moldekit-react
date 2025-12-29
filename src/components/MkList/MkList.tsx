import type { MkListProps } from "./MkList.props.ts";
import MkListItem from "./MkListItem/MkListItem.tsx";
import type { MkListItemProps } from "./MkListItem/MkListItem.props.ts";
import { MkDivider } from "../MkDivider";

function MkList({ className, data }: MkListProps) {
  //Nao esquecer do empty state
  return (
    <div className={className}>
      {data.map((element: MkListItemProps, index: number) => (
        <div key={index}>
          <MkListItem
            title={element.title}
            description={element.description}
            numericValue={element.numericValue}
            status={element.status}
          />
          {index < data.length - 1 && <MkDivider />}
        </div>
      ))}
    </div>
  );
}

export default MkList;
