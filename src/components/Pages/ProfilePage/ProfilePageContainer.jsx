import { Component, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { addPost, putPhoto, requestProfile, requestStatus, updateStatus } from "../../../redux/reducers/profile-reducer";
import { getMyPosts, getProfile, getStatus } from "../../../redux/selectors/profile-selectors";
import { getIsAuth, getProfileId } from "../../../redux/selectors/auth-selectors";
import Preloader from "../../Common/Preloader/Preloader";
import WithRedirect from "../../hoc/WithRedirect";
import ProfilePage from "./ProfilePage";

class ProfilePageApi extends Component {
  refresh() {
    const { requestProfile, requestStatus } = this.props 
    let id = this.props.match.params.id
    if (!id) {
      id = this.props.id 
      if (!id) this.props.history.push("/login")
    }
    requestProfile(id)
    requestStatus(id)
  }
  componentDidMount() { 
    this.refresh() 
  }
  componentDidUpdate(prevProps) { 
    if (this.props.match.params.id !== prevProps.match.params.id) this.refresh() 
  } 
  render() {
    const { profile, status, myPosts, updateStatus, addPost, putPhoto } = this.props
    if (!profile) return <Preloader /> 
    return <ProfilePage profile={profile} status={status} myPosts={myPosts} addPost={addPost}
      putPhoto={putPhoto} updateStatus={updateStatus} isOwner={!this.props.match.params.id} />
  }
} 

const mapStateToProps = state => ({ 
  myPosts: getMyPosts(state),
  profile: getProfile(state),
  status: getStatus(state),
  id: getProfileId(state),
  isAuth: getIsAuth(state)
})

const mapDispatchToProps = { addPost, requestProfile, requestStatus, putPhoto, updateStatus }

const ProfilePageContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  WithRedirect
)(ProfilePageApi);

export default ProfilePageContainer;