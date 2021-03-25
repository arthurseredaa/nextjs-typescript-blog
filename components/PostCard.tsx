import Link from "next/link"
import { FC } from "react"
import styled from "styled-components"
import { deletePost } from "../api/posts";

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
  position: relative;
`;

const StyledText = styled.p`
  opacity: .4;
  color: #e53935;
  position: absolute;
  bottom: -7px;
  right: 5px;
  transition: .1s all linear;
  &:hover {
    opacity: 1
  }
`;

export const PostCard: FC<PostProps> = ({ id, title, body }) => {
  const handleDelete = async (e) => {
    e.stopPropagation();
    const res = await deletePost(id);
    console.log(res)
  }
  return (
    <Link href={`/posts/${id}`} passHref>
      <StyledCard>
        <h1>{title}</h1>
        <p>{body.length > 100 ? body.substring(0, 100) + "..." : body}</p>
        <StyledText onClick={handleDelete}>delete post</StyledText>
      </StyledCard>
    </Link>
  )
}
