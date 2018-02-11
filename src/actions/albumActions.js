import * as photoActions from './photoActions';

export const ADD_ALBUM = 'ADD_ALBUM';
export const EDIT_ALBUM = 'EDIT_ALBUM';
export const ADD_PHOTO = 'ADD_PHOTO';
export const DELETE_PHOTO = 'DELETE_PHOTO';

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
  ...photoActions.addPhoto(photoName, photoImageURL),
  albumUuid: uuid,
})

export const deletePhoto = (albumUuid, photoUuid) => ({
  type: DELETE_PHOTO,
  albumUuid: albumUuid,
  photoUuid: photoUuid
})
