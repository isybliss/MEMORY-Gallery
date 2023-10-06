import { useEffect ,useState} from 'react';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import PhotoAlbum from './getAlbum';
import { Tab, TabPane, Tabs } from 'react-bootstrap';
import GetMemories from './getMemories';
import img1 from "./images/img1.jpg"
import img9 from "./images/img9.jpg"
import img8 from "./images/img8.jpg"
import img7 from "./images/img7.jpg"
import Flickity from 'react-flickity-component'
import "flickity/css/flickity.css";
import { TypeAnimation } from 'react-type-animation';


function Home() {
   
    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState('album');
    // useEffect(() => {
    //     let username = sessionStorage.getItem('username');
    //     if(username === '' || username === null) {
    //         navigate('/login');
    //     }
    // }, [])
    const handleTabSelect = (tab) => {
        setSelectedTab(tab);
      };

      const flickityOptions = {
        wrapAround: true,
        autoPlay: true,
        prevNextButtons: true,
        pageDots: false,
      };

    return (
        <div className='container-fluid'>
            <h1 className='text-center'>Memory Gallery</h1>
            <p className='text-center text_color mb-4'>Every Click, a Story. Every Photo, a Memory</p>
        <div className='container-fluid mb-5' style={{
          // background:"#373737",
           height:"60vh"}}>
          <div className='row '>

      
          <div className='col-lg-5 text-white p-2 text-center bg_image align-items-center' >
                <h1 className='mt-5 mb-3'>Do you love pictures?</h1>

                <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Enjoy the photo gallery',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'View the World Through Our Lens',
        1000,
        'Every Picture Tells a Tale',
        1000,
        'Your Portal to Photographic Wonders',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
      className='mt-4'
    />

          </div>
          <div className='col-lg-7'>
          <Flickity
        className={'carousel mb-4'} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
           <div className=" container carousel-cell">
          <img src={img7} style={{ width: "100%", height: "60vh" }} />
          <h3 className="overlay-text fw-bold fs-4 " style={{width:"50%"}}>Your favorite oppose</h3>
        </div>
        <div className=" container carousel-cell">
          <img src={img8}  style={{ width: "100%", height: "60vh" }}/>
          <h3 className="overlay-text fw-bold fs-4 " style={{width:"50%"}}>Your best memories</h3>
        </div> 
        <div className=" container carousel-cell">
          <img src={img9} style={{ width: "100%", height: "60vh" }} />
          <h3 className="overlay-text fw-bold fs-4 " style={{width:"50%"}}>feel the engagment</h3>
        </div>
      </Flickity>
          </div>
          </div>
     
    
                </div>
            <Tabs defaultActiveKey="album" id="uncontrolled-tab-example"  onSelect={handleTabSelect} activeKey={selectedTab} className=' custom-tabs d-flex justify-content-evenly'>
      <TabPane eventKey="album" title="Album" className='border-none fw-bold fs-4'>
        <PhotoAlbum className="ms-5" />
      </TabPane>
      <TabPane eventKey="memories" title="Memories" className='fw-bold fs-4'>
       <GetMemories/>
      </TabPane>
    </Tabs>
        </div>
    )
} 

export default Home