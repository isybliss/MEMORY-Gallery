import { useEffect } from 'react';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import PhotoAlbum from './photo';

function Home() {
    const navigate = useNavigate();
    // useEffect(() => {
    //     let username = sessionStorage.getItem('username');
    //     if(username === '' || username === null) {
    //         navigate('/login');
    //     }
    // }, [])
    return (
        <div>
            <div className='home-header'>
                {/* <Link to={'/'} className='home-link'><img src={ logo } style={{width: '20px'}}/></Link>
                <Link style={{float:"right"}} to={'/login'} className='home-link'>Logout</Link> */}
            </div>
            <h1 className='text-center'>Welcome to memory gallery</h1>
            <p className='text-center'>A simple plan for you and your memory</p>
            <PhotoAlbum />
        </div>
    )
}

export default Home