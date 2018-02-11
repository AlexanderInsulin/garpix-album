export const ADD_ALBUM = 'ADD_ALBUM';
export const EDIT_ALBUM = 'EDIT_ALBUM';
export const ADD_PHOTO = 'ADD_PHOTO';

export const addAlbum = (name) => ({
  type: ADD_ALBUM,
  albumName: name
})

export const editAlbum = (uuid, newName) => ({
  type: EDIT_ALBUM,
  albumUuid: uuid,
  albumNewName: newName
})

export const addPhoto = (uuid, photoName, photoImageURL) => ({
  type: ADD_PHOTO,
  albumUuid: uuid,
  photoName: photoName,
  photoImageURL: photoImageURL
})
