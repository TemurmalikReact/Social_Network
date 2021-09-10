import { memo } from "react";
import classes from "../ProfilePageContainer.module.css";
import MyPostsForm from "./MyPostsForm/MyPostsForm";
import Post from "./PostItem/PostItem";

const MyPosts = memo(({ myPosts: { details, img }, addPost }) => {
  const renderPosts = () => details.map(p => <Post details={p} img={img} key={p.id} /> )
  const callAddPost = value => addPost(value.postText) 
  
  return (
    <div className={classes.myPosts}> 
      <span> My Posts </span>
      <MyPostsForm onSubmit={callAddPost} />
      { renderPosts() }
    </div>
  );
})  
 
export default MyPosts;