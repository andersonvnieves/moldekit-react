import type { MkNavListProps } from "./MkNavList.props.ts";
import { DynamicIcon } from "lucide-react/dynamic";

function MkNavList({ data, className }: MkNavListProps) {
  return (
    <nav>
      <ul className={className}>
        {data.map((item) => (
          <li
            className={"flex flex-row flex-wrap justify-center p-[10px] gap-1"}
          >
            <DynamicIcon
              name={item.iconName}
              size={20}
              color={"var(--color-neutral-600)"}
            />
            <span className={"mk-caption"}>{item.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MkNavList;
