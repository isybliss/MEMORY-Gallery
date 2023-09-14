import React from 'react'
import isy from '../images/isy.jpg'
const Profile = () => {
  return (
    <div className='container col-12 mt-3'>
        <h3 className='mb-4'>My Profile</h3>
        <div className='row'>
            <div className='col-6 '>
                <div className='mb-5'>
                    <img src={isy}style={{width:"200px", height:"200px",borderRadius:"100px"}} />
                </div>

                
                <button className='border-none rounded-5 ms-4 btn btn-primary'>Edit Profile</button>
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
                    <p>Bio</p>
                    <textarea>

                    </textarea>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile