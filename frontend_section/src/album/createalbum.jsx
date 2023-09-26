import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

function CreateAlbum() {
  const valueString = sessionStorage?.getItem('token');

// Parse the JSON-like string into a JavaScript object
const currentUser = JSON?.parse(valueString);
// Extract the properties
const token = currentUser?.token;
const userId = currentUser?.user_id;
  const [albumData, setAlbumData] = useState({
    title: '',
     description: '',
    coverImage: null,
    id:0,
  });
  const navigate= useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAlbumData({ ...albumData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

   
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64String = event.target.result;
      setAlbumData({ ...albumData, coverImage: base64String });
    };

   
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    debugger;
    // Create a JSON object with the album data
    const jsonData = {
      id:userId,
      title: albumData.title,
      description: albumData.description,
      coverImage: albumData.coverImage, // This is now a JSON-encoded string
    };

    // Make an API request to create the album with JSON data
    fetch("https://memorygallery.onrender.com/albums/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => response.json())
      .then((data) => {
      
        navigate('/albums'); // Redirect to the albums list
      })
      .catch((error) => {
       
        console.error('Error:', error);
      });
  };

  return (
    <div className='container-fluid'>
      <h1 className='text-center mt-3 mb-3'>Create Album</h1>
      <div className='row'>
        <div className='col-12'>

       
      <form onSubmit={handleSubmit} className='text-center'>
        <div className='row mb-4 align-items-center d-flex justify-content-center'>
        <div className='col-lg-6 d-flex col-sm-6'>
          <label className='text-lg-start text-center'>Title:</label>
          <input
          className='form-control ms-3'
            type="text"
            name="title"
            value={albumData.title}
            onChange={handleInputChange}
          />
        </div>
       
        </div>
        <button type="submit" className='p-2 w-25 text-center border-none rounded-5 ms-4 btn btn-primary'>Create</button>

        <div className='row mb-4 d-flex justify-content-center'>
        <div className='col-lg-6 mb-3 ms-2'>
          <label className='text-lg-start text-center'>Cover Image:</label>
          <input
            type="file"
            accept="image/*"
            name="coverImage"
            onChange={handleImageChange}
          />
        </div>
        </div>
         <div className='row mb-4 d-flex justify-content-center'>
        <div className='col-lg-6 ms-5'>
          <label className='text-lg-start text-center'>Description:</label>
          <textarea
            className='form-control w-75'
            name="description"
            value={albumData.description}
            onChange={handleInputChange}
          />
        </div>
        </div> 

       
        
      </form>
      </div>
      </div>
    </div>
  );
}

export default CreateAlbum;