import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import classes from "./ProfilePageContainer.module.css";

const ProfilePage = (props) => {
  const { profile, status, updateStatus, myPosts, addPost, isOwner, putPhoto } = props
  return (
    <div className={`${classes.wrapper} page`}>
      <ProfileInfo putPhoto={putPhoto} isOwner={isOwner} profile={profile} status={status} 
        updateStatus={updateStatus} />
      <MyPosts myPosts={myPosts} addPost={addPost}  />
    </div>
  )
}

export default ProfilePage;