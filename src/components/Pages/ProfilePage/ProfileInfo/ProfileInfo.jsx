import { Fragment } from "react";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = ({ profile: { photos: {small, large} }, status, updateStatus, isOwner, putPhoto }) => {
  const onPhotoChange = (e) => {
    if (e.target.files.length > 0) putPhoto(e.target.files[0])
  }

  return (
    <Fragment>
      <div>
        <img src={large || "/logo192.png"}
          style={{ height: "500px", width: "500px" }} />
      </div>
      <div>
        { isOwner && <input type="file" onChange={onPhotoChange} /> }
        <ProfileStatus status={status} updateStatus={updateStatus} />
      </div>
    </Fragment>
  )
}

export default ProfileInfo