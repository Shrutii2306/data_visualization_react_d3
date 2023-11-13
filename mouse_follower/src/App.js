import React, {useState, useCallback} from 'react';
import * as d3 from 'd3';
import './App.css';
const width=3050;
  const height=1430;
  const circleRadius = 30;
  const initialMousePosition = {x : width/2,y:height/2};




function App() {
  
  const [mousePosition, setMousePosition] = useState(initialMousePosition);

  const handleMouseMove = useCallback((event) => {

    const {clientX, clientY} = event;
    setMousePosition({x: clientX, y:clientY});
  }, [setMousePosition]);

  return (
    <div className="App">
      <svg width={width} height={height} onMouseMove = {handleMouseMove}>
        <circle
          cx = {mousePosition.x}
          cy = {mousePosition.y}
          r = {circleRadius}
        />
      </svg>
    </div>
  );
}

export default App;
