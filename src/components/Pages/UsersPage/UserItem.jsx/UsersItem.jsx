import { NavLink } from "react-router-dom"
import classes from "../UsersPage.module.css"

const UsersItem = ({users, follow, followingProgress}) => {
  const callFollow = () => follow(users.id, true)
  const callUnfollow = () => follow(users.id, false)
  
  const isFollowing = () => followingProgress.some(id => id === users.id)

  const UserButton = () => users.followed 
    ? <button disabled={isFollowing()} onClick={callUnfollow}> Unfollow </button>
    : <button disabled={isFollowing()} onClick={callFollow}> Follow </button>

  return (
    <div className={classes.item}>
      <div className={classes.img}>
        <img src={users.photos.small || "/logo192.png"} /> 
        <NavLink to={`/profile/${users.id}`}> <span> { users.name } </span> </NavLink>
        <UserButton />
      </div>
    </div>
  )
} 

export default UsersItem;