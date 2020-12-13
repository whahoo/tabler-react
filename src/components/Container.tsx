import React from "react";

//import "./Container.css";
import cn from "classnames";
import { ELProps } from "../helpers/makeHtmlElement";
import El from "./El/El";
import { HTMLPropsWithoutRef } from "../types";

export interface ContainerProps
  extends ELProps,
    HTMLPropsWithoutRef<HTMLDivElement> {
      expand?: "xs" | "sm" | "md" | "lg" | "xl" | "fluid";
    }

function Container({ expand = "xl", children, ...rest }: ContainerProps) {
  
  const classes = cn(`container-${expand}`);

  return (
    <El.Div classNames={classes} {...rest}>
      {children}
    </El.Div>
  );
}

export default Container;
