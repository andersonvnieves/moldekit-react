import type { MkListProps } from "./MkList.props.ts";
import MkListItem from "./MkListItem/MkListItem.tsx";
import { MkDivider } from "../MkDivider";
import type { MkListItemData } from "./MkListItem/MkListItem.data.ts";

function MkList({ className, data, onClick }: MkListProps) {
  //TODO: Nao esquecer do empty state
  return (
    <div className={className}>
      {data.map((element: MkListItemData, index: number) => (
        <div key={index}>
          <MkListItem data={element} onClick={() => onClick?.(element)} />
          {index < data.length - 1 && <MkDivider />}
        </div>
      ))}
    </div>
  );
}

export default MkList;
