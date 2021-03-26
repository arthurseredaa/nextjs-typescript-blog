import { Button } from "@material-ui/core";
import { useRouter } from "next/dist/client/router";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createPost, getPost, updatePost } from "../../api/posts";
import { Flex } from "../../components/Flex";
import { Layout } from "../../components/Layout";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { setIsUpdate, setNewPost } from "../../redux/actions/posts";

//  36

const StyledForm = styled.form`
  padding: 10px 30px;
  // border: 1px solid black;
  width: 1000px;
`;

const StyledTitle = styled.input`
  font-family: 'Oswald', sans-serif;
  font-size: 50px;
  background-color: black;
  color: white;
  padding: 0 10px;
  text-transform: uppercase;
  border: none;
  resize: none;
  outline: none;
  margin-bottom: 50px;
`;

const StyledBody = styled.textarea`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  resize: none;
  height: 500px;
  margin-bottom: 50px;
  padding: 20px 40px;
`;

function CreatePost() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [state, setState] = useState({
    title: "",
    body: "",
  });

  const currentPost = useTypedSelector(state => state.currentPost.currentPost);
  const isUpdate = useTypedSelector(state => state.currentPost.isUpdate);

  useEffect(() => {
    const fetchPost = async () => {
      if (isUpdate) {
        let res = await getPost(currentPost);
        const { title, body } = res;
        setState({ title, body });
      }
    }

    fetchPost();
  }, [isUpdate])


  const handleChange = (e: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) => setState({ ...state, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, body } = state;

    if (title.length > 0 && body.length > 0) {
      const res = await createPost(state);
      dispatch(setNewPost({ ...state, id: res.id }));
      setState({ title: "", body: "" });
      router.push(`/posts/${res.id}`, undefined, {shallow: true});
      console.log(res);
    }
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    const res = await updatePost(state, currentPost);
    dispatch(setIsUpdate(false));
    router.push(`/posts/${res.id}`)
  }

  return (
    <Layout pageName="Create post">
      <Flex width="70%" margin="60px auto 0" justify="center" align="center">
        <StyledForm onSubmit={(e) => isUpdate ? handleUpdate(e) : handleSubmit(e)}>
          <Flex direction="column">
            <StyledTitle placeholder="Title" name="title" onChange={handleChange} value={state.title} />
            <StyledBody placeholder="Body" name="body" onChange={handleChange} value={state.body} />
            <Button type="submit" variant="contained">{isUpdate ? "Update" : "Create"}</Button>
          </Flex>
        </StyledForm>
      </Flex>
    </Layout>
  )
}

export default CreatePost;
