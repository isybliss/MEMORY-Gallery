import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Memories = () => {
    const [albumData, setAlbumData] = useState({
        title: '',
        caption: '',
        coverImage: null,
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
    
        // Create a JSON object with the album data
        const jsonData = {
          title: albumData.title,
          caption: albumData.caption,
          coverImage: albumData.coverImage, // This is now a JSON-encoded string
        };
    
        // Make an API request to create the album with JSON data
        fetch('/api/albums', {
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
          <h1 className='text-center mt-3 mb-3'>Create Memory</h1>
          <div className='row'>
            <div className='col-12'>
    
           
          <form onSubmit={handleSubmit} className='text-center m-auto'>
            <div className='row mb-4 align-items-center d-flex justify-content-center'>
            <div className='col-lg-6 d-flex col-sm-6 align-items-center mb-3'>
              <label className='text-lg-start text-center'>Title:</label>
              <input
              className='form-control ms-3'
                type="text"
                name="title"
                value={albumData.title}
                onChange={handleInputChange}
              />
            </div>

            <div className='col-lg-6  col-sm-6 d-flex align-items-center mb-3'>
              <label className='text-lg-start text-center'>caption:</label>
              <input
              type='text'
                className='form-control ms-2'
                name="caption"
                value={albumData.caption}
                onChange={handleInputChange}
              />
            </div>

            <div className='col-lg-6 col-sm-6 d-flex mb-3 '>
              <label className='text-lg-start text-center'>Cover Image:</label>
              <input
                type="file"
                accept="image/*"
                name="coverImage"
                className='form-control'
                onChange={handleImageChange}
              />
            </div>
           
            </div>
           
    
            {/* <div className='row mb-4 d-flex justify-content-center'>
           
            </div>
             <div className='row mb-4 d-flex justify-content-center'>
            
            </div> */}
  
            <button type="submit" className='p-2 w-25 text-center border-none rounded-5 ms-4 btn btn-primary'>Create</button>
            
          </form>
          </div>
          </div>
        </div>
      );
}

export default Memories