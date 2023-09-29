"use client"

import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const notificationVariants = cva(
  "flex flex items-center gap-4 p-4 w-full rounded-lg text-sm font-semibold",
  {
    variants: {
      variant: {
        read: "bg-emerald-400 text-emerald-900",
        unread: "bg-zinc-400 text-zinc-700",
      },
      defaultVariants: {
        variant: "unread",
      },
    },
  }
);

const NotificationContext = React.createContext(
  {} as VariantProps<typeof notificationVariants>
);
const useNotificationContext = () => React.useContext(NotificationContext);

interface NotificationProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof notificationVariants> {}

const Notification = ({
  children,
  className,
  variant,
  ...props
}: NotificationProps) => {
  return (
    <NotificationContext.Provider value={{ variant }}>
      <div
        className={cn(notificationVariants({ variant, className }))}
        {...props}
      >
        {children}
      </div>
    </NotificationContext.Provider>
  );
};

Notification.displayName = "Notification";

interface NotificationIconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
}

const NotificationIcon = ({ icon }: NotificationIconProps) => {
  return <div>{icon}</div>;
};

NotificationIcon.displayName = "NotificationIcon";

const NotificationContent = ({ children }: React.PropsWithChildren) => {
  return <div>{children}</div>;
};

NotificationContent.displayName = "NotificationContent";

const notificationTitleVariants = cva("text-lg font-semibold", {
  variants: {
    variant: {
      read: "text-emerald-900",
      unread: "text-zinc-700",
    },
    defaultVariants: {
      variant: "unread",
    },
  },
});

interface NotificationTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

const NotificationTitle = ({ children }: NotificationTitleProps) => {
  
  const { variant } = useNotificationContext();

  return (
    <h3 className={cn(notificationTitleVariants({ variant }))}>{children}</h3>
  );
};

NotificationTitle.displayName = "NotificationTitle";

const NotificationDescription = ({ children }: React.PropsWithChildren) => {
  return <p className="text-sm">{children}</p>;
};

NotificationDescription.displayName = "NotificationDescription";

export {
  Notification,
  NotificationIcon,
  notificationVariants,
  NotificationContent,
  NotificationTitle,
  NotificationDescription,
};
