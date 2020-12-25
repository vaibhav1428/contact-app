// actions
export const addcontact = (contact) =>{
  return {
    type: 'CREATE_CONTACT',
    payload: contact,
  }
} 


export const getcontact = (id) => ({
  type: 'GET_CONTACT',
  payload:id,
})


export const updatecontact = (contact) => ({
  type: 'UPDATE_CONTACT',
  payload:contact,
})

export const deletecontact = (id) => ({
  type: 'DELETE_CONTACT',
  payload:id,
})

