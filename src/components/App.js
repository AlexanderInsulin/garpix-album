import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { Container, Row, Col } from 'reactstrap';
import actions from '../actions';
import { bindActionCreators } from 'redux'


class App extends Component {
  render() {
    return (
      <Container>
        <button onClick={() => this.props.addAlbum('123')}>add album</button>

        <Row >
          {this.props.galery.map((album) =>
            <Col xs={6} key={album.uuid}>
              <button onClick={() => this.props.addPhoto(album.uuid, 's', 's')}>add photo</button>
              {album.name}
              {album.photos.map((photo) =>
                <p key={photo.uuid}>{photo.name} <button onClick={() => this.props.deletePhoto(album.uuid, photo.uuid)}>x</button></p>
              )}
            </Col>
          )}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    galery: state.galery
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPhoto: bindActionCreators(actions.album.addPhoto, dispatch),
    addAlbum: bindActionCreators(actions.album.addAlbum, dispatch),
    deletePhoto: bindActionCreators(actions.album.deletePhoto, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
