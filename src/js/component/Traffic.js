import React, {useState} from 'react'
let index = 0;
let lights = ['red', 'yellow', 'green'];

const Trafic = () => {
  const [active, setActive] = useState("");
  const [newLight, setNewLight] = useState(false);
  
  
  return (
    <>
      <div  id="trafficLights" className='bg-black rounded-4 position-absolute start-50 top-50 translate-middle' >
          <div id="red" className={`rounded-circle bg-danger ${active === "red" ? "activeRed" : ""}`} 
            onClick={() => {setActive("red");
            index=0;
            }}>
          </div>
          <div id="yellow" className={`rounded-circle bg-warning ${active === "yellow" ? "activeYellow" : ""}`} 
            onClick={() => {setActive("yellow");
            index=1;
            }}>
          </div>
          <div id="green" className={`rounded-circle bg-success ${active === "green" ? "activeGreen" : ""}`} 
            onClick={() => {
              setActive("green");
              index=2;
            }}>
          </div>
          <div id="purple" className={`rounded-circle ${newLight ? "" : "visually-hidden"} ${active === "purple" ? "activePurple" : ""}`} 
            onClick={() => {
            setActive("purple");
            index=3;
          }}>
          </div>
      </div>
      <button className='btn btn-primary ' onClick={() => {
        index= (index+1) % lights.length;
        setActive(lights[index]);
      }}>
        Alternate
      </button>
      <button className= {`btn ${newLight? "btn-danger":"btn-success"}`} onClick={() =>{
        if (newLight){
          setNewLight(false) 
          lights.pop()
        }
        else{
          setNewLight(true);
          lights.push("purple");
        }
      }}>
        {newLight ? "Remove Light" : "Add Light"}
      </button>
    </>
  )
}

export default Trafic