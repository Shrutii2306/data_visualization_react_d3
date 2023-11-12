import './App.css';
import * as d3 from "d3";

function App() {

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
  const mouthArc = d3.arc().innerRadius(mouthRadius).outerRadius(mouthRadius+mouthWidth).startAngle(Math.PI/2).endAngle(Math.PI*3/2);

  
  return (
    <div className="App">
      
      <svg width={width} height={height} >
      <g transform={`translate(${centerX},${centerY})`}>
        <circle 
           
          fill="yellow" 
          r={centerY - strokeWidth/2} 
          stroke="black" 
          stroke-width={strokeWidth} 
        />
        <circle
          cx={- eyeOffsetX}
          cy={- eyeOffsetY}
          r={eyeRadius}
        />
        <circle
          cx={ + eyeOffsetX}
          cy={ - eyeOffsetY}
          r={eyeRadius}
        />
        <path d = {mouthArc()}/>
        </g>
      </svg>
    </div>
  );
}

export default App;
