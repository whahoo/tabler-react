import React, { useState } from "react";

import { TabProps } from "./Tab";
import TabbedContainer from "./TabbedContainer";
import TabbedHeader from "./TabbedHeader";

import "./Tabs.css";

export interface TabsProps {
  initialTab: string;
  children: React.ReactElement<TabProps>[] | React.ReactElement<TabProps>;
  onChange?: (selectedTitle: string) => void;
}

const Tabs = function({ children, initialTab, onChange }: TabsProps) {
  const [selectedTitle, setSelectedTitle] = useState(initialTab);

  function _handleOnChange(tabTitle: string) {
      setSelectedTitle(tabTitle);
      if(onChange) {
          onChange(tabTitle);
      }
  }

  return (
    <React.Fragment>
      <TabbedHeader
        selectedTitle={selectedTitle}
        stateCallback={_handleOnChange}

        
      >
        {children}
      </TabbedHeader>
      <div className={"margin-bottom-24"} />
      <TabbedContainer selectedTitle={selectedTitle}>
        {children}
      </TabbedContainer>
    </React.Fragment>
  );
};

export default Tabs;
