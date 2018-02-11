import album from './album';
import * as actions from '../actions/albumActions';
import {v4} from 'uuid';

jest.mock('uuid', () => {
  return {
      v4: jest.fn(() => 1)
  };
});

describe('album reducer', () => {

  it('should create album', () => {
    let uuid = v4();
    let name = 'test name';
    let al = album(undefined, actions.addAlbum(name));
    expect(al).toEqual({
      uuid: uuid,
      name: name,
      photos: []
    })
  });

  it('should edit album', () => {
    let name = 'test name';
    let uuid = v4();
    let al = album(undefined, actions.addAlbum(name));
    let newName = 'new test name';
    al = album(al, actions.editAlbum(uuid, newName));
    expect(al).toEqual({
      uuid: uuid,
      name: newName,
      photos: []
    })
  });

  it('should add photo to album', () => {
    let uuid = v4();
    let prev = album('album name', actions.addAlbum(name));
    let after = album(prev, actions.addPhoto(uuid, 'name', 'url'));
    expect({
      uuid: prev.uuid,
      name: prev.name
    }).toEqual({
      uuid: after.uuid,
      name: after.name
    })
    let photos = [{
      uuid: 1,
      name: 'name',
      imageURL: 'url'
    }]
    expect(after.photos).toEqual(photos);
  });
})
