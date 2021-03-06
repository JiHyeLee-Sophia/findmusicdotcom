import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

class Reco extends React.Component {
  constructor(props) {
    //title, preview, album
    super(props); //id
    this.audioRef = React.createRef();
    this.state = {
      audio: false
    };
  }
  //when mouse enter, hover always work
  enterHandler = e => {
    return this.setState({
      hover: true
    });
  };
  //when mouse leave, set hover effect depends on audio play
  leaveHandler = e => {
    return this.state.audio
      ? null
      : this.setState({
          hover: false
        });
  };
  clickHandler = e => {
    //pause
    console.log('clicked')
    if(!this.audioRef.current.paused){
      this.audioRef.current.pause();  
      this.setState({
        audio: false
      });
    }else{
      //play
      document.querySelectorAll('audio').forEach(each=>each.pause());
      this.audioRef.current.load();
      this.audioRef.current.play();
      this.setState({
        audio: true,
        hover:true
      });
    }
    
  };
  pauseHandler = e => {
    console.log("-----PAUSED");
    this.setState({
      audio: false,
      hover: false
    });
  };
  render() {
    const {props, state} = this;
    return (
      <Container
        poster={props.album.cover_medium}
        onMouseEnter={this.enterHandler}
        onMouseLeave={this.leaveHandler}
      >
        <Title>
          {state.hover ? (
            <div>
              <Span>{props.album.title}</Span>
              <Button onClick={this.clickHandler}>
                <span role="img" aria-label="img">
                  🎼
                </span>
              </Button>
              <audio
                className="audio"
                id={`reco${props.id}`}
                ref={this.audioRef}
                onPause={this.pauseHandler}
              >
                <source
                  src={`${props.preview}`}
                ></source>
              </audio>
            </div>
          ) : (
            props.title
          )}
        </Title>
      </Container>
    );
  }
}

Reco.propTypes = {
  title: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  album: PropTypes.object.isRequired
};
const Container = styled.div`
  width: 160px;
  height: 200px;
  background: #333 url(${props => props.poster}) no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 500px;
  box-shadow: 17px 16px 0px -7px rgba(30, 30, 30, 0.75);
  @media (max-width:599px){
    width:130px;
    height:170px;
  }
`;

const Title = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(20, 20, 20, 0.5);
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.03);
    font-size: 1.9rem;
    background-color: rgba(240, 240, 240, 0.5);
  }
  @media (max-width:599px){
    font-size:1.2rem;
  }
`;
const Button = styled.button`
  font-size: 2rem;
  background-color: rgba(0, 0, 0, 0);
  outline: 0;
  border: 0;
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
  }
`;
const Span = styled.span`
  font-size: 1rem;
  color: darkslategray;
  background-color: rgba(240, 240, 240, 0.7);
  padding: 0.2rem;
  border-radius: 5px;
  font-weight: 500px;
  display: block;
`;
export default Reco;
