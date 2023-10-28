import React, { PropsWithChildren } from "react";

type Class = {
  id: number;
  title: string;
  duration: number;
  completed: boolean;
};

const CircleButton = () => {
  return (
    <button
      className={
        "rounded-full w-14 h-14 group-data-[completed=true]:bg-purple-600 group-data-[completed=true]hover:bg-purple-700 group-data-[completed=false]:bg-zinc-700 group-data-[completed=false]:shadow-none active:shadow-none transition-colors duration-200 ease-in-out shadow-[inset_0px_-4px_0px_0px] shadow-purple-950"
      }
    />
  );
};

type StepProps = Omit<Class, "id"> & {
  course: string;
};

// Utilizando group e group-last para estilizar o after apenas no último elemento

const Step = ({ completed, duration, title, course }: StepProps) => {
  return (
    <li
      data-completed={completed}
      className="grid grid-cols-[auto_1fr] gap-4 list-none group"
    >
      <div
        className="flex flex-col items-center group-last:after:hidden 
      after:block after:h-28 after:w-[3px] after:bg-zinc-800"
      >
        <CircleButton />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-zinc-200 text-sm">{course}</h3>
        <p className="text-xl text-zinc-100 font-semibold">{title}</p>
        <div className="flex flex-col gap-2">
          <span className="block w-14 h-[2px] bg-zinc-700"></span>
          <p>{duration} min</p>
        </div>
      </div>
    </li>
  );
};

Step.displayName = "Step";

// Acessando de forma arbitraria o último elemento do grupo
// className="[&>*:last-child>:first-child]:after:hidden"

type StepperProps = PropsWithChildren;

const Stepper = ({ children }: StepperProps) => {
  return (
    <ul className="[&>[data-completed='true']+[data-completed='true']>:first-child:after]:bg-purple-600">
      {children}
    </ul>
  );
};

Stepper.displayName = "Stepper";

export { Step, Stepper };
