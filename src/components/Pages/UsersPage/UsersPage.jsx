import classes from "./UsersPage.module.css";
import UsersItem from "./UserItem.jsx/UsersItem";
import Paginator from "../../Common/Paginator/Paginator";

const UsersPage = (props) => {
  const { users, page, totalCount, count, portionCount, followingProgress } = props
  const { follow, requestUsers, onPageChange } = props

  const renderUsers = () => users.map(u => 
    <UsersItem key={u.id} users={u} follow={follow} followingProgress={followingProgress} /> )
  
  return (
    <div className="users page">
      <div className={classes.wrapper}>
        <Paginator page={page} count={count} totalCount={totalCount} requestUsers={requestUsers}
          portionCount={portionCount} onPageChange={onPageChange} />
        { renderUsers() }
      </div>
    </div>
  )
}

export default UsersPage;