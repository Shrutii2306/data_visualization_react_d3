import React, {useState} from 'react';
import * as d3 from 'd3';
import './App.css';
  const csvUrl = "https://raw.githubusercontent.com/Shrutii2306/data_visualization_react_d3/main/fetching_data/color.csv";
function App() {
  
  const [data, setdata] = useState(null);

  

  d3.csv(csvUrl).then(data => {

    setdata(data);
    let message = '';
    message = message + Math.round(d3.csvFormat(data).length/1024);
    message = message + data.length + ' rows\n';
    message = message + data.columns.length +' columns';
    
  })

  return (
    <div className="App">

      data is : {data ? {message} : "not loaded"} 
      
    </div>
  );
}

export default App;
