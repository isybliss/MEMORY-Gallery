import React,  {useState} from 'react'
import "./photo.css";
import { closeIcon } from 'bootstrap/dist/css/bootstrap.css';
import isy from "../src/images/isy.jpg";
import isioma from "../src/images/isy2.jpg";
import background from "../src/images/cgpa-background.jpg";
import dominic from "../src/images/dominic.jpg";
import link from "../src/images/failed links.png";
import IMg6 from "../src/images/IMG-20220315-WA0019.jpg";
const GetMemories = () => {
    const memories = [
        {
            id:2,
            title:'Photo2',
            description: 'sunset over mountain',
            imageUrl: isioma,
        },
        {
            
            id:1,
            title:'Photo1',
            description: " A beautiful landscape",
            imageUrl: isy
        },
    
        {
            id:4,
            title:'Photo4',
            description: " A beautiful sea",
            imageUrl: background,
           
        },
        {
          

            id:3,
            title:'Photo3',
            description: 'moonlight over mountain',
            imageUrl: dominic,
        },
        {
            id:5,
            title:'Photo5',
            description: " A beautiful landscape",
            imageUrl: link
        },
        {
            id:1,
            title:'Photo6',
            description: " A beautiful landscape",
            imageUrl: IMg6
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
          {memories?.map((item, index) => (
            <div className="photo" key={index} onClick={() => getImg(item.imageUrl, item.title, item.description)}>
              <div className="">
                <img src={item.imageUrl} alt="hello" style={{ width: '100%' }} />
                {/* <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </>
    )
}

export default GetMemories