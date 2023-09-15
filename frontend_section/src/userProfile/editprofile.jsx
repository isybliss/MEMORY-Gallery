import React from 'react'

const EditProfile = () => {
  return (
    <div className="container">
      <div className='row justify-content-center mt-5'>
        <form className='col-lg-6'>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              <strong>Username</strong>
            </label>
            <input
              type="text"
              className="form-control border-primary"
              id="username"
              
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
            <strong>Email</strong>
            </label>
            <input
              type="email"
              className="form-control border-primary"
              id="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="joined-on" className="form-label">
            <strong>Joined on</strong>
            </label>
            <input
              type="number"
              className="form-control border-primary"
              id="joined-on"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="bio" className="form-label">
            <strong>Bio</strong>
            </label>
            <textarea
              className="form-control border-primary"
              id="bio"
              rows={3}
              defaultValue={""}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProfile