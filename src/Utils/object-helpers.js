export const updateToggleFollow = (stateUsers, actionId, newProp) => {
  stateUsers.map((i) => { 
    if (i['id'] === actionId) return { ...i, ...newProp}
    return i
  })
}
