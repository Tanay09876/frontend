import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState(""); 

  const handleClick = async () => {
    const input = prompt("Enter color name");
    try {
     
      const res = await axios.get(`https://backend-y2a9.onrender.com/${input}`);

      setData(input); 
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div style={{ height: "20vh", width: "20vw", backgroundColor: data }}>

        <h1 style={{ color: "#fff", textAlign: "center", paddingTop: "20px" }}>
          {data ? `Background color: ${data}` : "Click the button to set color"}
        </h1>
      </div>
      <button onClick={handleClick}>Click here</button>
    </>
  );
}

export default App;
