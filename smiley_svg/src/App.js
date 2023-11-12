import './App.css';
import * as d3 from "d3";
import { BackgroundCircle } from './BackgroundCircle';
import { Eyes } from './Eyes';
import { Mouth } from './Mouth';
import { FaceContainer } from './FaceContainer';
const width=960;
  const height=500;

  const centerX = width/2;
  const centerY = height/2;
  const strokeWidth = 10;

  const eyeOffsetX = 90;
  const eyeOffsetY = 90;
  const eyeRadius = 30;
  const mouthWidth = 10;
  const mouthRadius = 140;



function App() {
  
  return (
    <div className="App">
      
      <FaceContainer 
        width={width}
        height={height}
        centerX={centerX}
        centerY={centerY}
      >
        <BackgroundCircle 
          radius={centerY - strokeWidth/2} 
          strokeWidth = {strokeWidth}
        />
        <Eyes 
          eyeOffsetX={eyeOffsetX}
          eyeOffsetY={eyeOffsetY}
          eyeRadius={eyeRadius}
        
        />
        <Mouth
          mouthRadius={mouthRadius}
          mouthWidth={mouthWidth}
        
        />
        </FaceContainer>
    </div>
  );
}

export default App;
