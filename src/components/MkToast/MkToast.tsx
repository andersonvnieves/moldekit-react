import type { MkToastProps } from "./MkToast.props.ts";
import {
  CircleCheckIcon,
  CircleXIcon,
  InfoIcon,
  TriangleAlertIcon,
} from "lucide-react";

import { type ReactNode, useEffect, useState } from "react";

function MkToast({ label, state = "info", leaving = false }: MkToastProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setMounted(true);
    });
  }, []);

  const animationStyles = `
    will-change-transform
    transition-[transform,opacity,filter]
    duration-500
    ease-[cubic-bezier(0.16,1,0.3,1)]

    ${
      mounted && !leaving
        ? "translate-y-0 opacity-100 scale-100 blur-0"
        : "-translate-y-3 opacity-0 scale-[0.98] blur-[6px]"
    }

    ${leaving ? "translate-x-6 opacity-0 scale-[0.96]" : ""}
  `;

  const baseStyles = [
    "z-[60]",
    "p-[8px]",
    "bg-neutral-50",
    "border border-neutral-200",
    "rounded-full",
    "flex flex-row items-center justify-between",
    "shadow-lg",

    animationStyles,
  ].join(" ");

  const labelStyles = "mk-label inline-block align-middle pl-2 leading-none";

  const stateStyle: Record<string, string> = {
    success: "text-success-800",
    warning: "text-warning-800",
    danger: "text-danger-800",
    info: "text-info-800",
  };

  const stateIcons: Record<string, ReactNode> = {
    success: (
      <CircleCheckIcon
        className="inline-block align-middle"
        color={"var(--color-success-700)"}
      />
    ),

    warning: (
      <TriangleAlertIcon
        className="inline-block align-middle"
        color={"var(--color-warning-700)"}
      />
    ),

    danger: (
      <CircleXIcon
        className="inline-block align-middle"
        color={"var(--color-danger-700)"}
      />
    ),

    info: (
      <InfoIcon
        className="inline-block align-middle"
        color={"var(--color-info-700)"}
      />
    ),
  };

  return (
    <div className={`${baseStyles}`}>
      <div className="inline-block align-middle">
        {stateIcons[state]}

        <span className={`${labelStyles} ${stateStyle[state]}`}>{label}</span>
      </div>
    </div>
  );
}

export default MkToast;
