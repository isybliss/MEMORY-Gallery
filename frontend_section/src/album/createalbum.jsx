import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import Toaster from '../Alert/sweetAlert';
import "./album.css"
function CreateAlbum() {
  const valueString = sessionStorage?.getItem('token');
  const currentUser = JSON?.parse(valueString);
  const user = currentUser?.user_id;

  const [albumData, setAlbumData] = useState({
    title: '',
    description: '',
    cover_photo:'',
  });

  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, files, } = e.target;
    if(name === "cover_photo"){
    setAlbumData({ ...albumData, [name]: files[0] });
  }else{
    setAlbumData({...albumData, [name]: value})
  }
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    debugger;
    try {
      const config = {
        headers: {
          'Authorization': `Token ${currentUser.token}`,
          'Content-Type': 'multipart/form-data'
        }
      };

    
      const formData = new FormData();
      formData.append("title", albumData.title);
      formData.append("description", albumData.description);
      formData.append("cover_photo",albumData.cover_photo);
      formData.append("user", user);

      const response = await axios.post("https://domvev.pythonanywhere.com/albums/", formData, config);
      debugger;
      if (response.status === 201) {
        console.log(response);
        Toaster().successAlert("Album succesfully created", "/albums/")
      }
    } catch (error) {
      console.error('Error:', error);
      // setError(error);
    } finally {
      // setLoading(false);
    }
  };

  

  return (
    <div className='container-fluid mb-5' 
     encType="multipart/form-data"
    >
      <h1 className='text-center mt-3 mb-3'>Create Album</h1>
      <div className='row justify-content-center'>
        <div className='col-8'>
    <div className='row'>
       <div  className='card p-4 shadow-lg'>
      <form onSubmit={handleSubmit} className='text-center'>
        <div className='row mb-4 align-items-center 
        d-flex justify-content-evenly'>
        <div className='col-lg-6  col-sm-6'>
          <label className='text-lg-start text-center fw-bold mb-2'>Title:</label>
          <input
          className='form-control '
            type="text"
            name="title"
            value={albumData.title}
            onChange={handleInputChange}
            required
          />
        </div>
       
        </div>
       
        <div className='row mb-4 d-flex justify-content-evenly'>
        <div className='col-lg-6 mb-3  '>
          <label className='text-lg-start text-center fw-bold mb-2'>Cover Photo:</label>
          <input
            type="file"
            accept="image/*"
            name="cover_photo"
            onChange={handleInputChange}
            className='form-control'
            
          />
        </div>
        </div> 
        <div className='row mb-4 d-flex justify-content-evenly'>
        <div className='col-lg-6 '>
          <label className='text-lg-start text-center fw-bold mb-2'>Description:</label>
          <textarea
            className='form-control '
            name="description"
            value={albumData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        </div> 

        <button type="submit" className='p-2 w-25 text-center border-none rounded-5 ms-4 btn btn-primary'>Create</button>
        
      </form>
      </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default CreateAlbum;