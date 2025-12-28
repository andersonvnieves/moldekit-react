import type { MkUserAvatarProps } from "./MkUserAvatar.props.ts";

function MkUserAvatar({ initials }: MkUserAvatarProps) {
  const baseStyle = [
    "w-[40px] h-[40px] min-w-[40px] min-h-[40px] p-1",
    "transition-all duration-300 cursor-pointer duration-200",
    "bg-neutral-100 hover:bg-neutral-200",
    "border-2 border-neutral-300 rounded-full",
    "flex items-center justify-center",
  ].join(" ");

  return (
    <div className={baseStyle}>
      <span className={"text-neutral-700 font-bold text-base"}>
        {initials.substring(0, 2)}
      </span>
    </div>
  );
}

export default MkUserAvatar;
