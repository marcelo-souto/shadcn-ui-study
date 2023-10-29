import { Stepper, Step } from "@/components/ui/stepper";

const course = {
  title: "Programando com Next.js",
  lessons: [
    {
      id: 1,
      title: "Introdução ao Next.js",
      duration: 10,
      completed: true,
    },
    {
      id: 2,
      title: "Rotas dinâmicas",
      duration: 20,
      completed: true,
    },
    {
      id: 3,
      title: "Roteando páginas",
      duration: 15,
      completed: true,
    },
    {
      id: 4,
      title: "Routes Handlers",
      duration: 36,
      completed: false,
    },
  ],
};

export default function TestePage() {
  return (
    <div className="py-32 max-w-6xl mx-auto">
      <section className="grid grid-cols-[2fr_1fr] rounded-2xl bg-zinc-900/30">
        <Stepper className="relative col-start-2 px-12 py-16 before:absolute before:block before:w-[2px] before:h-4/5 before:bg-white/5 before:-ml-16">
          {course.lessons.map(({ id, title, duration, completed }) => (
            <Step
              key={id}
              course={course.title}
              title={title}
              duration={duration}
              completed={completed}
            />
          ))}
        </Stepper>
      </section>
    </div>
  );
}
