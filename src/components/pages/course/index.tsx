import { course } from "@/utils/data/data";
import { CourseSideBarMenu } from "@/components/ui/course/course-sidebar-menu";
import { CourseVideo } from "@/components/ui/course/course-video";
import { Button } from "@/components/ui/button";

const CoursePage = () => {
  return (
    <section className="flex items-center min-h-screen max-w-7xl mx-auto">
      <div className="grid grid-cols-1 w-full md:grid-cols-[6fr_minmax(280px,1fr)] gap-x-16 gap-y-8 p-8 md:p-16 md:pt-8 md:rounded-2xl bg-zinc-900/30">
        <Button variant="ghost" size="sm" className="col-span-full w-fit px-0 dark:hover:bg-transparent dark:hover:text-emerald-400 active:scale-95">
          <span className="material-symbols-rounded">chevron_left</span>
          Voltar
        </Button>
        <CourseVideo />
        <CourseSideBarMenu course={course} />
      </div>
    </section>
  );
};

CoursePage.displayName = "CoursePage";

export { CoursePage };
