import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import Toaster from '../Alert/sweetAlert';
const Memories =  () => {
    const [memoryData, setMemoryData] = useState({
        caption: '',
        image: "",
         video:"",
         album:''
      });
      const [albumData, setAlbumData]= useState([]);
      const valueString = sessionStorage?.getItem('token');
  const currentUser = JSON?.parse(valueString);
   const user = currentUser?.user_id;
  // const user = 1;
      const navigate= useNavigate();
    
      const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if(name === "image" || name === "video" ){
          setMemoryData({ ...memoryData, [name]: files[0] })
        }else{
          setMemoryData({...memoryData, [name]: value})
        }
      };
      // const handleInputChange = (e) => {
      //   const { name, value, files } = e.target;
      
      //   if (name === 'image' || name === 'video') {
      //     // Handle file inputs
      //     setMemoryData({
      //       ...memoryData,
      //       [name]: files[0],
      //       // Set the other file type to null
      //       [name === 'image' ? 'video' : 'image']: null
      //     });
      //   } else {
      //     // Handle text inputs
      //     setMemoryData({
      //       ...memoryData,
      //       [name]: value
      //     });
      //   }
      // };
      
     

      useEffect(()=>{
        const Apiurl = "https://domvev.pythonanywhere.com/albums/"
        const config = {
          headers: {
            'Authorization': `Token ${currentUser.token}`,
            // 'Content-Type': 'application/json'
          }
        };
        
          const fetchAlbum = async ()=>{
            debugger;
            try{
           const response = await axios.get(Apiurl,config)
              debugger;
                console.log(response.data.albums)
                setAlbumData(response.data.albums);
              
          }catch(error){
          console.log(error)

        }
      }
        fetchAlbum();
        
      },[])
    
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        debugger;
        try{
        const formData = new FormData();
        formData.append("caption", memoryData.caption);
        formData.append("image", memoryData.image);
        formData.append("video", memoryData.video);
        formData.append('album', memoryData.album);
       
       
        const config = {
          headers: {
            'Authorization': `Token ${currentUser.token}`,
            
          }
        };
        const response =  await axios.post("https://domvev.pythonanywhere.com/memory/", formData, config)
         debugger;
          console.log(response)
          Toaster().successAlert("memory added successfully!")
        }catch(error){
          console.log(error)
          Toaster().errorAlert("An errror occurred during upload!")
        }
      };
    
      return (
        <div className='container-fluid mb-5' encType="multipart/form-data">
          <h1 className='text-center mt-3 mb-5'>Create Memory</h1>
          <div className='row justify-content-center'>
            <div className='col-10'>
    
           <div className='card p-3 shadow-lg'>
          <form onSubmit={handleSubmit} className='text-center m-auto'>
            <div className='row mb-4 align-items-center d-flex justify-content-center'>

            <div className='col-lg-6  col-sm-6 d-flex align-items-center mb-3'>
              <label className='text-lg-start text-center fw-bold'>caption:</label>
              <input
              type='text'
                className='form-control ms-2'
                name="caption"
                value={memoryData.caption}
                onChange={handleInputChange}
              />
            </div>


             <div className='col-lg-6 d-flex col-sm-6 align-items-center mb-3'>
             <select id="album" className='form-control' onChange={(e) => setMemoryData({ ...memoryData, album: e.target.value })}>
  <option>--choose an album--</option>
  {albumData &&
    albumData.length > 0 &&
    albumData?.map((album) => (
      <option value={album.id} key={album.id}>
        {album.title}
      </option>
    ))}
</select>

            </div> 


            <div className='col-lg-6 col-sm-6 d-flex mb-3 '>
              <label className='text-lg-start text-center'>Image:</label>
              <input
                type="file"
                accept="image/*"
                name="image"
                className='form-control'
                onChange={handleInputChange}
                id="image"
              />
            </div>

           <div className='col-lg-6 col-sm-6 d-flex mb-3 '>
          <label htmlFor="video" className='d-inline-block'>Video:</label>
          <input type="file" id="video" name="video" className='form-control' accept="video/*" onChange={handleInputChange} />
        </div> 
           
            </div>
           
  
            <button type="submit" className='p-2 w-25 text-center border-none rounded-5 ms-4 btn btn-primary'>Create</button>
            
          </form>
          </div>
          </div>
          </div>
        </div>
      );
}

export default Memories