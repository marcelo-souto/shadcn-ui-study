import { cn } from "@/lib/utils";
import { PlayCircle } from "lucide-react";
import React from "react";

type Class = {
  id: number;
  title: string;
  duration: number;
  completed: boolean;
};

type CircleButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const CircleButton = (props: CircleButtonProps) => {
  return (
    <button
      className="z-[2] rounded-2xl w-12 h-12 transition-all duration-200 ease-in-out outline-offset-4 group 
      bg-emerald-700 
      group-data-[completed=false]:bg-zinc-800
      group-data-[completed=false]:pointer-events-none"
      {...props}
    >
      <span
        className="flex justify-center items-center rounded-2xl w-12 h-12 -translate-y-[6px] 
        group-active:-translate-y-[2px] 
      bg-emerald-500 
      hover:bg-emerald-600
      text-emerald-800
      group-data-[completed=false]:text-zinc-500
      group-data-[completed=false]:bg-zinc-700
        group-data-[completed=false]:pointer-events-none"
      >
        <PlayCircle size={24} />
      </span>
    </button>
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
      className="relative grid grid-cols-[auto_1fr] grid-rows-[calc(7rem-3.4rem)_1fr] first:grid-rows-[auto_1fr] gap-x-6 list-none group"
    >
      <span className="z-[1] relative top-[-2.875rem] justify-self-center group-first:hidden block h-28 w-[3px] rounded-full bg-zinc-800" />

      <div className="flex flex-col items-center col-start-1 row-start-2">
        <CircleButton disabled={!completed} />
      </div>

      <div className="flex flex-col gap-2 col-start-2 row-start-2">
        <p className="text-zinc-300 text-sm group-data-[completed=false]:text-zinc-500">
          {course}
        </p>
        <h3 className="text-zinc-100 font-semibold group-data-[completed=false]:text-zinc-400">
          {title}
        </h3>
        <div className="flex flex-col gap-2 text-sm group-data-[completed=false]:text-zinc-400">
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

type StepperProps = React.HTMLAttributes<HTMLUListElement>;

const Stepper = ({ children, className }: StepperProps) => {
  return (
    <ul
      className={cn(
        "[&>[data-completed='true']+[data-completed='true']>:first-child]:bg-emerald-500",
        className
      )}
    >
      {children}
    </ul>
  );
};

Stepper.displayName = "Stepper";

export { Step, Stepper };
