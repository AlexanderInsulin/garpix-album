export const ADD_ALBUM = 'ADD_ALBUM';
export const EDIT_ALBUM = 'EDIT_ALBUM';
export const DELETE_ALBUM = 'DELETE_ALBUM';

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
