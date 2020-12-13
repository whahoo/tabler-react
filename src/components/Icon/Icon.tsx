import React, { HTMLAttributes } from "react";
import * as icons from '@tabler/icons';
import cn from "classnames";

export interface IconProps extends HTMLAttributes<HTMLElement> {
  /**
   * Should this icon be rendered within an <a> tag
   */
  link?: boolean;
  /**
   * The icon prefix
   */
  prefix?: string;
  /**
   * The icon name
   */
  name: string;
  isAriaHidden?: boolean;
  /**
   * Use the built-in payment icon set
   */
  payment?: boolean;
  /**
   * Use the built-in flag icon set
   */
  flag?: boolean;
  /**
   * A thinner version of the icon
   */
  thin?: boolean;
}

/**
 * Display an icon.
 * Uses the included feathers icon set by default but you can add your own
 */
function Icon({
  prefix: prefixFromProps = "fe",
  name,
  className,
  link,
  isAriaHidden,
  payment,
  flag,
  thin,
  ...rest
}: IconProps) {
  const prefix = (payment && "payment") || (flag && "flag") || prefixFromProps;
  const classes = cn(
    "icon",
    {
      [prefix]: true,
      [`${prefix}-${name}`]: true,
      "icon-thin": thin,
    },
    className
  );
  const { [`Icon${name.charAt(0).toUpperCase()}${name.slice(1)}`]: Icon } = icons;
  const extraProps = isAriaHidden
    ? {
      "aria-hidden": true,
    }
    : null;

  return Icon ? (
    <Icon className={classes} {...rest} />
  ) : !link ? (
    <i className={classes} />
  ) :(
      <a className="icon" {...extraProps} {...rest}>
        <i className={classes} />
      </a>
      
  );
}

/** @component */
export default Icon;
