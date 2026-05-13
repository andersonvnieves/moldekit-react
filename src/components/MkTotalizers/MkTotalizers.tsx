import type { MkTotalizersProps } from "./MkTotalizers.props.ts";
import { MkCard } from "../MkCard";
import MkDeltaIndicator from "../MkDeltaIndicator/MkDeltaIndicator.tsx";

function MkTotalizers({ label, value, delta, className }: MkTotalizersProps) {
  const headerStyles =
    "flex flex-item align-center justify-between w-full h-[30px]";

  return (
    <MkCard className={className}>
      <div className={headerStyles}>
        <label className={"mk-label"}>{label}</label>
        {delta ? (
          <MkDeltaIndicator
            value={"8,90%"}
            sentiment={"positive"}
            arrow={"up"}
          ></MkDeltaIndicator>
        ) : null}
      </div>
      <p className={"mk-display-number"}>{value}</p>
    </MkCard>
  );
}

export default MkTotalizers;
