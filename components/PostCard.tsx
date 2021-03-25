import Link from "next/link"
import { FC } from "react"
import styled from "styled-components"

interface PostProps {
  id: number;
  title: string;
  body: string;
}

const StyledCard = styled.div`
  width: 30%;
  border: 1px solid gray;
  margin: 40px 20px;
  padding: 10px 20px;
  transition: .1s all linear;
  border-radius: 3px;
  cursor: pointer;
  & > h1 {
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
  };
  & > p {
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
  };
  &:hover {
    box-shadow: 5px 5px 10px black
  }
`;

export const PostCard: FC<PostProps> = ({ id, title, body }) => (
  <Link href={`/posts/${id}`} passHref>
    <StyledCard>
      <h1>{title}</h1>
      <p>{body}</p>
    </StyledCard>
  </Link>
)
