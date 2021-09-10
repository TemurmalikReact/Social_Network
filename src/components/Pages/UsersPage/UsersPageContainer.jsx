import { Fragment } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { auth } from "../../../redux/reducers/auth-reducer";
import { follow, setPage, setToggleDisabled, requestUsers } from "../../../redux/reducers/users-reducer";
import { getCount, getIsFetching, getFollowingProgress, getPage, getPortionCount, getTotalCount, getUsers } from "../../../redux/selectors/users-selectors";
import Preloader from "../../Common/Preloader/Preloader";
import WithRedirect from "../../hoc/WithRedirect";
import UsersPage from "./UsersPage";

const UsersPageApi = (props) => {
  const { page, count, totalCount, isFetching, portionCount, users, followingProgress } = props
  const { requestUsers, setPage, follow } = props

  useEffect(() => requestUsers(page, count), [page])
  const onPageChange = page => setPage(page)

  return (
    <Fragment>
      { isFetching && <Preloader /> }
    <UsersPage users={users} follow={follow} followingProgress={followingProgress}
      page={page} totalCount={totalCount} count={count} portionCount={portionCount} 
      onPageChange={onPageChange} /> 
    </Fragment>
  )
}

const mapStateToProps = state => ({ 
  users: getUsers(state),
  count: getCount(state),
  portionCount: getPortionCount(state),
  totalCount: getTotalCount(state),
  page: getPage(state),
  isFetching: getIsFetching(state),
  followingProgress: getFollowingProgress(state)
})

const mapDispatchToProps = { follow, setPage, setToggleDisabled, requestUsers, auth }

const UsersPageContainer = compose(
  connect(mapStateToProps, mapDispatchToProps), 
  WithRedirect
)(UsersPageApi)

export default UsersPageContainer; 
