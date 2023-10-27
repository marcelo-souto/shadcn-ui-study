import React, { PropsWithChildren } from "react";

type Class = {
  id: number;
  title: string;
  duration: number;
  completed: boolean;
};

type CircleButtonProps = {
  completed: boolean;
};

const CircleButton = ({ completed }: CircleButtonProps) => {
  return (
    <button
      data-completed={completed}
      className={`rounded-full w-14 h-14 data-[completed=true]:bg-purple-600 data-[completed=true]hover:bg-purple-700 data-[completed=false]:bg-zinc-700 data-[completed=false]:shadow-none active:shadow-none transition-colors duration-200 ease-in-out shadow-[inset_0px_-4px_0px_0px] shadow-purple-950`}
    />
  );
};

type StepProps = {
  isLast: boolean;
} & Omit<Class, "id">;

const Step = ({ isLast, completed, duration, title }: StepProps) => {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-4">
      <div className="flex flex-col items-center">
        <CircleButton completed={completed} />
        {!isLast && <div className="h-28 w-[3px] bg-zinc-800"></div>}
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-zinc-200">Curso</h3>
        <p className="text-2xl text-zinc-100 font-semibold">{title}</p>
        <div className="flex flex-col gap-2">
          <span className="block w-20 h-[2px] bg-zinc-700"></span>
          <p>{duration} min</p>
        </div>
      </div>
    </div>
  );
};

Step.displayName = "Step";

type StepperProps = PropsWithChildren;

const Stepper = ({ children }: StepperProps) => {
  return <div>{children}</div>;
};

Stepper.displayName = "Stepper";

export { Step, Stepper };
