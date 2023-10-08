import React, {useState, useEffect}from 'react'
import isy from '../images/isy.jpg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();
    const handleCreateProfile = () => {
      debugger;
      navigate(`/create?username=${userData.username}&email=${userData.email}`);
    }
    useEffect(() => {
      const fetchDetail = async () => {
        debugger;
        const valueString = sessionStorage.getItem('token');
        const currentUser = JSON.parse(valueString);
        const userId = currentUser?.user_id;
        // const apiUrl = `http://127.0.0.1:8000/profile/${userId}/`
        const apiUrl=`https://domvev.pythonanywhere.com/profile/${userId}/`
        
        const config = {
          headers: {
            'Authorization': `Token ${currentUser.token}`,
            'Content-Type': 'application/json'
          }
        };
    
        try {
          const response = await axios.get(apiUrl, config);
          debugger;
          console.log(response)
          setUserData(response.data);

        } catch (error) {
          console.error('Error fetching user profile:', error);
        }
      }
    
      fetchDetail();
    }, []);
    console.log('Profile Picture URL:', userData?.profile_picture);


    return (
      <div className='container-fluid  mt-3 mb-5'>
        <h3 className='mb-4 text-center'>My Profile</h3>
        <div className='row mx-auto align-items-center col-8 '>
          <div className='card p-2 shadow-lg'>
            <div className='row justify-content-around align-items-center'>
          <div className='col-lg-6 text-center'>
            {/* <div className='mb-3 mt-2 img-responsive'>
              <img src={`https://domvev.pythonanywhere.com${userData?.profile_picture}`}
               style={{ width: "160px", height: "160px", borderRadius: "100px" }} alt="Profile" />
            </div> */}
            <div className='mb-3 mt-2 img-responsive'>
  {userData?.image ? (
    <img
      src={`https://domvev.pythonanywhere.com${userData.profile_picture}`}
      style={{ width: "160px", height: "160px", borderRadius: "100px" }}
      alt="Profile"
    />
  ) : (
    <div
      style={{
        width: "160px",
        height: "160px",
        borderRadius: "100px",
        backgroundColor: "gray",
        display:"inline-block"
      }}
    >
      <span style={{ color: "white" }}>Avatar</span>
    </div>
  )}
</div>



            <div className='mb-3'>
              <h4>Bio</h4>
              <p> {userData?.bio}</p>
            </div>
           
          </div>
         
          <div className='col-lg-4  text-center'>
            <div className='col-md-4 col-lg-5 col-sm-12'>
              <h4 className='mb-3'>Username</h4>
              <p>{userData?.username}</p>
            </div>
            <div className='col-md-4 col-lg-6 col-sm-12 mt-5'>
              <h4 className='mb-4'>Email Address</h4>
              <p>{userData?.email}</p>
            </div>
           
          </div>
          </div>
          <div className='col-lg-6 col-md-4 col-sm-12 text-center mt-3 mx-auto '> <button type="submit" className='p-2   text-center 
          border-none rounded-5 btn btn-primary text-center'
             onClick={handleCreateProfile}>Edit Profile</button></div>
         </div>
        </div>
      </div>
    );
    
  
}

export default Profile