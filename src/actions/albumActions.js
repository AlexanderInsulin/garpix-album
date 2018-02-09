export const ADD_ALBUM = 'ADD_ALBUM';
export const EDIT_ALBUM = 'EDIT_ALBUM';
export const DELETE_ALBUM = 'DELETE_ALBUM';

export const addAlbum = (name) => ({
  type: ADD_ALBUM,
  name: name
})

export const editAlbum = (uid, newName) => ({
  type: EDIT_ALBUM,
  uid: uid,
  newName: newName
})

export const deleteAlbum = (uid) => ({
  type: DELETE_ALBUM,
  uid: uid
})
