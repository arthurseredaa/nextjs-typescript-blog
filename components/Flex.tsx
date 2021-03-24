import { FC } from "react";
import styled from "styled-components"

interface FlexProps {
  justify?: string;
  align?: string;
  direction?: string;
  margin?: string;
  width?: string;
}

const StyledFlex = styled.div`
  display: flex;
  justify-content: ${({justify = "stretch"}: FlexProps) => justify};
  align-items: ${({align = "stretch"}: FlexProps) => align};
  flex-direction: ${({direction = "row"}: FlexProps) => direction};
  margin: ${({margin = "0"}: FlexProps) => margin};
  width: ${({width = "100%"}: FlexProps) => width};
`;

export const Flex:FC<FlexProps> = (props) => {
  return <StyledFlex {...props} />
}
