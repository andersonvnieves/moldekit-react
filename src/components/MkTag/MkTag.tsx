import type { MkTagProps } from "./MkTag.props.ts";
import { MkButton } from "../MkButton";

function MkTag({ data, onRemove, className }: MkTagProps) {
  const baseStyle = "w-full p-[2px] flex flex-row gap-1";
  const tagStyle = [
    "flex items-center justify-center",
    "px-[10px] py-[5px] rounded-[5px] flex-1 sm:flex-none gap-2",
    "cursor-pointer transition-all duration-300",
    "bg-[var(--surface-level1)] hover:bg-neutral-200",
    "border border-[var(--border-default)]",
  ].join(" ");

  const handleRemove = (id: string) => (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onRemove) {
      onRemove(id);
    }
  };

  return (
    <div className={`${baseStyle} ${className}`}>
      {data.map((tag) => (
        <div className={`${tagStyle}`}>
          <span className="mk-label">{tag.label}</span>
          <MkButton
            iconOnly={true}
            iconName={"x"}
            variant={"transparent"}
            onClick={handleRemove(tag.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default MkTag;
