// import logo from './logo.svg';
import './App.css';
import Characters from './components/Characters';
// import ReactPlayer from 'react-player'
// import { FlippingCard, FlippingCardBack, FlippingCardFront } from 'react-ui-cards';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Sethead from './components/Sethead';
import Text from './components/Text';
import Flip from './components/Flip';
// import Flip2 from './components/Flip2';
function App() {
  let Switchmodes=''

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  let setColor = {
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    backgroundImage: 'radial-gradient(rgba(0, 0, 0, 0.1), rgba(0, 1, 1, 10))',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '55vh',
    position: 'relative',
}

  const [mode,setmode] = useState('dark');



  let togglemode=()=>{

      if (mode==='light'){
          setmode('dark');
          document.getElementById('Switchmodes').style.color='white';
          document.getElementById('Switchmodes').innerText='Enable Light mode';
          document.getElementById('dslr').style.color='blue';
          document.getElementById('bgmain').style.backgroundImage='radial-gradient(rgba(0, 0, 0, 0.1), rgba(0, 1, 1, 10))';
          document.body.style.backgroundColor='black';
          document.body.style.color='white';
          setColor = {
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            textAlign: 'center',
            backgroundColor: 'pink',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '55vh',
            position: 'relative',
        }
          // showalert("Dark mode has been Enabled!","success");
          // document.title="Dark mode";
          
      }else{
          setmode('light');
          document.getElementById('Switchmodes').style.color='black';
          document.getElementById('Switchmodes').innerText='Enable Dark Mode';
          document.body.style.backgroundColor='#e3e2f9';
          document.getElementById('dslr').style.color='red';
          document.getElementById('bgmain').style.backgroundImage='pink';
          document.body.style.color='black';
          setColor = {
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            textAlign: 'center',
            backgroundColor: 'blue',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '55vh',
            position: 'relative',
        }
          // showalert("Light mode has been Enabled!","success");
          // document.title="Light mode";
          
      }

  };



  return (
    <>
    <div className="navhead">
      <Navbar togglemode={togglemode} Switchmodes={Switchmodes}/>
    </div>

    <div className="home">
      <Sethead setColor={setColor}/>
    </div>

    <div className="teamTanjiro">

    <h1 className='my-3'>Team Tanjiro</h1>
    </div>

    <div className="d-flex superset">
      
      <Characters/>
    </div>

    <div className="setter">
      <Text reqText="Synopsis - A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister." tasveer="https://www.commonsensemedia.org/sites/default/files/styles/ratio_16_9_small/public/screenshots/csm-tv/demonslayer-tv-screenshot-1.jpg"/>
      <Text reqText="It’s The Heart That Drives People So It Can Grow As Strong As You Need It To." tasveer="https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/05/demon-slayer-kanao-follows-her-art.jpg"/>
      <Text tasveer="https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/09/8.-Tanjiro.jpg"/>
      
      
      
      
    </div>
    

    <div className="netflix proceed">
      
    <a href="https://gauravsachar123.github.io/netflix-clone.github.io/home.html" className="redirect"><img src="https://s3-ap-southeast-1.amazonaws.com/blogimages.crownit.in/1644030935_netflixlogo.png" alt="" className='proceedimg'/>
    </a>
      
    </div>


      


    <div className="banner-bottom"></div>


    {/* <iframe src="http://dl4.sermovie.xyz/Series/2019/Demon.Slayer/S02/720p.10bit/Demon.Slayer.Kimetsu.no.Yaiba.S02E01.JAPANESE.720p.10bit.WEBRip.2CH.x265.HEVC-PSA.Sermovie.mkv" title="description"></iframe> */}

    {/* Test

    <video src="http://2cintz.net/movies/Demon%20Slayer%20-%20Mugen%20Train/demon%20slayer%20mugen%20train.mp4"></video>

    <iframe src="https://rr1---sn-a5meknsy.googlevideo.com/videoplayback?expire=1647798637&ei=DRU3YpLnEc6C-gbPg5OwBQ&ip=216.131.114.109&id=o-AJAU80YgbarjSTsho7p8R21LytxrV-9cD7yjNIovYBJ8&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=y4b1HcCCnHxXAyNo2XSHaZQG&gir=yes&clen=7428675&ratebypass=yes&dur=84.149&lmt=1580871710750821&fexp=24001373,24007246,24162928&c=WEB&txp=2316222&n=axTVKuSWUOw9hg&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgGOSGlcZABfwXR8lWMSavn4gfXjT_SwyqOvzzEplR-3ICIED0gJjIaBuI7HTUJNjjdQEWvl7pAObiR1fIx9VCf8p2&redirect_counter=1&rm=sn-4g5ek77z&req_id=50acbbfa7bb7a3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=Ix&mip=103.217.134.83&mm=31&mn=sn-a5meknsy&ms=au&mt=1647776213&mv=D&mvi=1&pl=0&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgApyPIMfllz2yNNJWv5xXWwzcer_VYFtWGNBZEVYOpTQCIGppHQp2YEAHjMYY7nsTqMFi-9CLpuXm4tEs2FBco9B2" frameborder="10" title="Gaurav"></iframe> */}
    
    

    <div className="mugentrain">
          <div className="enjoy mugen">
                    Kimetsu No Yaiba... 
            </div>
      <div className="ifrm">
        {/* <iframe src="https://github.com/gauravsachar123/netflix/blob/b18ca8efc9af4a7196bdda43c1169374e52c30e8/req/trset1%20(1).mp4?autoplay=1" frameBorder="10" title="Gaurav" className='ifrm'></iframe> */}
          {/* <video src="https://s3-ap-southeast-1.amazonaws.com/blogimages.crownit.in/1647880434_trset1_1.mp4" className='ifrm' autoPlay></video> */}
          {/* <video src="https://demonslayer-hinokami.sega.com/img/video/bg-main.mp4" className='hero-bg' autoPlay loop muted playsInline>
                    
                    </video>
     */}

{/* <video width="320" height="240" autoPlay loop controls>
  <source src="https://github.com/gauravsachar123/netflix/blob/b18ca8efc9af4a7196bdda43c1169374e52c30e8/req/trset1%20(1).mp4" type="video/mp4" /> */}
  {/* <source src="movie.ogg" type="video/ogg" />
  Your browser does not support the video tag. */}
{/* </video> */}

<video
          src="https://s3-ap-southeast-1.amazonaws.com/blogimages.crownit.in/1647880434_trset1_1.mp4"
          controls
          autoPlay={"autoplay"}
          preload="auto"
          
          className='ifrm'
        > </video>

        {/* </iframe> */}
      </div>
                
    </div>
            <div className="banner-bottom"></div>

            {/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /> */}
      <div className="flipper"  key="S1" id='flipped'>
            
            <Flip/>

      </div>      

      <a href="#flipped" className="float">
<img src="https://i.pinimg.com/originals/e5/83/7b/e5837b98ab29d320d3a2143e81e500e7.jpg" alt="" className='float'/>
</a>


      {/* <div className="flipper2"  key="S2">

            
            <Flip2/>
        </div>
             */}

    </>
  );
}

export default App;
