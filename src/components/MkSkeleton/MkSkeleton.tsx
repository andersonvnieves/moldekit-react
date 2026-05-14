import type { MkSkeletonProps } from "./MkSkeleton.props.ts";

function MkSkeleton({ className = "" }: MkSkeletonProps) {
  const baseStyles = "relative overflow-hidden";
  const animationStyles = [
    "bg-[var(--color-neutral-300)]",
    "before:absolute",
    "before:inset-0",
    "before:-translate-x-full",
    "before:animate-[shimmer_1s_infinite]",
    "before:bg-gradient-to-r",
    "before:from-transparent",
    "before:via-white/40",
    "before:to-transparent",
  ].join(" ");

  return (<div className={`${baseStyles} ${animationStyles} ${className}`}/> );
}

export default MkSkeleton;
