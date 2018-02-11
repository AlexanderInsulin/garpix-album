export const ADD_ALBUM = 'ADD_ALBUM';
export const EDIT_ALBUM = 'EDIT_ALBUM';
export const DELETE_ALBUM = 'DELETE_ALBUM';
export const ADD_PHOTO = 'ADD_PHOTO';

export const addAlbum = (name) => ({
  type: ADD_ALBUM,
  name: name
})

export const editAlbum = (uuid, newName) => ({
  type: EDIT_ALBUM,
  uuid: uuid,
  newName: newName
})

export const deleteAlbum = (uuid) => ({
  type: DELETE_ALBUM,
  uuid: uuid
})

export const addPhoto = (uuid, photoName, photoImageURL) => ({
  type: ADD_PHOTO,
  uuid: uuid,
  photoName: photoName,
  photoImageURL: photoImageURL
})
