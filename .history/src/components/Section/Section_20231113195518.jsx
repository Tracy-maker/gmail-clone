import React from "react";
import styled from "styled-components";

const StyledSection = styled.div`
  display: flex;
  align-items: center;
  border-bottom-width: 2px;
  padding: 15px;
  min-width: 200px;
  cursor: pointer;
  color: grey;
  border-width: 0 !important;

  ${(props) =>
    props.selected &&
    `
    background-color: whitesmoke;
    border-width: 3px !important;
    color: ${props.color}!important;
  `}

  &:hover {
    background-color: whitesmoke;
    border-width: 3px !important;
  }
`;

const Title = styled.h4`
  font-size: 14px;
  margin-left: 15px;
`;

function Section({ Icon, title, color, selected }) {
  return (
    <StyledSection selected={selected} color={color}>
      <Icon />
      <Title>{title}</Title>
    </StyledSection>
  );
}

export default Section;
