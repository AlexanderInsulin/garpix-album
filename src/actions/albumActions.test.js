import * as actions from './albumActions';

describe('album actions', () => {

  it('should add album', () => {
    let name = '';
    expect(actions.addAlbum(name)).toEqual({
      name: name,
      photos: []
    });
  });
});
