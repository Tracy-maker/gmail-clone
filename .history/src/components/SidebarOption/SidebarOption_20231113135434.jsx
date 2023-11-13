import React from "react";
import styled from "styled-components";

const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 10px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  cursor: pointer;
  color: #818181;

  ${props =>
    props.selected &&
    `
    background-color: #fcecec;
    color: #c04b37;
    font-weight: 800;
  `}

  &:hover {
    background-color: #fcecec;
    color: #c04b37;
    font-weight: 800;

    > h3 {
      font-weight: 800;
    }

    > p {
      display: inline;
    }
  }
`;

const IconContainer = styled.div`
  padding: 5px;
`;

const Title = styled.h3`
  flex: 1;
  margin-left: 10px;
  font-size: 14px;
  font-weight: 400;
`;

const Number = styled.p`
  display: none;
  font-weight: 300;
`;

const SidebarOption = ({ Icon, title, number, selected }) => {
  return (
    <SidebarOptionContainer selected={selected}>
      <IconContainer>
        <Icon />
      </IconContainer>
      <Title>{title}</Title>
      <Number>{number}</Number>
    </SidebarOptionContainer>
  );
};

export default SidebarOption;
