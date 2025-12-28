import type { MkProgressBarProps } from "./MkProgressBar.props.ts";

function MkProgressBar({ percentage }: MkProgressBarProps) {
  const clampedPercentage = Math.min(Math.max(percentage, 0), 100);

  return (
    <div className="w-full h-[10px] bg-neutral-200 rounded-full overflow-hidden">
      <div
        className="h-[10px] bg-primary-400 rounded-full transition-all duration-300 block"
        style={{
          width: `${clampedPercentage}%`,
          minHeight: "10px",
        }}
      ></div>
    </div>
  );
}

export default MkProgressBar;
