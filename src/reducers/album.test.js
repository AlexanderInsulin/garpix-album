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
    let name = 'test name';
    let al = album(undefined, actions.addAlbum(name));
    expect(al).toEqual({
      uuid: v4(),
      name: name,
      photos: []
    })
  });

  it('should edit album', () => {
    let name = 'test name';
    let al = album(undefined, actions.addAlbum(name));
    let newName = 'new test name';
    al = album(al, actions.editAlbum(1, newName));
    expect(al).toEqual({
      uuid: 1,
      name: newName,
      photos: []
    })
  });
})
