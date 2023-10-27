import { Stepper, Step } from "@/components/ui/stepper";

const course = {
  title: "Programando com Next.js",
  classes: [
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
      completed: false,
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
      <Stepper>
        {course.classes.map((course, index, arr) => (
          <Step
            key={course.id}
            title={course.title}
            duration={course.duration}
            completed={course.completed}
            isLast={index === arr.length - 1}
          />
        ))}
      </Stepper>
    </div>
  );
}
