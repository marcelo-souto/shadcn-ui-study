import { Tracker, TrackerItem } from "@/components/ui/tracker";
import type { Course } from "@/types/types";

type CourseSideBarMenuProps = {
  course: Course;
};

const CourseSideBarMenu = ({ course }: CourseSideBarMenuProps) => {
  return (
    <nav className="relative">
      <Tracker>
        {course.lessons.map(({ id, title, duration, completed }) => (
          <TrackerItem
            key={id}
            course={course.title}
            title={title}
            duration={duration}
            completed={completed}
          />
        ))}
      </Tracker>
    </nav>
  );
};

CourseSideBarMenu.displayName = "CourseSidebarMenu";

export { CourseSideBarMenu };
