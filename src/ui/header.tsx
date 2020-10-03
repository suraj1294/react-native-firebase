import React, { FC } from "react";
import { Body, Button, Header, Icon, Left, Right, Title } from "native-base";

interface TabHeaderProps {
  left?: JSX.Element;
  middle?: JSX.Element;
  right?: JSX.Element;
}

const TabHeader: FC<TabHeaderProps> = ({ left, middle, right }) => {
  return (
    <Header>
      <Left>{left}</Left>
      <Body>{middle}</Body>
      <Right>{right}</Right>
    </Header>
  );
};

export default TabHeader;
