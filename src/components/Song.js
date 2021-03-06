import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Song extends React.Component {
  constructor(props) {
    //id, title, preview, artist, album
    super(props);
    this.audioRef = React.createRef();
  }
  clickHandler = e => {
    e.preventDefault();
    if (!this.audioRef.current.paused) {
      this.audioRef.current.pause();
      this.audioRef.current.currentTime = 0;
      this.audioRef.current.controls = false;
    } else {
      document.querySelectorAll("audio").forEach(each => each.pause());
      this.audioRef.current.load();
      this.audioRef.current.play();
      this.audioRef.current.controls = true;
    }
  };
  stopHandler = e => {
    this.audioRef.current.controls = false;
  };
  
  render() {
    const { props } = this;
    return (
      <Container>
        <Poster id={props.id} poster={props.album}></Poster>
        <Title>{props.title}</Title>
        <Link
          to={`/artist/${props.artistId}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Singer>{props.artist}</Singer>
        </Link>
        <Preview>
          <Button onClick={this.clickHandler}>
            <span role="img" aria-label="img">
              🎼
            </span>
          </Button>
          <audio
            id={props.id}
            ref={this.audioRef}
            onEnded={this.stopHandler}
            onPause={this.stopHandler}
            style={{ width: "50px" }}
          >
            <source src={props.preview}></source>
          </audio>
        </Preview>
      </Container>
    );
  }
}
Song.propTypes = {
  preview: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired
};
const Container = styled.div`
  background-color: rgba(240, 240, 240, 0.85);
  width: 100%;
  display: grid;
  grid-template-columns: 0.5fr 2.5fr 1.8fr 0.2fr;
  grid-column-gap: 20px;
  align-items: center;
  font-size: 1.1rem;
`;
const Poster = styled.div`
  width: 70px;
  height: 70px;
  background-image: url(${props => props.poster});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Title = styled.span``;
const Singer = styled.span`
  text-align: center;
  &:hover {
    text-decoration: underline;
  } 
`;
const Preview = styled.div``;
const Button = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  outline: 0;
  cursor: pointer;
  font-size: 1.4rem;
  padding-right: 20px;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
  }
`;
export default Song;
