
import styled from 'styled-components';
import AudioVisualiser from '../Components/AudioVisualiser';
import { useMediaStream } from '../Context/MediaStreamContext';

const Test = () => {
  const { stream, start, stop } = useMediaStream();

  const toggleMic = () => stream ? stop() : start();

  const Contain= styled.div`
    width:100vw;
    height:100vh;
    background:#FCECD5;
    display:flex;
    justify-content:center;
    align-items:center;
  `

  const Button=styled.button`
    position:fixed;
    bottom:0;
    z-index:2;
  `

  return (
    <div>
      <Contain>
        <Button onClick={toggleMic}>
          {stream ? 'Close Microphone' : 'Open Microphone'}
        </Button>
        <AudioVisualiser/>
      </Contain>
    </div>
  );
};

export default Test;