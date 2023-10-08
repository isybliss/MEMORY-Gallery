import React, { useState, useEffect } from 'react';
import "../photo.css";
import axios from "axios";
import { Card, Button,Row, Col } from 'react-bootstrap';
function GetAllMemory() {
  const [memories, setMemories] = useState([]);
  const [model, setModel] = useState(false);
  const [tempImageDetails, setTempImageDetails] = useState(null);
  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const valueString = sessionStorage.getItem('token');
        const currentUser = JSON.parse(valueString);
        const userId = currentUser?.user_id;
        debugger;
        const apiUrl = "https://domvev.pythonanywhere.com/memory/";
        
        const config = {
          headers: {
            'Authorization': `Token ${currentUser.token}`,
            'Content-Type': 'multipart/form-data',
          }
        };
        debugger;
        const response = await axios.get(apiUrl, config);
        console.log(response.data);
        setMemories(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    }
    fetchAlbum();
  }, []);

  const getImg = (image, caption, video) => {
    setTempImageDetails({ image, caption, video });
    setModel(true);
  };

  return (
   
    <>
    <div className="container-fluid">
      <h1 className='text-center fw-bold mb-3'>My Memories</h1>
    <Row xs={1} md={2} lg={3} className="g-4">
      {memories && memories.length > 0 && memories.map((item, index) =>{
        const dateobj = new Date(item.date);
        const option= {year:"numeric", month:"long", day:"numeric"};
        const formatdate = dateobj.toLocaleDateString(undefined, option);

        return (
            <Col key={index}>
        <Card  style={{ width: '18rem', margin: '10px',height:"250px" }} onClick={() => getImg(item.image, item.caption, item.video)}>
          <div style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '10px'
      }}>
        {item.image ?
        <Card.Img variant="top"src={`https://domvev.pythonanywhere.com${item.image}`} style={{width:"288px", height:"250px"}} className='img-fluid'/>: (
            <video
              controls
              src={item.video}
              alt={item.caption}
              style={{ width: '288px', height: '250px', objectFit: 'cover' }}
            />
          )}
        <div style={{
          position: 'absolute',
          bottom: '0',
          width: '100%',
          background: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          padding: '10px',
          boxSizing: 'border-box'
        }} className='fs-4 '>
            
          
          {formatdate}
        </div>
      </div>
        </Card>
        </Col>
        )
})}
</Row>
    </div>

    {tempImageDetails && (
      <div className={model ? 'model open' : 'model'}>
        <div className="position-relative">
            {tempImageDetails.image ?
          <img src={`https://domvev.pythonanywhere.com${tempImageDetails.image}`} alt={tempImageDetails.caption} />:
          (<video src={tempImageDetails.video }  
          style={{ width: '288px', height: '250px', objectFit: 'cover' }} controls/>)}
          <div className="position-absolute ms-3 text-white">
            <h5 className="card-title">{tempImageDetails.caption}</h5>
            <p className="card-text">{tempImageDetails?.description}</p>
          </div>
        </div>
        <div className="close" onClick={() => setModel(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
        
      </div>
    )}
  </>
  );
};

export default GetAllMemory;
