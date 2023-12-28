import React from "react";

type TSwitch = React.PropsWithChildren;

const Switch = ({ children }: TSwitch) => {
  return children;
};

Switch.displayName = "Switch";

type TCase = React.PropsWithChildren & {
  condition: boolean;
};

const Case = ({ children, condition }: TCase) => {
  return condition ? children : null;
};

Case.displayName = "Case";

export { Switch, Case };
