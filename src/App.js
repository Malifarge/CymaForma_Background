import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AudioAnalyserProvider } from "./Context/AudioAnalyserContext";
import { InputAudioProvider } from "./Context/InputAudioContext";
import { MediaStreamProvider } from "./Context/MediaStreamContext";
import { MusicPlay } from "./Pages/MusicPlay";
import Test from "./Pages/Test";

const App = () => {
  return (
    <BrowserRouter>

      <MediaStreamProvider video={false} audio={true}>
        <InputAudioProvider>
          <AudioAnalyserProvider>
            <Routes>
               {/* <Route path="/" element={<MusicPlay/>}/> */}
               <Route path="/" element={<Test/>} />
            </Routes>
          </AudioAnalyserProvider>
        </InputAudioProvider>
      </MediaStreamProvider>
    </BrowserRouter>
  );
}

export default App;
