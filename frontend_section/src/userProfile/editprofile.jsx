import React from 'react'

const EditProfile = () => {
  return (
    <form className='mt-3 p-3'>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          <strong>Username</strong>
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
        <strong>Email</strong>
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="joined-on" className="form-label">
        <strong>Joined on</strong>
        </label>
        <input
          type="number"
          className="form-control"
          id="joined-on"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="bio" className="form-label">
        <strong>Bio</strong>
        </label>
        <textarea
          className="form-control"
          id="bio"
          rows={3}
          defaultValue={""}
        />
      </div>
    </form>
  )
}

export default EditProfile