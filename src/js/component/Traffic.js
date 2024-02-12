import React, {useState} from 'react'

const Trafic = () => {
  const [active, setActive] = useState("");
  return (
    <div id="screen" className='position-relative'>
        <div  id="trafficLights" className='bg-black rounded-4 position-absolute start-50 top-50 translate-middle' >
            <div id="red" className={`rounded-circle bg-danger position-absolute ${active === "activeRed" ? "activeRed" : ""}`} 
              onClick={() => {setActive("activeRed")
              }}>
            </div>
            <div id="yellow" className={`rounded-circle bg-warning position-absolute ${active === "activeYellow" ? "activeYellow" : ""}`} 
              onClick={() => {setActive("activeYellow")
              }}>
            </div>
            <div id="green" className={`rounded-circle bg-success position-absolute ${active === "activeGreen" ? "activeGreen" : ""}`} 
              onClick={() => {
                setActive("activeGreen")
              }}>
            </div>
        </div>
    </div>
  )
}

export default Trafic