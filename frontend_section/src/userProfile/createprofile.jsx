import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Toaster from '../Alert/sweetAlert';
const CreateProfileComponent = () => {
  const [profileData, setProfileData] = useState({
    profile_picture: null,
    bio: '',
  });
  debugger;
  const location = useLocation();
  const QueryParam= new URLSearchParams(location.search)
  const initialEmail = QueryParam.get('email');
  const initialUsername = QueryParam.get('username');
  const valueString = sessionStorage.getItem('token');
  const currentUser = JSON.parse(valueString);
  const user = currentUser?.user_id;

  const [email, setEmail] = useState(initialEmail); // Use useState to manage email
  const [username, setUsername] = useState(initialUsername);
//   const handleInputChange = (event) =>{
//     const{name, files, value}= event.target;
//     if(name === "bio"){
//         setProfileData({...profileData, [name]:value});

//     }else if(name === "profile_picture"){
//         setProfileData({...profileData, [name]:files[0]});
//     }
//   }
  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    if (name === 'profile_picture') {
      setProfileData({ ...profileData, profile_picture: files[0] });
    } else {
      setProfileData({ ...profileData, [name]: event.target.value });
    }
  };
 

const config = {
    headers: {
      'Authorization': `Token ${currentUser.token}`,
      // 'Content-Type': 'application/json'
    }
  };

//   let url = "https://domvev.pythonanywhere.com/create-profile/";
             let url = "https://domvev.pythonanywhere.com/edit-profile/";
             const handleSubmit = async (event) => {
                event.preventDefault();
                debugger
                try {
                  const formData = new FormData();
                  formData.append('profile_picture', profileData.profile_picture);
                  formData.append('bio', profileData.bio);
                  formData.append('email', email);
                  formData.append('username', username);
                  formData.append('user',user);
              
                  const response = await axios.put(url, formData, config);
              debugger;
                  console.log('Profile created successfully:', response.data);
                  if(response.status === 200){
                    Toaster().successAlert("Profile updated successfully")
                  }
                } catch (error) {
                  console.error('Error creating profile:', error);
                }
              };
              

  return (
    <div className='container-fluid'>
      <div className='row'>
      <h1  className='text-center'>Create Profile</h1>
      <div className='col-10  mx-auto text-center'>
       
      <div className='card text-center p-1 py-5 shadow-sm '>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div className='row justify-content-center'>
        <div className='col-md-6 col-lg-5'>
          <label htmlFor="profile_picture" className='fw-bold fs-5 mb-3'>Profile Picture:</label>
          <input type="file" required className='form-control' id="profile_picture" name="profile_picture" accept="image/*" onChange={handleInputChange} />
        </div>
        <div className='col-md-6 col-lg-5'>
          <label htmlFor="bio" className='fw-bold fs-5 mb-3'>Bio:</label>
          <textarea id="bio" required name="bio" className='form-control' value={profileData.bio} onChange={handleInputChange} />
        </div>
      </div>
      <div className='row justify-content-center mb-3'>
        <div className='col-md-6 col-lg-5'>
          <label htmlFor="email" className='fw-bold fs-5 mb-3'>Email:</label>
          <input type="email" required id="email" name="email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='col-md-6 col-lg-5 '>
          <label htmlFor="username" className='fw-bold fs-5 mb-3'>Username:</label>
          <input type="text" required id="username" className='form-control' name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        </div>
        <button type="submit" className='mt-3 p-2 btn btn-primary'>Save Profile</button>
      </form>
      </div>
      </div>
      </div>
    </div>
  );
};

export default CreateProfileComponent;
