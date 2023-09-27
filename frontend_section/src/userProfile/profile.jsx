import React, {useState, useEffect}from 'react'
import isy from '../images/isy.jpg'
import axios from 'axios';
const Profile = () => {
    const [userData, setUserData] = useState({});
    
    const valueString = sessionStorage?.getItem('token');

// Parse the JSON-like string into a JavaScript object
const currentUser = JSON?.parse(valueString);
// Extract the properties
const token = currentUser?.token;
const userId = currentUser?.user_id;
   

    useEffect(() => {
      const fetchdetail = async ()=>{
        debugger;
        const valueString = sessionStorage.getItem('token');
  // const apiUrl = "http://127.0.0.1:8000/profile/${userId}";
  const apiUrl = `https://domvev.pythonanywhere.com/profile/${userId}/`;
  const currentUser = JSON.parse(valueString);
  const token = currentUser.token;

  const config = {
    headers: {
      'Authorization': `Token ${token}`,
      'Content-Type': 'application/json'
    }
  };
       await axios.get(apiUrl, config)
          .then(response => {
            debugger
            console.log(response)
            setUserData(response.data);
          })
          .catch(error => console.error('Error fetching user profile:', error));
        }
        fetchdetail();
      }, []);

    // useEffect(() => {
    //     const valueString = sessionStorage.getItem('token');
    //     const apiUrl = "https://memorygallery.onrender.com/profile/";
    //     const currentUser = JSON.parse(valueString);
    //     const yourAuthToken = currentUser.token;
    // debugger;
    //     // GET request to fetch user profile data
    //     const headers={
    //         'Authorization': `Token ${yourAuthToken}`
    //       }
    //     fetch(apiUrl, {
    //       method: 'GET',
    //       headers: {
    //         headers:headers
    //       }
    //     })
    //       .then(response => response.json())
    //       .then(data => {
    //         debugger;
    //         console.log("hello", data);
    //         setUserData(data);
    //       })
    //       .catch(error => console.error('Error fetching user profile:', error));
    //   }, []);
  return (
    <div className='container col-12 mt-3'>
        <h3 className='mb-4'>My Profile</h3>
        <div className='row'>
            <div className='col-6 '>
                <div className='mb-5'>
                    <img src={isy}style={{width:"200px", height:"200px",borderRadius:"100px"}} />
                </div>

                
                <button type="submit" className='p-2 border-none rounded-5 ms-4 btn btn-primary text-center'>Edit Profile</button>
            </div>
            <div className='col-6'>
                <div className='col-md-4 col-sm-12'>
                <h4>Username</h4>
                <p>Isioma</p>
                </div>
                <div className='col-md-4 col-sm-12 '>
                <h4>Email Address</h4>
                <p>Isy@gmail.com</p>
                </div>
                <div className='col-md-2 col-sm-12'>
                    <h4>Bio</h4>
                    <textarea>

                    </textarea>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile