import { useEffect } from 'react';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    useEffect(() => {
        let username = sessionStorage.getItem('username');
        if(username === '' || username === null) {
            navigate('/login');
        }
    }, [])
    return (
        <div>
            <div className='home-header'>
                <Link to={'/'} className='home-link'>Home</Link>
                <Link style={{float:"right"}} to={'/login'} className='home-link'>Logout</Link>
            </div>
            <h1 className='text-center'>Welcome to memory gallery</h1>
        </div>
    )
}

export default Home