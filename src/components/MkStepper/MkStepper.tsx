import type { MkStepperProps } from "./MkStepper.props.ts";

function MkStepper({ steps, currentStep }: MkStepperProps) {
  const validSteps = Math.max(1, steps);
  const validCurrentStep = Math.max(0, Math.min(currentStep, validSteps));

  return (
    <div className="w-full h-[10px] rounded-full overflow-hidden flex gap-1">
      {Array.from({ length: validSteps }, (_, index) => {
        return (
          <div
            key={index}
            className={`h-[10px] transition-all duration-300 flex-shrink-0 ${
              index + 1 <= validCurrentStep
                ? "bg-primary-400"
                : "bg-neutral-200"
            }`}
            style={{
              width: `${100 / validSteps}%`,
              minHeight: "10px",
            }}
          ></div>
        );
      })}
    </div>
  );
}

export default MkStepper;
