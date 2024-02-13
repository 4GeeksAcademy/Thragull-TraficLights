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
            onClick={() => {
              index=0;
              setActive(lights[index]);
            }}>
          </div>
          <div id="yellow" className={`rounded-circle bg-warning ${active === "yellow" ? "activeYellow" : ""}`} 
            onClick={() => {
              index=1;
              setActive(lights[index]);
            }}>
          </div>
          <div id="green" className={`rounded-circle bg-success ${active === "green" ? "activeGreen" : ""}`} 
            onClick={() => {
              index=2;
              setActive(lights[index]);
            }}>
          </div>
          <div id="purple" className={`rounded-circle ${newLight ? "" : "visually-hidden"} ${active === "purple" ? "activePurple" : ""}`} 
            onClick={() => {
            index=3;
            setActive(lights[index]);
          }}>
          </div>
      </div>
      <div className='row justify-content-center'>
        <button className='btn btn-primary col-5 col-md-2 col-xl-1 m-2' onClick={() => {
          index= (index+1) % lights.length;
          setActive(lights[index]);
        }}>
          Alternate
        </button>
        <button className= {`btn col-5 col-md-2 col-xl-1 m-2 ${newLight? "btn-danger":"btn-success"}`} onClick={() =>{
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
      </div>
    </>
  )
}

export default Trafic