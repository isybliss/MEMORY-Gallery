import { useEffect ,useState} from 'react';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import PhotoAlbum from './photo';
import { Tab, TabPane, Tabs } from 'react-bootstrap';
import GetMemories from './getMemories';
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
    return (
        <div>
            <div className='home-header'>
                {/* <Link to={'/'} className='home-link'><img src={ logo } style={{width: '20px'}}/></Link>
                <Link style={{float:"right"}} to={'/login'} className='home-link'>Logout</Link> */}
            </div>
            <h1 className='text-center'>Memory Gallery</h1>
            <p className='text-center'>A simple plan for you and your memory</p>

            <Tabs defaultActiveKey="album" id="uncontrolled-tab-example"  onSelect={handleTabSelect} activeKey={selectedTab} className=' custom-tabs d-flex justify-content-evenly'>
      <TabPane eventKey="album" title="Album" className='border-none'>
        <PhotoAlbum className="ms-5" />
      </TabPane>
      <TabPane eventKey="memories" title="Memories">
       <GetMemories/>
      </TabPane>
    </Tabs>
        </div>
    )
}

export default Home