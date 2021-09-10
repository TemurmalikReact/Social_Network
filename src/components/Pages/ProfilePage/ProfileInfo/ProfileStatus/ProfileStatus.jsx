import { useEffect, useState } from "react";

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  const toggleEditMode = () => {
    setEditMode(prev => !prev)
    if (editMode === true) props.updateStatus(status)
  }

  const onStatusChange = e => setStatus(e.currentTarget.value)
  
  useEffect(() => setStatus(props.status), [props.status])

  return (
    <div> 
      { editMode 
        ? <input autoFocus={true} onBlur={toggleEditMode} value={status} onChange={onStatusChange} />  
        : <span onDoubleClick={toggleEditMode}> {status || "No Status"} </span> }
    </div> 
  )
};

export default ProfileStatus;