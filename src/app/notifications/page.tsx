import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
  Notification,
  NotificationContent,
  NotificationDescription,
  NotificationIcon,
  NotificationTitle,
} from "@/components/ui/notification";
import { Mail } from "lucide-react";
import Link from "next/link";

const notificationOptions = [
  {
    value: "all",
    label: "Todos",
  },
  {
    value: "read",
    label: "Lidas",
  },
  {
    value: "unread",
    label: "Não Lidas",
  },
];

const allNotifications = [
  {
    text: "Novo Email Recebido",
    read: false,
  },
  {
    text: "Novo Email Recebido",
    read: true,
  },
];

interface NotificationsPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function NotificationsPage({
  searchParams,
}: NotificationsPageProps) {
  const filter = searchParams.filter || "all";

  const notifications =
    filter === "all"
      ? allNotifications
      : allNotifications.filter(
          (notification) => notification.read === !!(filter === "read")
        );

  return (
    <Container as="main" className="flex flex-col justify-center h-screen gap-6">
      <div className="grid grid-cols-3 gap-4">
        {notificationOptions.map(({ label, value }) => (
          <Button
            key={value}
            data-active={filter === value}
            variant="outline"
            className="dark:data-[active=true]:border-zinc-100 dark:data-[active=false]:border-zinc-700"
            asChild
          >
            <Link href={`?filter=${value}`}>{label}</Link>
          </Button>
        ))}
      </div>

      <div className="flex flex-col items-center min-w-[324px] gap-4">
        {notifications.map((notification, index) => {
          const variant = notification.read ? "read" : "unread";

          return (
            <Notification key={index} variant={variant}>
              <NotificationIcon icon={<Mail />} />

              <NotificationContent>
                <NotificationTitle>{notification.text}</NotificationTitle>
                <NotificationDescription>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Possimus ratione hic quaerat error quo dolores similique rerum
                  dicta, facilis iste aperiam earum laboriosam. Dolores sit
                  voluptatum exercitationem minus eos? Minima.
                </NotificationDescription>
              </NotificationContent>
            </Notification>
          );
        })}
      </div>
    </Container>
  );
}
