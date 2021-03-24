import { FC } from 'react';
import styled from "styled-components";
import { Flex } from './Flex';
import Link from "next/link";
import { Button } from './Button';

const StyledHeader = styled.header`
  width: 70vw;
  margin: 0 auto;
  & h1 {
    margin: 0;
  }
  padding: 25px 0;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #222;
  opacity: .6;
  cursor: pointer;
  transition: .1s all linear;
  &:hover {
    opacity: 1;
  }
`;

export const Header: FC = () => (
  <StyledHeader>
    <Flex align="center" justify="space-around">
      <h1>Logo</h1>
      <Flex align="center" justify="flex-end" width="70%">
        <Flex width="20%" align="center" justify="space-around" margin="0px 40px">
          <StyledLink>link 1</StyledLink>
          <StyledLink>link 2</StyledLink>
          <StyledLink>link 3</StyledLink>
          <StyledLink>link 4</StyledLink>
        </Flex>
        <Link href="/posts/new">
          <Button padding="15px 20px">
            Create post
        </Button>
        </Link>
      </Flex>
    </Flex>
  </StyledHeader>
)
