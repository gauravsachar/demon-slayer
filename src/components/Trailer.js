import React from 'react'

function Trailer() {{
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
  
    useEffect(() => {
      window.addEventListener('scroll', debounce(handleScroll, 200))
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []}
  
    const startVideo = () => {
      videoRef.current.pause();
      setPlaying(false);
    }
  
    const pauseVideo = () => {
      videoRef.current.play();
      setPlaying(true);
    }
  
    const handleScroll = (e) => {
      if (playing) {
        pauseVideo();
      }
    }
  
    const handleVideoPress = () => {
      if (playing) {
        startVideo();
      } else {
        pauseVideo();
      }
    };
  
    return (
      <div className="video ifrm">
        <video
          onClick={handleVideoPress}
          className="ifrm"
          loop
          ref={videoRef}
          src={url}
        ></video>
        </div>
      )
  }

export default Trailer