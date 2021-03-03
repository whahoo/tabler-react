import * as React from "react";
import { TabProps } from "./Tab";
import Nav from "../Nav";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

export interface TabbedHeaderProps
  extends ELProps,
    HTMLPropsWithoutRef<HTMLUListElement> {
  children: React.ReactElement<TabProps>[] | React.ReactElement<TabProps>;
  selectedTitle: string;
  stateCallback: (selectedTitle: string) => void;
}

function TabbedHeader({
  children,
  stateCallback,
  selectedTitle,
  ...rest
}: TabbedHeaderProps) {
  const tabs = React.Children.toArray(children);
  return (
    <El.Ul classNames="nav nav-tabs Tab_header_tabs" {...rest}>
      {(tabs as any[]).map(({ props: { title, ...tabRest } }, index) => {
        return (
          <Nav.Item
            key={index}
            value={title}
            onClick={() => stateCallback(title)}
            active={title === selectedTitle}
            {...tabRest}
          />
        );
      })}
    </El.Ul>
  );
}

export default TabbedHeader;
