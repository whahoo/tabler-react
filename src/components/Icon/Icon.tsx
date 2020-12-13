import React, { HTMLAttributes } from "react";
import * as svgIcons from "@tabler/icons";
import cn from "classnames";

const snakeToCamel = (str: string) => str.replace(
  /([-_][a-z])/g,
  (group: string) => group.toUpperCase()
                  .replace('-', '')
                  .replace('_', '')
);


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
  prefix: prefixFromProps = "ti",
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

  const si: { [key:string]: any } = svgIcons;
  const iconComponentName = snakeToCamel(name);
  const SvgIcon = si[`Icon${iconComponentName.charAt(0).toUpperCase()}${iconComponentName.slice(1)}`];

  const extraProps = isAriaHidden
    ? {
      "aria-hidden": true,
    }
    : null;

  return SvgIcon ? (
    <SvgIcon />) :
    !link ? (
      <i className={classes} />
    ) : (
        <a className="icon" {...extraProps} {...rest}>
          <i className={classes} />
        </a>

      );
}

/** @component */
export default Icon;
