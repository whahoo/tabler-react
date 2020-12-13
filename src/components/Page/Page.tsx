import React from "react";
import cn from "classnames";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

export interface PageProps
  extends ELProps,
    Omit<HTMLPropsWithoutRef<HTMLDivElement>, "as"> {}

function Page({ className, children, ...rest }: PageProps) {
  const classes = cn("page", className);
  return (
    <El.Div className={classes} {...rest}>
      {children}
    </El.Div>
  );
}

export default Page;
