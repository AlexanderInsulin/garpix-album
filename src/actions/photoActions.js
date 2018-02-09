export const UPLOAD_PHOTO_REQUESTED = 'UPLOAD_PHOTO_REQUESTED';
export const UPLOAD_PHOTO_OK = 'UPLOAD_PHOTO_OK';
export const UPLOAD_PHOTO_FAIL = 'UPLOAD_PHOTO_FAIL';
export const ADD_PHOTO = 'ADD_PHOTO';
export const EDIT_PHOTO = 'EDIT_PHOTO';
export const DELETE_PHOTO = 'DELETE_PHOTO';

export const addPhoto = (name, href) => ({
  type: ADD_PHOTO,
  name: name,
  imageURL: href
})

export const editPhoto = (uuid, newName) => ({
  type: EDIT_PHOTO,
  uuid: uuid,
  newName: newName
})

export const deletePhoto = (uuid) => ({
  type: DELETE_PHOTO,
  uuid: uuid,
})
