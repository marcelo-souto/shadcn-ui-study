import { course } from "@/utils/data/data";
import { CourseSideBarMenu } from "@/components/ui/course/course-sidebar-menu";
import { CourseVideo } from "@/components/ui/course/course-video";

const CoursePage = () => {
  return (
    <section className="flex items-center min-h-screen max-w-7xl mx-auto">
      <div className="grid grid-cols-1 w-full md:grid-cols-[6fr_minmax(280px,1fr)] gap-16 p-8 md:p-16 md:rounded-2xl bg-zinc-900/30">
        <CourseVideo />
        <CourseSideBarMenu course={course} />
      </div>
    </section>
  );
};

CoursePage.displayName = "CoursePage";

export { CoursePage };
