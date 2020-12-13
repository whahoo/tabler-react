import * as React from "react";
import cn from "classnames";
import { TablerComponent } from "../../types";
import { string } from "prop-types";

export interface SiteLogoProps extends TablerComponent {
  href?: string;
  src?: string;
  srcSmall?: string;
  alt?: string;
}

const SiteLogo = ({ className, ...props }: SiteLogoProps) => {
  const _className = cn("navbar-brand",
    "navbar-brand-autodark",
    "d-none-navbar-horizontal",
    "pe-0",
    "pe-md-3",
    className);

  return (
    <h1 className={_className} {...props}>
      <a href={props.href}>
        <img src={props.src} width="110" height="32" alt={props.alt} className="navbar-brand-image" />
        {
          props.srcSmall && (
            <img
              src={props.srcSmall}
              className="navbar-brand-logo"
              alt={props.alt}
            />
          )
        }
      </a>
    </h1>


  );
};

export default SiteLogo;
