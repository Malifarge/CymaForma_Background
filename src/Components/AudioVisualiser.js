import styled from 'styled-components';
import React, { createRef, useEffect } from 'react';
import { useAudioAnalyser } from '../Context/AudioAnalyserContext';

const AudioVisualiser= () => {

  const Stroke = "#FCECD5"
  const bg = " radial-gradient(circle, rgba(237,222,200,1) 0%, rgba(220,208,191,1) 100%)"

  const canvasRef = createRef();
  const { analyser } = useAudioAnalyser();

  useEffect(() => {
    if (!analyser) {
      return;
    }

    let raf;

    const data = new Uint8Array(analyser.frequencyBinCount);

    const draw = () => {
      raf = requestAnimationFrame(draw);
      analyser.getByteTimeDomainData(data);
      const canvas = canvasRef.current;
      if (canvas) {
        const { height, width } = canvas;
        const context = canvas.getContext('2d');
        let x = 0;
        const sliceWidth = (width * 1.0) / data.length;

        if (context) {
          context.lineWidth = 1;
          context.strokeStyle = Stroke;
          context.clearRect(0, 0, width, height);

          context.beginPath();
          for (const item of data) {
            const y = (item / 255.0) * height;
            context.arc(width/2,y,x,0,2*Math.PI);
            x += sliceWidth;
          }
          context.stroke();
        }
      }
    };
    draw();


    return () => {
      cancelAnimationFrame(raf);
    }
  }, [canvasRef, analyser]);

  
  const Canvas = styled.canvas`
    background: ${bg} ;
    width: 100vw;
    height:100vh;
    filter: blur(6px);
  `

  return analyser ? <Canvas ref={canvasRef} /> : null;
};

export default AudioVisualiser;