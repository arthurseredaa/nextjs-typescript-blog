import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createComment } from "../api/posts";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { setComments, setNewComment } from "../redux/actions/posts";
import { Flex } from "./Flex";

const StyledTextarea = styled.textarea`
  resize: none;
  width: 100%;
  height: 100px;
  padding: 10px 10px;
`;

const StyledButton = styled.button`
  background-color: black;
  color: #fff;
  border: none;
  padding: 10px 10px;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background-color: #212121;
  }
`;

const StyledComment = styled.div`
  background-color: #eeeeee;
  padding: 10px 20px;
  width: 100%;
  margin: 10px 0;
  border-radius: 5px;
`;

interface CommentsProps {
  postId: number | string
}

export const Comments = ({ postId }: CommentsProps) => {
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();
  const comments = useTypedSelector(state => state.currentPost.comments);

  const handleClick = async () => {
    if (comment.length > 0) {
      let res = await createComment({ body: comment, postId: postId });
      dispatch(setNewComment(comment, res.id));
    }
    setComments("");
  }

  return (
    <div>
      <Flex direction="column" justify="flex-end" margin="100px 0 50px">
        <StyledTextarea value={comment} onChange={e => setComment(e.target.value)} />
        <StyledButton onClick={handleClick}>Comment</StyledButton>
      </Flex>
      {
        comments && comments.length > 0 && (
          <Flex direction="column" justify="center" align="flex-start">
            {
              comments.map(({ body, id }) => (
                <StyledComment key={id}>
                  <p>{id && id}</p>
                  <h3>{body}</h3>
                </StyledComment>
              ))
            }
          </Flex>
        )
      }
    </div>
  )
}
