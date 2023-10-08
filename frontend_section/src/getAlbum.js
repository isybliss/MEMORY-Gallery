import React, { useState } from 'react';
import "./photo.css";
import { closeIcon } from 'bootstrap/dist/css/bootstrap.css';
import  img1 from "../src/images/img1.jpg";
import  img2 from "../src/images/img2.jpg";
import  img3 from "../src/images/img3.jpg";
import  img4 from "../src/images/img4.jpg";
import  img5 from "../src/images/img5.jpg";
import  img6 from "../src/images/img6.jpg";
import { Nav, Tab } from 'react-bootstrap';
function PhotoAlbum() {
    const [key, setKey] = useState('default');
    // const [photos, setPhotos] = useState([]);
    const photos = [
        {
            id:1,
            title:'Photo1',
            description: " A beautiful landscape",
            imageUrl: img3
        },
        {
            id:2,
            title:'Photo2',
            description: 'sunset over mountain',
            imageUrl:  img2,
        },
        {
            id:3,
            title:'Photo3',
            description: 'moonlight over mountain',
            imageUrl: img1,
        },
        {
            id:4,
            title:'Photo4',
            description: " A beautiful sea",
            imageUrl:  img5,
        },
        {
            id:5,
            title:'Photo5',
            description: " A beautiful landscape",
            imageUrl:  img4,
        },
        {
            id:1,
            title:'Photo6',
            description: " A beautiful landscape",
            imageUrl: img6
        },
    ]
    const [model, setModel] = useState(false);
    const [tempImageDetails, setTempImageDetails] = useState(null);
  
    const getImg = (imageUrl, title, description) => {
      setTempImageDetails({ imageUrl, title, description });
      setModel(true);
    };
  
    return (
      <>
        <div className={model ? 'model open' : 'model'}>
          {tempImageDetails && (
            <div className="position-relative">
              <img src={tempImageDetails.imageUrl} alt={tempImageDetails.title} />
              <div className="position-absolute ms-3 text-white">
                <h5 className="card-title">{tempImageDetails.title}</h5>
                <p className="card-text">{tempImageDetails.description}</p>
              </div>
            </div>
          )}
          <div className="close" onClick={() => setModel(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
        </div>
  
        <div className="photo-gallery">
          {photos?.map((item, index) => (
            <div className="photo" key={index} onClick={() => getImg(item.imageUrl, item.title, item.description)}>
              <div className="card shadow-sm rounded-3 ">
                <img src={item.imageUrl} alt="hello" style={{ width: '445px', height:'400px' }} />
                {/* <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  
}; 

export default PhotoAlbum;