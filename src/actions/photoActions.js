export const UPLOAD_PHOTO = 'UPLOAD_PHOTO';
export const UPLOAD_PHOTO_REQUESTED = 'UPLOAD_PHOTO_REQUESTED';
export const UPLOAD_PHOTO_OK = 'UPLOAD_PHOTO_OK';
export const UPLOAD_PHOTO_FAIL = 'UPLOAD_PHOTO_FAIL';
export const ADD_PHOTO = 'ADD_PHOTO';
export const EDIT_PHOTO = 'EDIT_PHOTO';

export const addPhoto = (name, href) => ({
  type: ADD_PHOTO,
  photoName: name,
  photoImageURL: href
})

export const editPhoto = (uuid, newName) => ({
  type: EDIT_PHOTO,
  photoUuid: uuid,
  photoNewName: newName
})
