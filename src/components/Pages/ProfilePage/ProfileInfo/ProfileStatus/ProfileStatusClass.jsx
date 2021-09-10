import { Component } from "react";

class ProfileStatus extends Component {
  state = { 
    editMode: false, status: this.props.status 
  } 

  toggleEditMode = () => {
    this.setState({ editMode: !this.state.editMode })
    if (this.state.editMode === true) this.props.updateStatus(this.state.status)
  }

  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value })
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) this.setState({ status: this.props.status })
  }
  
  render() {
    return (
      <div> 
        { this.state.editMode 
          ? <input autoFocus={true} onBlur={this.toggleEditMode} 
              value={this.state.status} onChange={this.onStatusChange} />  
          : <span onDoubleClick={this.toggleEditMode}> {this.props.status || "No Status"} </span> }
      </div> 
    )
  }
};

export default ProfileStatus;