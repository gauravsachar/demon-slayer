import React from 'react'
import TypeAnimation from 'react-type-animation';

import './Navbar.css'
function Sethead(prop) {

//   let setColor = {
//     color: 'white',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'column',
//     textAlign: 'center',
//     backgroundImage: 'radial-gradient(rgba(0, 0, 0, 0.1), rgba(0, 1, 1, 10))',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     height: '55vh',
//     position: 'relative',
// }



  return (
    <div>
        <div className="main" id="bgmain" style={prop.setColor}>
            <div className="title">
                <video src="https://demonslayer-hinokami.sega.com/img/video/bg-main.mp4" className='hero-bg' autoPlay loop muted playsInline>
                    
                </video>
                <img src="https://demonslayer-hinokami.sega.com/img/common/game-logo-sm.png" alt="" className="demon" />
                <div className="ready">
                 <h3>Demon Slayer is </h3> <TypeAnimation
                    cursor={false}
                    sequence={[' Inspiring',
                    2000,
                    ' Emotional',
                    2000,
                    ' Awesome',3000]}
                    wrapper="h3"
                    repeat={Infinity}
                    // className="typewriter"
                />

                </div>
            </div>
        </div>
    </div>
  )
}

export default Sethead